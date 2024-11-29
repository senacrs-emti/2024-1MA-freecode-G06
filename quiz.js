// seletores dos objetos

const $questionsContainer = document.querySelector(".questions-container");
const $answersContainer = document.querySelector(".answers-container");

var pontuacao = 0;

var posPergunta = localStorage.getItem("posPergunta");
if( posPergunta == null ){
    localStorage.setItem("posPergunta", 0);
    posPergunta = 0;
}


// inicia o jogo
function startGame() {

    //var posPergunta = document.getElementById("posPergunta").value;
    var posPergunta = localStorage.getItem("posPergunta");
    posPergunta = parseInt(posPergunta);

    
    // substituir pergunta fixa por uma pergunta do json
        // atribui a questao na variavel pergunta
        let pergunta = Quiz[posPergunta].question;
        
        // substituir a pergunta no HTML
        let question = document.getElementById("question");
        question.innerText = pergunta;
    // substituir alternativa fixa por alternativa do json
        let respA = Quiz[posPergunta].A;
        let respAdoc = document.getElementById("respA");
       respAdoc.innerText = respA;
       let respB = Quiz[posPergunta].B
       let respBdoc = document.getElementById("respB");
       respBdoc.innerText = respB;
       let respC = Quiz[posPergunta].C
       let respCdoc = document.getElementById("respC");
       respCdoc.innerText = respC;
       let respD = Quiz[posPergunta].D
       let respDdoc = document.getElementById("respD");
       respDdoc.innerText = respD;

    // verificar se a alternativa esta certa ou errada
        let correto = Quiz[posPergunta].answer;

        let btnAlternativa = document.getElementsByClassName("answer");
        

        for (let index = 0; index < btnAlternativa.length; index++){

           

            btnAlternativa[index].addEventListener("click", function(){
                let alternativa = btnAlternativa[index].getAttribute("id");
                alternativa = alternativa.replace("resp","");
                
                if (alternativa ==correto) {
                    pontuacao = pontuacao +2;
                    console.log(alternativa+" CORRETO "+pontuacao);
                    btnAlternativa[index].classList.add("correto");
                } else {
                    console.log (alternativa+" ERRADO");        
                    alert("Você ERROU, tente novamente mais tarde.");
                    btnAlternativa[index].classList.add("errado");       
                }
                posPergunta = posPergunta +1;
                localStorage.setItem("posPergunta",posPergunta);
                console.log( localStorage.getItem("posPergunta"));
                alert("Sua pontuação: " + pontuacao);
                document.getElementById("posPergunta").value = posPergunta; 
                btnAlternativa[0].disabled = true;
                btnAlternativa[1].disabled = true;
                btnAlternativa[2].disabled = true;
                btnAlternativa[3].disabled = true;
                

                setTimeout(function() { location.reload();}, 2000);
               
            });
        }

}


startGame();