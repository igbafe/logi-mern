import Shipper from "../model/shipper.model.js";
import mongoose from "mongoose";

export const createShipper = async (req, res) => {
  const shippers = req.body;

  // Check if the request body is an array
  if (!Array.isArray(shippers) || shippers.length === 0) {
    return res
      .status(400)
      .json({ success: false, message: "Provide an array of shippers" });
  }

  // Validate each shipper in the array
  const invalidShipper = shippers.find(
    (s) => !s.name || !s.phone || !s.email || !s.address
  );

  if (invalidShipper) {
    return res.status(400).json({
      success: false,
      message: "Each shipper must include name, phone, email, and address",
    });
  }

  try {
    const newShippers = await Shipper.insertMany(shippers);
    return res.status(201).json({
      success: true,
      message: "Shippers created successfully",
      data: newShippers,
    });
  } catch (error) {
    console.error("Error creating shippers:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while creating shippers",
    });
  }
};

export const getShipper = async (req, res) => {
  try {
    const shippers = await Shipper.find({});
    res.status(200).json({ success: true, data: shippers });
  } catch (error) {
    console.error("Error fetching shippers:", error);
    res.status(500).json({
      success: false,
      message: "Server error while fetching shippers",
    });
  }
};
