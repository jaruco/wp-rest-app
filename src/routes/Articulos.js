const express = require("express");
const Articulo = require("../models/Articulo");
const {
  articuloSchema,
  updateArticuloSchema,
} = require("../validations/ArticuloValidation");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const articulos = await Articulo.findAll();
    res.json(articulos);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los artículos", error });
  }
});

router.post("/", async (req, res) => {
  try {
    const { error, value } = articuloSchema.validate(req.body);
    if (error) {
      return res
        .status(400)
        .json({
          message: "Error en los datos enviados",
          details: error.details,
        });
    }
    const articulo = await Articulo.create(value);
    res.status(201).json(articulo);
  } catch (error) {
    res.status(500).json({ message: "Error al crear el artículo", error });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const articulo = await Articulo.findByPk(req.params.id);
    if (articulo) {
      res.json(articulo);
    } else {
      res.status(404).json({ message: "Artículo no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el artículo", error });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { error, value } = updateArticuloSchema.validate(req.body);

    if (error)
      return res
        .status(400)
        .json({
          message: "Error en los datos enviados",
          details: error.details,
        });

    const articulo = await Articulo.findByPk(req.params.id);

    if (!articulo) {
      return res.status(404).json({ message: "Artículo no encontrado" });
    }

    const { descripcion, modelo } = value;

    if (descripcion) articulo.descripcion = descripcion;
    if (modelo) articulo.modelo = modelo;

    await articulo.save();
    res.json(articulo);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el artículo", error });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const articulo = await Articulo.findByPk(req.params.id);
    if (!articulo) {
      return res.status(404).json({ message: "Artículo no encontrado" });
    }

    await articulo.destroy();
    res.json({ message: "Artículo eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el artículo", error });
  }
});

module.exports = router;
