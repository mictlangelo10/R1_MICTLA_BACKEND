const client = require("../connection");
const {
  CiudadModel,
  CarreraModel,
  BachilleratoModel,
  EspecialidadModel,
  RegistroEstudianteModel,
} = require("../models/registrosModel");

class CiudadRepository {
  static async getAll() {
    const result = await client.query("SELECT * FROM cat_ciudad");
    return result.rows.map(
      (row) => new CiudadModel(row.id_ciudad, row.nombre_ciudad)
    );
  }
}

class CarreraRepository {
  static async getAll() {
    const result = await client.query("SELECT * FROM cat_carrera");
    return result.rows.map(
      (row) => new CarreraModel(row.id_carrera, row.nombre_carrera)
    );
  }
}

class BachilleratoRepository {
  static async getAll() {
    const result = await client.query("SELECT * FROM cat_bachillerato");
    return result.rows.map(
      (row) =>
        new BachilleratoModel(row.id_bachillerato, row.nombre_bachillerato)
    );
  }
}

class EspecialidadRepository {
  static async getAll() {
    const result = await client.query("SELECT * FROM cat_especialidad");
    return result.rows.map(
      (row) =>
        new EspecialidadModel(row.id_especialidad, row.nombre_especialidad)
    );
  }
}

class RegistroEstudianteRepository {
  static async create(datosRegistro) {
    const {
      id_ciudad,
      id_bachillerato,
      id_especialidad,
      id_carrera,
      nombre_estudiante,
      apellido_paterno_estudiante,
      apellido_materno_estudiante,
      calle,
      numero,
      colonia,
      codigo_postal,
      telefono_casa,
      telefono_estudiante,
      telefono_tutor,
      promedio_bachillerato,
      nombre_madre,
      apellido_paterno_madre,
      apellido_materno_madre,
      nombre_padre,
      apellido_paterno_padre,
      apellido_materno_padre,
      fecha_registro,
      foto_estudiante,
      certificado_bachillerato,
      comprobante_domicilio,
      correo_estudiante,
      matricula_estudiante,
    } = datosRegistro;

    const result = await client.query(
      `INSERT INTO registro_estudiante
        (id_ciudad, id_bachillerato, id_especialidad, id_carrera, nombre_estudiante, apellido_paterno_estudiante, apellido_materno_estudiante,calle, numero, colonia, codigo_postal, telefono_casa, telefono_estudiante, telefono_tutor, promedio_bachillerato, nombre_madre, apellido_paterno_madre, apellido_materno_madre, nombre_padre, apellido_paterno_padre, apellido_materno_padre, fecha_registro, foto_estudiante, certificado_bachillerato, comprobante_domicilio,correo_estudiante,matricula_estudiante)
        VALUES
        ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26,$27)
        RETURNING *`,
      [
        datosRegistro.id_ciudad,
        datosRegistro.id_bachillerato,
        datosRegistro.id_especialidad,
        datosRegistro.id_carrera,
        datosRegistro.nombre_estudiante,
        datosRegistro.apellido_paterno_estudiante,
        datosRegistro.apellido_materno_estudiante,
        datosRegistro.calle,
        datosRegistro.numero,
        datosRegistro.colonia,
        datosRegistro.codigo_postal,
        datosRegistro.telefono_casa,
        datosRegistro.telefono_estudiante,
        datosRegistro.telefono_tutor,
        datosRegistro.promedio_bachillerato,
        datosRegistro.nombre_madre,
        datosRegistro.apellido_paterno_madre,
        datosRegistro.apellido_materno_madre,
        datosRegistro.nombre_padre,
        datosRegistro.apellido_paterno_padre,
        datosRegistro.apellido_materno_padre,
        datosRegistro.fecha_registro,
        datosRegistro.foto_estudiante,
        datosRegistro.certificado_bachillerato,
        datosRegistro.comprobante_domicilio,
        datosRegistro.correo_estudiante,
        datosRegistro.matricula_estudiante,
      ]
    );

    return new RegistroEstudianteModel(...Object.values(result.rows[0]));
  }

  static async getAll() {
    const result = await client.query("SELECT * FROM registro_estudiante");
    return result.rows.map(
      (row) =>
        new RegistroEstudianteModel(
          row.id_registro_estudiante,
          row.id_ciudad,
          row.id_bachillerato,
          row.id_especialidad,
          row.id_carrera,
          row.nombre_estudiante,
          row.apellido_paterno_estudiante,
          row.apellido_materno_estudiante,
          row.calle,
          row.numero,
          row.colonia,
          row.codigo_postal,
          row.telefono_casa,
          row.telefono_estudiante,
          row.telefono_tutor,
          row.promedio_bachillerato,
          row.nombre_madre,
          row.apellido_paterno_madre,
          row.apellido_materno_madre,
          row.nombre_padre,
          row.apellido_paterno_padre,
          row.apellido_materno_padre,
          row.fecha_registro,
          row.foto_estudiante,
          row.certificado_bachillerato,
          row.comprobante_domicilio,
          row.correo_estudiante,
          row.matricula_estudiante
        )
    );
  }

  static async getById(id) {
    const result = await client.query(
      "SELECT * FROM registro_estudiante WHERE id_registro_estudiante = $1",
      [id]
    );
    if (result.rows.length) {
      return new RegistroEstudianteModel(
        result.rows[0].id_registro_estudiante,
        result.rows[0].id_ciudad,
        result.rows[0].id_bachillerato,
        result.rows[0].id_especialidad,
        result.rows[0].id_carrera,
        result.rows[0].nombre_estudiante,
        result.rows[0].apellido_paterno_estudiante,
        result.rows[0].apellido_materno_estudiante,
        result.rows[0].calle,
        result.rows[0].numero,
        result.rows[0].colonia,
        result.rows[0].codigo_postal,
        result.rows[0].telefono_casa,
        result.rows[0].telefono_estudiante,
        result.rows[0].telefono_tutor,
        result.rows[0].promedio_bachillerato,
        result.rows[0].nombre_madre,
        result.rows[0].apellido_paterno_madre,
        result.rows[0].apellido_materno_madre,
        result.rows[0].nombre_padre,
        result.rows[0].apellido_paterno_padre,
        result.rows[0].apellido_materno_padre,
        result.rows[0].fecha_registro,
        result.rows[0].foto_estudiante,
        result.rows[0].certificado_bachillerato,
        result.rows[0].comprobante_domicilio,
        result.rows[0].correo_estudiante,
        result.rows[0].matricula_estudiante
      );
    } else {
      throw new Error("Registro no encontrado.");
    }
  }
}

module.exports = {
  CiudadRepository,
  CarreraRepository,
  BachilleratoRepository,
  EspecialidadRepository,
  RegistroEstudianteRepository,
};
