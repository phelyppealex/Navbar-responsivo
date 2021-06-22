const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)');

function mudarTema(event){
    if (event.matches) {
        alert('dark');
        document.getElementById('navbar').style.backgroundColor = 'rgb(0,0,0)';
        document.getElementById('lbl').style.backgroundColor = '#FFFFFF';
    }
    else {
        alert('white');
        document.getElementById('navbar').style.backgroundColor = '#FFFFFF';
        document.getElementById('lbl').style.backgroundColor = 'rgb(0,0,0)';
    }
}

prefersColorScheme.addEventListener(mudarTema(prefersColorScheme));
mudarTema(prefersColorScheme);