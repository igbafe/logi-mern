import express from "express";
import dotenv from "dotenv";
import shipperRouter from "./routes/shipper.route.js";
import receiverRouter from "./routes/receiver.route.js";
import shipmentRouter from "./routes/shippment.route.js";
//

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Importing routes
app.use(express.json());
app.use("/api/shipper", shipperRouter);
app.use("/api/receiver", receiverRouter);
app.use("api/shippment", shipmentRouter);

app.listen(PORT, () => {
  //   connectDB();
  console.log("Server is running on port http://localhost:" + PORT);
});
