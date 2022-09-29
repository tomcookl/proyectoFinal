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

let futureDate = new Date (2022, 10, 20, 16, 00, 00);
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

//tiempo futuro en ms para realizar el calculo de la cuenta regresiva

const futureTiempo = futureDate.getTime();
// console.log(futureTiempo);

function getTiempoRestante(){
const hoy = new Date().getTime();
// console.log(hoy);
const h = futureTiempo - hoy;
console.log(h);

//valores en milisegundos

const unDia = 24 * 60 * 60 * 1000;
// console.log(unDia);
const unaHora = 60 * 60 * 1000;
// console.log(unaHora);
const unMinuto = 60 * 1000;
// console.log(unMinuto);

//calcuco los valores
let dias = h/unDia;
// console.log(dias);
dias = Math.floor(dias);
console.log(dias);

let hours = h/unaHora;
// para ver cuantas horas  sobran de los dias completos
hours = Math.floor((h % unDia) / unaHora) ;
console.log(hours);

let minutes = Math.floor((h % unaHora) / unMinuto);
console.log(minutes);
let segundos = Math.floor((h % unMinuto) / 1000);
console.log(segundos);

const valores = [dias, hours, minutes, segundos];
items.forEach(function(items, index){
    items.innerHTML = valores[index]
})
}
getTiempoRestante();