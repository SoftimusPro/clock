console.log("object");
const tiempo = document.querySelector(".tiempo")
const fecha = document.querySelector(".fecha")

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

setInterval(() => {
    relojDigital()
}, 1000);