import Reciever from "../model/reciever.model.js";
import mongoose from "mongoose";

export const createReceiver = async (req, res) => {
     const reciever = req.body;

  // Check if the request body is an array
  if (!Array.isArray(reciever) || reciever.length === 0) {
    return res
      .status(400)
      .json({ success: false, message: "Provide an array of reciever" });
  }

  // Validate each shipper in the array
  const invalidReciever = reciever.find(
    (r) => !r.name || !r.phone || !r.email || !r.address
  );

  if (invalidReciever) {
    return res.status(400).json({
      success: false,
      message: "Each reciever must include name, phone, email, and address",
    });
  }

  try {
    const newReciever = await Reciever.insertMany(reciever);
    return res.status(201).json({
      success: true,
      message: "reciever created successfully",
      data: newReciever,
    });
  } catch (error) {
    console.error("Error creating reciever:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while creating reciever",
    });
  }
};

export const getReceiver = async (req, res) => {
    try {
    const receiver = await Reciever.find({});
    res.status(200).json({ success: true, data: receiver });
  } catch (error) {
    console.error("Error fetching shippers:", error);
    res.status(500).json({
      success: false,
      message: "Server error while fetching receiver",
    });
  }
};
