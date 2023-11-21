class RegistroEstudianteModel {
  constructor(
    id_registro_estudiante,
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
    matricula_estudiante
  ) {
    this.id_registro_estudiante = id_registro_estudiante;
    this.id_ciudad = id_ciudad;
    this.id_bachillerato = id_bachillerato;
    this.id_especialidad = id_especialidad;
    this.id_carrera = id_carrera;
    this.nombre_estudiante = nombre_estudiante;
    this.apellido_paterno_estudiante = apellido_paterno_estudiante;
    this.apellido_materno_estudiante = apellido_materno_estudiante;
    this.calle = calle;
    this.numero = numero;
    this.colonia = colonia;
    this.codigo_postal = codigo_postal;
    this.telefono_casa = telefono_casa;
    this.telefono_estudiante = telefono_estudiante;
    this.telefono_tutor = telefono_tutor;
    this.promedio_bachillerato = promedio_bachillerato;
    this.nombre_madre = nombre_madre;
    this.apellido_paterno_madre = apellido_paterno_madre;
    this.apellido_materno_madre = apellido_materno_madre;
    this.nombre_padre = nombre_padre;
    this.apellido_paterno_padre = apellido_paterno_padre;
    this.apellido_materno_padre = apellido_materno_padre;
    this.fecha_registro = fecha_registro;
    this.foto_estudiante = foto_estudiante;
    this.certificado_bachillerato = certificado_bachillerato;
    this.comprobante_domicilio = comprobante_domicilio;
    this.correo_estudiante = correo_estudiante;
    this.matricula_estudiante = matricula_estudiante;
  }
}

class BachilleratoModel {
  constructor(id_bachillerato, nombre_bachillerato) {
    this.id_bachillerato = id_bachillerato;
    this.nombre_bachillerato = nombre_bachillerato;
  }
}
class CarreraModel {
  constructor(id_carrera, nombre_carrera) {
    this.id_carrera = id_carrera;
    this.nombre_carrera = nombre_carrera;
  }
}
class CiudadModel {
  constructor(id_ciudad, nombre_ciudad) {
    this.id_ciudad = id_ciudad;
    this.nombre_ciudad = nombre_ciudad;
  }
}
class EspecialidadModel {
  constructor(id_especialidad, nombre_especialidad) {
    this.id_especialidad = id_especialidad;
    this.nombre_especialidad = nombre_especialidad;
  }
}

module.exports = {
  RegistroEstudianteModel,
  BachilleratoModel,
  CarreraModel,
  CiudadModel,
  EspecialidadModel,
};
