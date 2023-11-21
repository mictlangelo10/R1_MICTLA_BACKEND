const {
  CiudadRepository,
  CarreraRepository,
  BachilleratoRepository,
  EspecialidadRepository,
  RegistroEstudianteRepository,
} = require("../repositorys/registrosRepository");

const nodemailer = require("nodemailer");

class CiudadService {
  static async getAllCiudades() {
    return await CiudadRepository.getAll();
  }
}

class CarreraService {
  static async getAllCarreras() {
    return await CarreraRepository.getAll();
  }
}

class BachilleratoService {
  static async getAllBachilleros() {
    return await BachilleratoRepository.getAll();
  }
}

class EspecialidadService {
  static async getAllEspecialidad() {
    return await EspecialidadRepository.getAll();
  }
}

class RegistroEstudianteService {
  static async createRegistro(datosRegistro) {
    // Insertar registro
    const nuevoRegistro = await RegistroEstudianteRepository.create(
      datosRegistro
    );

    // Obtiene el ID del registro recién creado
    const idRegistro = nuevoRegistro.id_registro_estudiante;

    // Realiza una consulta para obtener el correo y la matrícula
    const registroCompleto = await RegistroEstudianteRepository.getById(
      idRegistro
    );

    // Concatenar nombre completo
    const nombreCompleto = `${registroCompleto.nombre_estudiante} ${registroCompleto.apellido_paterno_estudiante} ${registroCompleto.apellido_materno_estudiante}`;

    // Intenta enviar correo con la matrícula
    try {
      await this.enviarCorreoEstudiante(
        registroCompleto.correo_estudiante,
        nombreCompleto,
        registroCompleto.matricula_estudiante
      );
    } catch (error) {
      console.error("Error al enviar correo electrónico:", error);
      // Considera qué acción tomar si el correo no se puede enviar
    }

    return nuevoRegistro;
  }

  static async enviarCorreoEstudiante(destinatario, nombreCompleto, matricula) {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Tu correo electrónico de Gmail
        pass: process.env.EMAIL_APP_PASS, // La contraseña de aplicación generada
      },
    });

    let mailOptions = {
      from: process.env.EMAIL_USER,
      to: destinatario,
      subject: "Bienvenido a la UTNG",
      html: `
        <div style="font-family: Arial, sans-serif; color: black;">
          <h1 style="color: blue;">Bienvenido(a) ${nombreCompleto} a la UTNG</h1>
          <p> <strong>¡JUNTOS SOMOS ORGULLOSAMENTE ÁGUILAS, ORGULLOSAMENTE UTNG!</strong></p>
          <p>Tu matrícula es: <strong>${matricula}</strong></p>
        </div>
      `,
    };

    try {
      let info = await transporter.sendMail(mailOptions);
      console.log("Email enviado:", info.messageId);
    } catch (error) {
      console.error("Error al enviar email:", error);
    }
  }

  static async getAllRegistros() {
    return await RegistroEstudianteRepository.getAll();
  }

  static async getRegistroById(id) {
    return await RegistroEstudianteRepository.getById(id);
  }
}

module.exports = {
  CiudadService,
  CarreraService,
  BachilleratoService,
  EspecialidadService,
  RegistroEstudianteService,
};
