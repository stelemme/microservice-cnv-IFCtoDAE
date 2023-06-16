const express = require("express");
const router = express.Router();

// Importing the controllers
const {
  ifcToColladaGET,
  ifcToColladaPOST
} = require("../controllers/ifcToCollada");

// Assigning controllers to the "/op/IFCtoGLTF" URI
router.get("/ifc-to-collada", ifcToColladaGET);
router.post("/ifc-to-collada", ifcToColladaPOST);

module.exports = router;
