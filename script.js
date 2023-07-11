function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('light')

    // ou
   // if(html.classList.contains('light')) {
   // html.classList.remove('light')
   // } 
   // else {
   // html.classList.add('light')
   // } 

    //troca da imagem
   // pegar a tag img
   const img = document.querySelector("#profile img")

   //substituir a imagem
    if(html.classList.contains("light")) {
        //se tiver light mode, adicionar aimagem light
        img.setAttribute("src", "./assets/assets")
        img.setAttribute("alt", "foto Mayk Brito, com oculos escuros, roupas pretas e fundo colorido roxo e azul")
    }
    else {
        img.setAttribute("src", "./assets/assets/avatar.png")
        img.setAttribute("alt", "foto Mayk Brito, com oculos de grau, roupas pretas e fundo colorido roxo e azul")
    } 
   //se tiver sem light mode, manter a imagem normal


}