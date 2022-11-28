function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var género = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            género = 'Homem'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'hcrianca.webp')
            } else if (idade >= 10 && idade < 21) {
                //Jovem
                img.setAttribute('src', 'Hjovem.webp')
            } else if (idade <50) {
                //adulto
                img.setAttribute('src', 'homem.webp')
            }else {
                //Idoso
                img.setAttribute('src', 'Hidoso.webp')
            }
        } else if (fsex[1].checked) {
            género = 'Mulher'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'Mcrianca.webp')
            } else if (idade >= 10 && idade < 21) {
                //Jovem
                img.setAttribute('src', 'Mjovem.webp')
            } else if (idade <50) {
                //adulto
                img.setAttribute('src', 'Mulher.webp')
            }else {
                //Idoso
                img.setAttribute('src', 'Midosa.webp')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${género} com ${idade} anos.`
        res.appendChild(img)
    }
}