const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)');

prefersColorScheme.addEventListener(mudarTema);
mudarTema(prefersColorScheme);

function mudarTema(event){
    if (event.matches) {
        document.getElementById('navbar').style.backgroundColor = 'black';
        document.getElementById('lbl').style.backgroundColor = 'white';
    }
    else {
        document.getElementById('navbar').style.backgroundColor = 'white';
        document.getElementById('lbl').style.backgroundColor = 'black';
    }
}

