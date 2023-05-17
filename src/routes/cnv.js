const express = require("express");
const router = express.Router();
const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, next) {
      next(null, 'base-files');
  },
  filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + '.ifc');
  }
})

const upload = multer({
  storage: storage
});

// Importing the controllers
const {
  descriptionGET,
  IfcToDaeGET,
  IfcToDaePOST
} = require("../controllers/ifcToDae");

// Assigning a controller to the "/cnv/" URI
router.get("/", descriptionGET);

// Assigning controllers to the "/op/IFCtoGLTF" URI
router.get("/IFCtoDAE", IfcToDaeGET);
router.post("/IFCtoDAE", upload.single('ifcFile'), IfcToDaePOST);

module.exports = router;
