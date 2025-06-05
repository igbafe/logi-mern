import express from "express";
import {
  createShippment,
  getShippment,
} from "../controller/shippment.controller.js";

const shipmentRouter = express.Router();

shipmentRouter.post("/", createShippment);
shipmentRouter.get("/", getShippment);

export default shipmentRouter;
