import express from "express";
import { createShipper, getShipper } from "../controller/shipper.controller.js";

const shipperRouter = express.Router();

shipperRouter.post("/", createShipper);
shipperRouter.get("/", getShipper);

export default shipperRouter;
