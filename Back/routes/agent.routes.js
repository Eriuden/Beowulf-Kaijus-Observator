const router = require("express").Router();
const authController = require("../controllers/auth.controller");
const agentController = require("../controllers/agent.controller");

const multer = require("multer");
const upload = multer();
//Permet donc de créer des routes qui mènent aux fonctions
//dans les controlleurs
//On les appelera plus tard dans le front

//auth
router.post("/register", authController.signUp);
router.post("/login", authController.signIn);
router.get("/logout", authController.logout);

//user
router.get("/", agentController.getAllAgents);
router.get("/:id", agentController.agentInfo);
router.put("/:id", agentController.updateAgent);
router.delete("/:id", agentController.deleteAgent);

module.exports = router;
