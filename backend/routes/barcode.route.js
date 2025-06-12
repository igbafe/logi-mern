import express from "express";
import { getBarcode } from "../controller/barcode.controller.js";

const barcodeRouter = express.Router();

barcodeRouter.get("/:code", getBarcode);

export default barcodeRouter;
