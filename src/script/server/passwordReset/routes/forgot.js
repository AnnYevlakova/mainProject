import express from "express";

let router = express.Router();

router.post("/", (req, res) => {
    console.log(req.body);
    res.status(400).json({ res: req.body });
});
export default router;
