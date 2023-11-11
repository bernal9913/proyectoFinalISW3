const { expect } = require('chai');
const { Reserva, RepositorioReservas, AplicacionReservas } = require('./restaurante');

describe('AplicacionReservas', () => {
    let app;

    beforeEach(() => {
        app = new AplicacionReservas();
    });

    it('debería hacer una reserva', () => {
        app.hacerReserva('2023-11-15', '19:00', 2);
        const reservas = app.repositorio.listarReservas();
        expect(reservas).to.have.lengthOf(1);
        expect(reservas[0].fecha).to.equal('2023-11-15');
        expect(reservas[0].hora).to.equal('19:00');
        expect(reservas[0].comensales).to.equal(2);
    });
    it('should tirar error para la reserva', () => {
        app.hacerReserva('2023-11-15', '19:00', 2);
        const reservas = app.repositorio.listarReservas();
        expect(reservas).to.have.lengthOf(1);
        expect(reservas[0].fecha).to.equal('2023-11-15');
        expect(reservas[0].hora).to.equal('19:00');
        expect(reservas[0].comensales).to.equal(4);// error de adrede
    });

    it('debería cancelar una reserva', () => {
        const reserva = new Reserva('2023-11-15', '19:00', 4);
        app.repositorio.agregarReserva(reserva);
        app.cancelarReserva(reserva);
        const reservas = app.repositorio.listarReservas();
        expect(reservas).to.have.lengthOf(0);
    });
});
