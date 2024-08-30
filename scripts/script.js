const key = "9657ed9966807326c0cae0702c49d0f8"

function dadosnatela(dados){

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".txt_previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector(".img_previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

}


async function buscarcidade(cidade){

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json())

    dadosnatela(dados)
    console.log(dados)
}


function cliqueinobtn() {
    const cidade = document.querySelector(".input_cidade").value

    buscarcidade(cidade)
    console.log(cidade)
}