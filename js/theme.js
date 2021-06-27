const preto = 'rgb(0,0,0)';
const branco = '#FFFF';
const cinza = 'rgb(216, 216, 216)';
const listaDark = 'rgb(22, 22, 22)';
const listaLight = 'rgb(190, 190, 190);';

var dark = true;


function mudarTema(){
    if (dark) {
        dark = false;
        document.querySelector('#navbar').style.backgroundColor = cinza;
        document.querySelector('#lbl').style.color = preto;
        document.querySelector('.btn').style.color = preto;
    }else{
        dark = true;
        document.querySelector('#navbar').style.backgroundColor = preto;
        document.querySelector('#lbl').style.color = branco;
        document.querySelector('.btn').style.color = branco;
    }

    resize();
}

function resize(){
    var listaDark = 'rgb(22, 22, 22)';
    var listaLight = 'gray';
    
    if(window.visualViewport.width > 820){
        document.querySelector('.lista').style.backgroundColor = 'rgb(0,0,0,0)';
        
    }else{
        if (dark) {
            document.querySelector('.lista').style.backgroundColor = listaDark;
        }else{
            document.querySelector('.lista').style.backgroundColor = listaLight;
        }
    }
}