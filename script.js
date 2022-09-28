const mesesAnuales = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",];
const diasSemanales = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];


const contador = document.querySelector ('.contador');
const tiempoLimite = document.querySelector ('.tiempoLimite');
const items = document.querySelectorAll ('.tiempoLimite-formato h4')
// console.log(items);

let futureDate = new Date (2022, 10, 26, 16, 00, 00);
console.log(futureDate);

const año = futureDate.getFullYear();
const horas = futureDate.getHours();
const minutos = futureDate.getMinutes();

let mes = futureDate.getMonth();
// console.log(mesesAnuales[mes]);
mes = mesesAnuales[mes];


const fecha = futureDate.getDate();


const dia = diasSemanales[futureDate.getDay()];







contador.textContent = `la espera finaliza el ${dia} ${fecha} de ${mes} a las ${horas}:${minutos}p.m., del año ${año}`;
