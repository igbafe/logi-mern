import Shippment from "../model/shippment.model.js";
import mongoose from "mongoose";

export const createShippment = async (req, res) => {
  const shippment = req.body;
  // Check if the request body is an array
  if (!Array.isArray(shippment) || shippment.length === 0) {
    return res
      .status(400)
      .json({ success: false, message: "Provide an array of shippment" });
  }
  const invalidShipment = shippment.find(
    (s) =>
      !s.origin ||
      !s.destination ||
      !s.weight ||
      !s.paymentMode ||
      !s.product ||
      !s.carrier ||
      !s.mode ||
      !s.carrierId ||
      !s.quantity ||
      !s.pickupDate ||
      !s.pickupTime
  );

  if (invalidShipment) {
    return res.status(400).json({
      success: false,
      message: "All fields are required for each shipment",
    });
  }
  try {
    const newShippments = await Shippment.insertMany(shippment);
    return res.status(201).json({
      success: true,
      message: "Shippments created successfully",
      data: newShippments,
    });
  } catch (error) {
    console.error("Error creating shippment:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while creating shippment",
    });
  }
};

export const getShippment = async (req, res) => {
  try {
    const shippment = await Shippment.find({});
    res.status(200).json({ success: true, data: shippment });
  } catch (error) {
    console.log("Error fetching shippment:", error);
    res.status(500).json({
      success: false,
      message: "Server error while fetching shippment",
    });
  }
};
