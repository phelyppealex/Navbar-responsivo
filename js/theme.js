var dark = true;

function mudarTema(){
    var preto = 'rgb(0,0,0)';
    var branco = 'rgb(216, 216, 216)';
    
    if (dark) {
        dark = false;
        document.querySelector('#navbar').style.backgroundColor = branco;
        document.querySelector('#lbl').style.color = preto;
        document.querySelector('.btn').style.color = preto;
    }else{
        dark = true;
        document.querySelector('#navbar').style.backgroundColor = preto;
        document.querySelector('#lbl').style.color = branco;
        document.querySelector('.btn').style.color = branco;
    }
}