<h1>Proyecto final</h1>
<p>aplicacion para reservas de un restaurante: los clientes pueden reservar mesas, especificando la fecha, la hora y numero de comensales. El personal puede gestionar estas reservas</p>

<ul>
    <li>La aplicación permite a los usuarios realizar reservas en un restaurante.</li>
    <li>Los clientes pueden especificar la fecha, la hora y el número de comensales para su reserva.</li>
    <li>Las reservas se almacenan en un repositorio.</li>
    <li>El personal del restaurante puede gestionar estas reservas a través de la aplicación.</li>
    <li>La aplicación utiliza clases para representar reservas y para gestionar el repositorio de reservas.</li>
    <li>Los usuarios pueden hacer reservas utilizando la función <code>hacerReserva(fecha, hora, comensales)</code>.</li>
    <li>Las reservas se pueden cancelar con la función <code>cancelarReserva(reserva)</code>.</li>
    <li>La función <code>listarReservas()</code> muestra todas las reservas existentes.</li>
    <li>Se han escrito pruebas unitarias utilizando el marco de prueba Mocha y el paquete Chai para verificar el funcionamiento correcto del programa.</li>
</ul>
<h2>Para correr</h2>
<pre><code>npx mocha test_restaurante.js</code></pre>