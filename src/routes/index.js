const express = require("express");

const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "/tmp/" });

const Model = require("../model");
const { uploadFile } = require("./upload");

//Post Method
router.post("/post", async (req, res) => {
  const data = new Model({
    bom: req.body.bom,
    fileUrlData: req.body.fileUrlData,
    name: req.body.name,
    createdOn: req.body.createdOn,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Get all Method
router.get("/getAll", async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Update by ID Method
router.patch("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Model.findByIdAndUpdate(id, updatedData, options);

    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Delete by ID Method
router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Model.findByIdAndDelete(id);
    res.send(`Document with ${data.name} has been deleted..`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Upload files Method
router.post("/filesUpload", upload.array("photos"), async (req, res) => {
  try {
    const uploadedFiles = await uploadFile(req.files);
    res.status(200).json(uploadedFiles);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
