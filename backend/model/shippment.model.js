import mongoose from "mongoose";

const shippmentSchema = new mongoose.Schema({
  origin: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  paymentMode: {
    type: String,
    required: true,
    enum: ["Prepaid", "Cash on Delivery"],
  },
  product: {
    type: String,
    required: true, 
  },
  carrier: {
    type: String,
    required: true,
  },
  mode: {
    type: String,
    required: true,
    enum: ["Air", "Sea", "Land"],
  },
  carrierId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Shipper",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  pickupDate: {
    type: Date,
    required: true,
  },
  pickupTime: {
    type: String,
    required: true,
  },
});

const Shippment = mongoose.model("Shippment", shippmentSchema);

export default Shippment;
