console.log("object");
const tiempo = document.querySelector(".tiempo")
const fecha = document.querySelector(".fecha")
const pronostico = document.querySelector(".pronostico")

const apiUbicacion = '5dcc0d23edb9b9e60b9eedab244a073d'

function relojDigital() {
    let f = new Date()
    let dia = f.getDate()
    let mes = f.getMonth()
    let year = f.getFullYear()
    let diaSemana = f.getDay()

    let timeString = f.toLocaleTimeString()
    tiempo.innerHTML = timeString
    let semana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"] 
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    let showDia = (semana[diaSemana])
    let showMes = (meses[mes])
    fecha.innerHTML = "Hoy es " + showDia + " " + dia + " de " + showMes + " de " + year
    
}

async function obtenerUbicacion() {
    const url = `https://api.ipapi.com/api/check?access_key=${apiUbicacion}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data); // Muestra los datos de ubicación en la consola
    pronostico.innerHTML = `El tiempo en: ${data.city}, ${data.region_name}, ${data.country_name} para hoy es:`;
}

setInterval(() => {
    relojDigital()
}, 1000);

obtenerUbicacion()