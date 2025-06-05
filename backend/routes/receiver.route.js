import express from "express";
import { createReceiver, getReceiver } from "../controller/reciever.controller.js";

const receiverRouter = express.Router();

receiverRouter.post("/", createReceiver);
receiverRouter.get("/", getReceiver);

export default receiverRouter;
