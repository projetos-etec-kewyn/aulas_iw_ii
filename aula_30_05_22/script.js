function mostrar(){
    var p = document.getElementById('p');
    var img = document.getElementById('img');
    p.innerText = 'O Sistema previu que você é ';
    var ano = Number(document.getElementById('ano').value);
    var idade = 2022 - ano;
    var genero = document.getElementsByName('gene');
    for(var i = 0; i<genero.length;i++){
        if(genero[i].checked){
            var gener = genero[i].value;
        }
    }
    if(idade<=10 && idade >= 0){
        var ida = 'bebê';
    }else if(idade <=20 && idade > 10){
        var ida = 'adolescente';
    }else if(idade < 0){
        document.write("ERRO");
        document.body.style.color = 'red';
    }else if(idade>20 && idade < 60){
        if(gener == 'masculino'){
            var ida = 'adulto';
        }else{
            var ida = 'adulta';
        }
    }else{
        if(gener == 'masculino'){
            var ida = 'idoso';
        }else{
            var ida = 'idosa';
        }
    }
    if(gener == 'masculino'){
        p.innerText += ` um ${ida} de ${idade} anos:`;
        if(ida == 'bebê'){
            img.src = 'imgs/bebem.jpg';
        }else if(ida == 'adolescente'){
            img.src = 'imgs/adolem.jpg';
        }else if(ida == 'adulto'){
            img.src = 'imgs/homem.jpg';
        }else{
            img.src = 'imgs/idoso.jpg';
        }
    }else{
        p.innerText += ` uma ${ida} de ${idade} anos.`;
        if(ida == 'bebê'){
            img.src = 'imgs/bebef.jpg';
        }else if(ida == 'adolescente'){
            img.src = 'imgs/adolef.jpg';
        }else if(ida == 'adulta'){
            img.src = 'imgs/mulher.jpg';
        }else{
            img.src = 'imgs/idosa.jpg';
        }
    }
}