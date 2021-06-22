const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)');

function mudarTema(event){
    alert(event.matches);
    if (event.matches) {
        document.getElementById('navbar').style.backgroundColor = 'rgb(0,0,0)';
    }
    else {
        document.getElementById('navbar').style.backgroundColor = 'rgb(80,80,80)';
    }
}

prefersColorScheme.addEventListener(mudarTema(prefersColorScheme));
mudarTema(prefersColorScheme);