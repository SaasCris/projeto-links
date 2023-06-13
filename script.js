function toggleMode() {
  const html = document.documentElement

  //FORMA BASICA DE FAZER.
  // if (html.classList.contains("light")) {
  //  html.classList.remove("light")
  // } else {
  //  html.classList.add("light")
  // }

  //FORMA SIMPLIFICADA
  html.classList.toggle("light")

  //pegar a tag imag
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode substituir a imagem
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", ("Foto de uma pessoa chamada Cris, cabelo longos amarrado, com barba rasa e camisa preta estampados de folhas ao redor e um plano de fundo roxo"))
  } else {
    //se não tiver, deixar a imagem padrão
    img.setAttribute("src", "./assets/avatar-dark.png")
    img.setAttribute("alt", ("Foto de uma pessoa chamada Cris, cabelo longos amarrado, com um oculos preto, com barba rasa e camisa preta estampados de folhas ao redor e um plano de fundo roxo"))
  }
}
