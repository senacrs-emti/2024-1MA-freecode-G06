// seletores dos objetos
const startGameButton = document.querySelector(".start-quiz");

localStorage.setItem("posPergunta", 0);
localStorage.setItem("pontuacao", 0);


startGameButton.addEventListener("click", function(){
    window.location.href = "./quiz.html";
  });