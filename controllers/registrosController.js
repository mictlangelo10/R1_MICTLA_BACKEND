const express = require("express");
const router = express.Router();
const {
  CiudadService,
  CarreraService,
  BachilleratoService,
  EspecialidadService,
  RegistroEstudianteService,
} = require("../services/registrosService"); // Asegúrate de que la ruta al archivo de service sea correcta

router.get("/ciudades", async (req, res) => {
  try {
    const ciudades = await CiudadService.getAllCiudades();
    res.json(ciudades);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/carreras", async (req, res) => {
  try {
    const carreras = await CarreraService.getAllCarreras();
    res.json(carreras);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/bachilleratos", async (req, res) => {
  try {
    const carreras = await BachilleratoService.getAllBachilleros();
    res.json(carreras);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/especialidades", async (req, res) => {
  try {
    const carreras = await EspecialidadService.getAllEspecialidad();
    res.json(carreras);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/registroEstudiante", async (req, res) => {
  try {
    const datosRegistro = req.body; // Asegúrate de que la estructura de req.body coincida con tu modelo
    const nuevoRegistro = await RegistroEstudianteService.createRegistro(
      datosRegistro
    );
    res.status(201).json(nuevoRegistro);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/registros", async (req, res) => {
  try {
    const registros = await RegistroEstudianteService.getAllRegistros();
    res.json(registros);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/registroEstudiante/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const registro = await RegistroEstudianteService.getRegistroById(id);
    res.json(registro);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;
