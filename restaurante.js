class Reserva {
    constructor(fecha, hora, comensales) {
        this.fecha = fecha;
        this.hora = hora;
        this.comensales = comensales;
    }
}

class RepositorioReservas {
    constructor() {
        this.reservas = [];
    }

    agregarReserva(reserva) {
        this.reservas.push(reserva);
    }

    eliminarReserva(reserva) {
        const index = this.reservas.indexOf(reserva);
        if (index !== -1) {
            this.reservas.splice(index, 1);
        }
    }

    listarReservas() {
        return this.reservas;
    }
}

class AplicacionReservas {
    constructor() {
        this.repositorio = new RepositorioReservas();
    }

    hacerReserva(fecha, hora, comensales) {
        const reserva = new Reserva(fecha, hora, comensales);
        this.repositorio.agregarReserva(reserva);
    }

    cancelarReserva(reserva) {
        this.repositorio.eliminarReserva(reserva);
    }

    mostrarReservas() {
        const reservas = this.repositorio.listarReservas();
        reservas.forEach((reserva) => {
            console.log(`Fecha: ${reserva.fecha}, Hora: ${reserva.hora}, Comensales: ${reserva.comensales}`);
        });
    }
}

module.exports = { Reserva, RepositorioReservas, AplicacionReservas };
