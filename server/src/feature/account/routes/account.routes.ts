import express from "express";
import accountController from "../controller/account.controller";

const router = express.Router();

router.get("/profile", accountController.profileDetails);
router.get("/details/:id", accountController.accountDetails);
router.get("/details/view/:id",accountController.getAccountDetails)

router.delete("/logout", accountController.logout);

export default router;
