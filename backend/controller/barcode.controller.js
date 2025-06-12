import Reciever from "../model/reciever.model.js";
import Shipper from "../model/shipper.model.js";
import Shippment from "../model/shippment.model.js";

export const getBarcode = async (req, res) => {
  const { code } = req.params;

  if (!/^\d{8}$/.test(code)) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid 8-digit code" });
  }

  try {
    const randomShipper = await Shipper.aggregate([{ $sample: { size: 1 } }]);
    const randomReceiver = await Reciever.aggregate([{ $sample: { size: 1 } }]);
    const randomShippment = await Shippment.aggregate([
      { $sample: { size: 1 } },
    ]);

    if (
      !randomShipper.length ||
      !randomReceiver.length ||
      !randomShippment.length
    ) {
      return res
        .status(404)
        .json({ success: false, message: "Not enough data in DB" });
    }

    return res.status(200).json({
      success: true,
      message: "Barcode fetched successfully",
      data: {
        code,
        shipper: randomShipper[0],
        receiver: randomReceiver[0],
        shipment: randomShippment[0],
      },
    });
  } catch (error) {
    console.error("Error fetching barcode:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while fetching barcode",
    });
  }
};
