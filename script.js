document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const menuIcon = document.querySelector(".menu-icon");
  const menu = document.querySelector(".menu");
  const botao = document.getElementById("botao-msg");


  botao.addEventListener("click", function (event) {
    event.preventDefault();
    postaComentario();
  })
  // Fecha o menu ao clicar em qualquer link do menu
  const menuLinks = document.querySelectorAll(".menu a");
  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      menuToggle.checked = false;
    });
  });

  // Fecha o menu ao clicar fora dele
  document.addEventListener("click", function (e) {
    const isClickInsideMenu = menu.contains(e.target);
    const isClickOnToggle = menuToggle.contains(e.target);
    const isClickOnIcon = menuIcon.contains(e.target);

    if (!isClickInsideMenu && !isClickOnToggle && !isClickOnIcon) {
      menuToggle.checked = false;
    }
  });
});

function postaComentario() {
  const comentarios = document.getElementById("postados");
  const user = document.getElementById("nome").value.trim();
  const comentario = document.getElementById("comentario").value.trim();
  const avisoInicial = document.getElementById("sem-comentario");

  if (user && comentario) {
    if (avisoInicial) {
      avisoInicial.remove();
    }

    novoComentario = montaComentario(user, comentario);

    comentarios.appendChild(novoComentario);

    document.getElementById("nome").value = "";
    document.getElementById("comentario").value = "";
  }
}

function montaComentario(user, texto){
  let comentario = document.createElement("div");
  comentario.classList.add("texto-comentario", "comentario");

  const userElem = document.createElement("p");
  userElem.innerHTML = `<strong>${user}</strong> disse:`  

  const textoElem = document.createElement("p");
  textoElem.textContent = texto;

  comentario.appendChild(userElem);
  comentario.appendChild(textoElem);

  return(comentario);
}