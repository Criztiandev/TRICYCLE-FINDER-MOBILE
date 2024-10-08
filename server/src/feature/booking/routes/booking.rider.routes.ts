import express from "express";
import bookingRequestRoute from "./booking-request.routes";
import bookingRiderController from "../controller/booking.rider.controller";

const router = express.Router();

router.get("/details/:id", bookingRiderController.riderDetails);
router.post("/rate/:id", bookingRiderController.rate);

export default router;
