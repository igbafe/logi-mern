import express from "express";
import dotenv from "dotenv";
import shipperRouter from "./routes/shipper.route.js";
import receiverRouter from "./routes/receiver.route.js";
import shipmentRouter from "./routes/shippment.route.js";
import { connectDB } from "./config/db.js";
import barcodeRouter from "./routes/barcode.route.js";
import cors from "cors";
//

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(cors());

// Importing routes
app.use(express.json());
app.use("/api/shipper", shipperRouter);
app.use("/api/receiver", receiverRouter);
app.use("/api/shippment", shipmentRouter);
app.use("/api/barcode", barcodeRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  connectDB();
  console.log("Server is running on port http://localhost:" + PORT);
});
