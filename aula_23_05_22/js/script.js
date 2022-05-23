var botao = document.getElementById('botao');
var img = document.getElementById('lampada');
//console.log(botao.id);
var num = 0;
botao.onclick = function(){
    if(botao.value == 'Acender'){
        botao.value = 'Apagar';
        botao.innerHTML = 'Apagar';
        img.alt = 'acesa';
        img.src = './img/acesa.jpg';
        botao.style.backgroundColor = 'black';
        botao.style.color = 'white';
        document.body.style.background = 'white';
        num++;
        if(num==10){
            botao.disabled = 'true';
            botao.innerHTML = 'Você queimou a lâmpada! :(';
            botao.style.fontSize = '10px';
            img.alt = 'apagada';
            img.src = './img/apagada.png';
            botao.style.backgroundColor = 'white';
            botao.style.color = 'black';
            document.body.style.background = 'black';
            
        }
    }else{
        botao.value = 'Acender';
        botao.innerHTML = 'Acender';
        img.alt = 'apagada';
        img.src = './img/apagada.png';
        botao.style.backgroundColor = 'white';
        botao.style.color = 'black';
        document.body.style.background = 'black';
    }
}