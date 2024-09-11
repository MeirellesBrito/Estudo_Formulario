const { Router } = require("express");
const UsuarioController = require("../controllers/UsuarioController");
const usuarioController = new UsuarioController();

const router = Router();
router.get("/usuarios", (req, res) => {
  usuarioController.getTodos(req, res);
});

module.exports = router;
