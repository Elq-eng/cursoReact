const { response } = require("express");
const bcrypt = require("bcryptjs");
const Usuario = require("../models/Usuario");
const { generarJWT } = require("../helpers/jwt");

const crearUsuario = async (req, res = response) => {
  try {
    const { name, email, password } = req.body;

    let usuario = await Usuario.findOne({ email });
    console.log(usuario);

    if (usuario) {
      return res.status(400).json({
        ok: false,
        msg: "Un usuario existe con ese correo",
      });
    }

    usuario = new Usuario(req.body);
    // encriptar contrasenia
    const salt = bcrypt.genSaltSync(10);
    usuario.password = bcrypt.hashSync(password, salt);
    await usuario.save();

    //* generar nuestro JWT
    const token = await generarJWT(usuario.id, usuario.name);

    return res
      .status(201)
      .json({
        ok: true,
        uid: usuario.id,
        msg: "Usuario creado exitosamente",
        token,
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el adminsitrador",
    });
  }
};

const loginUsuario = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    let usuario = await Usuario.findOne({ email });
    if (!usuario) {
      return res.status(400).json({
        ok: false,
        msg: "Un usuario existe con ese correo",
      });
    }

    // confirmar password
    const validPassword = bcrypt.compareSync(password, usuario.password);

    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: "password incorrecto",
      });
    }

    //* generar nuestro JWT
    const token = await generarJWT(usuario.id, usuario.name);

    return res.json({
      ok: true,
      uid: usuario.id,
      msg: "logueado correctamente",
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el adminsitrador",
    });
  }

  // response
  res.status(201).json({
    message: "login",
  });
};

const revalidarToken = async(req, res = response) => {

  const { uid, name } = req
  //* generar nuestro JWT
  const token = await generarJWT(uid,name);


  res.json({
    ok: true,
    token
  });
};

module.exports = {
  crearUsuario,
  loginUsuario,
  revalidarToken,
};
