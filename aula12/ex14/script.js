function carregar() {
    var hos = window.document.getElementById('hos')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    hos.innerHTML = `Agora são ${hora}:${min} horas.`
    if (hora >= 0 && hora < 12 ) {
        //Bom Dia!
        document.body.style.background = '#026873'
        img.src = 'manha.400px.png'
    } else if (hora >= 12 && hora <= 18) {
        //Boa Tarde! 
        document.body.style.background = '#595736'
        img.src = 'tarde.400px.png'
    } else { 
        //Boa Noite!
        img.src = 'noite.400px.png'
        document.body.style.background = '#295073'
    }

}