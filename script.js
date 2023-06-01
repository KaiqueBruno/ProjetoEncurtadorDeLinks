function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    // pega a tag img 
    const img = document.querySelector("#profile img")

    // subistituir img
    if (html.classList.contains('light')) {
        // se tiver light mode, adicionar a imagem light 
        img.setAttribute('src', './assets/avatar-light.jpg')
    } else {
        // se tiver sem light mode, manter a imagem normal
        img.setAttribute('src', './assets/avatar.jpg')
    }
}