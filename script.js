const perguntas = [
    {
        id: 1,
        pergunta: "Qual estação você prefere?",
        alternativas: [
            { id: "q1alt1", pessoa: ["Felipe", "Paulo", "Leonardo", "Augusto", "Garcia", "Kich", "Lucas Flach", "Francesco"]},
            { id: "q1alt2", pessoa: ["Davi", "Kelly"]},
            { id: "q1alt3", pessoa: ["Luft", "Bino", "Caio", "Joice", "Boenny"]},
            { id: "q1alt4", pessoa: ["Brine", "Mathias", "Lassem", "Luiz", "Kauã", "Nicolas", "Bruno", "Alana"]}
        ]
    },
    {
        id: 2,
        pergunta: "Qual sua atividade preferida?",
        alternativas: [
            { id: "q2alt1", pessoa: ["Felipe", "Brine", "Leonardo", "Davi", "Garcia", "Joice", "Lucas Flach"]},
            { id: "q2alt2", pessoa: []},
            { id: "q2alt3", pessoa: ["Luft", "Bino", "Lassem", "Luiz", "Nicolas", "Bruno", "Caio", "Kich", "Francesco"]},
            { id: "q2alt4", pessoa: ["Mathias", "Paulo", "Kelly", "Boenny"]},
            { id: "q2alt5", pessoa: ["Kauã", "Alana"]},
            { id: "q2alt6", pessoa: ["Augusto"]}
        ]
    },
    {
        id: 3,
        pergunta: "Qual seu gosto musical?",
        alternativas: [
            { id: "q3alt1", pessoa: ["Felipe"]},
            { id: "q3alt2", pessoa: ["Kelly", "Boenny"]},
            { id: "q3alt3", pessoa: ["Luft", "Augusto", "Davi", "Nicolas", "Bruno"]},
            { id: "q3alt4", pessoa: ["Brine", "Luiz", "Garcia", "Caio", "Kich", "Francesco"]},
            { id: "q3alt5", pessoa: ["Alana"]},
            { id: "q3alt6", pessoa: ["Mathias", "Paulo", "Bino", "Leonardo", "Lassem","Kauã", "Joice", "Lucas Flach"]}
        ]
    },
    {
        id: 4,
        pergunta: "Qual gênero de filme você prefere?",
        alternativas: [
            { id: "q4alt1", pessoa: ["Felipe", "Bruno", "Kich", "Joice"]},
            { id: "q4alt2", pessoa: ["Paulo"]},
            { id: "q4alt3", pessoa: ["Luft", "Kauã", "Alana"]},
            { id: "q4alt4", pessoa: ["Brine", "Mathias", "Leonardo", "Augusto", "Davi", "Caio", "Francesco"]},
            { id: "q4alt5", pessoa: ["Bino"]},
            { id: "q4alt6", pessoa: ["Lassem", "Luiz", "Nicolas", "Garcia", "Boenny", "Lucas Flach"]}
        ]
    },
    {
        id: 5,
        pergunta: "Qual esporte você prefere?",
        alternativas: [
            { id: "q5alt1", pessoa: ["Felipe", "Bino", "Davi", "Nicolas"]},
            { id: "q5alt2", pessoa: ["Brine", "Leonardo", "Augusto", "Kauã", "Garcia", "Bruno", "Caio", "Kich", "Joice", "Francesco"]},
            { id: "q5alt3", pessoa: ["Luft", "Paulo", "Kelly"]},
            { id: "q5alt4", pessoa: ["Alana", "Boenny", "Mathias"]},
            { id: "q5alt5", pessoa: ["Luiz", "Lucas Flach"]},
            { id: "q5alt6", pessoa: ["Lassem"]}
        ]
    },
    {
        id: 6,
        pergunta: "Você se considera:",
        alternativas: [
            { id: "q6alt1", pessoa: ["Paulo"]},
            { id: "q6alt2", pessoa: ["Felipe", "Brine", "Leonardo", "Davi", "Bruno", "Alana", "Francesco"]},
            { id: "q6alt3", pessoa: ["Luft", "Luiz", "Augusto", "Kauã", "Caio", "Kich"]},
            { id: "q6alt4", pessoa: ["Mathias", "Bino", "Lassem", "Nicolas", "Garcia", "Kelly", "Joice", "Boenny", "Lucas Flach"]}
        ]
    },
    {
        id: 7,
        pergunta: "Qual sua matéria favorita?",
        alternativas: [
            { id: "q7alt1", pessoa: ["Luft", "Bino", "Leonardo", "Kich", "Kelly"]},
            { id: "q7alt2", pessoa: ["Felipe", "Garcia", "Boenny", "Alana"]},
            { id: "q7alt3", pessoa: ["Joice"]},
            { id: "q7alt4", pessoa: ["Mathias", "Lassem", "Luiz", "Davi", "Nicolas"]},
            { id: "q7alt5", pessoa: ["Augusto", "Kauã", "Bruno", "Caio", "Francesco"]},
            { id: "q7alt6", pessoa: ["Brine", "Paulo", "Lucas Flach"]}
        ]
    },
    {
        id: 8,
        pergunta: "Em quem você votaria para líder?",
        alternativas: [
            { id: "q8alt1", pessoa: ["Felipe", "Mathias", "Paulo", "Bino", "Leonardo", "Lassem", "Nicolas", "Francesco"]},
            { id: "q8alt2", pessoa: ["Luft", "Kelly", "Joice", "Lucas Flach"]},
            { id: "q8alt3", pessoa: ["Luiz", "Augusto", "Davi", "Caio", "Kich", "Boenny", "Outro"]}
            
        ]
    }
    
];

if (window.location.pathname.includes("index9.html")) {
    document.addEventListener("DOMContentLoaded", () => {
        const respostas = JSON.parse(localStorage.getItem("respostas")) || [];

        const score = {
            Felipe: 0,
            Luft: 0,
            Brine: 0,
            Mathias: 0,
            Paulo: 0,
            Bino: 0,
            Leonardo: 0,
            Lassem: 0,
            Luiz: 0,
            Davi: 0,
            Augusto: 0,
            Kauã: 0,
            Nicolas: 0,
            Garcia: 0,
            Bruno: 0,
            Caio: 0,
            Kich: 0,
            Francesco: 0,
            Kelly: 0,
            Boenny: 0,
            Alana: 0,
            Joice: 0,
            "Lucas Flach": 0

        }

        respostas.forEach(respostaId => {
            perguntas.forEach(pergunta => {
                const alternativa = pergunta.alternativas.find(alt => alt.id === respostaId);
                if (alternativa) {
                    alternativa.pessoa.forEach(pessoa => {
                        score[pessoa]++;
                    });
                }
            })
        })

        let maisPontos = [];
        let maiorPontuacao = 0;

        for (let pessoa in score) {
            if (score[pessoa] > maiorPontuacao) {
                maiorPontuacao = score[pessoa];
                maisPontos = [pessoa];
            } else if (score[pessoa] === maiorPontuacao) {
                maisPontos.push(pessoa);
            }
        }

        const resultadoDiv = document.getElementById("resultado");
        if (resultadoDiv) {
            if(maisPontos.length > 1) {
                resultadoDiv.innerHTML = `<h2>Resultado</h2><p>${maisPontos.join(' e ')} são as pessoas que mais se parecem com você!</p>`;
            } else {
                resultadoDiv.innerHTML = `<h2>Resultado</h2><p>${maisPontos[0]} é a pessoa que mais se parece com você!</p>`;
            }
        }

        const resultadoImagensDiv = document.getElementById('final');
if (resultadoImagensDiv) {
    resultadoImagensDiv.innerHTML = '';

    maisPontos.forEach((pessoa) => {
        const img = document.createElement('img');
        img.src = `src/${pessoa}.png`;
        img.alt = pessoa;
        img.classList.add('final');
        resultadoImagensDiv.appendChild(img);
    })
        
}


        const apagar = document.getElementById("delete");

        if (apagar) {
            apagar.addEventListener("click", function () {
                console.log("Antes de limpar:", localStorage.getItem("respostas"));
                localStorage.clear();
                console.log("Depois de limpar:", localStorage.getItem("respostas"));
                setTimeout  (() => {
                window.location.href = "index.html";
                }, 1000);
            });
        }
    });
}
    
    


    
    
    
    
    
    
    const form = document.getElementById('formulario');

    form.addEventListener('click', function (event) {
        event.preventDefault(); 
        
        const alternativas = document.querySelectorAll('input[name="alternativa"]');
        let altSelected = null;
        
        if (event.target.classList.contains('box')) {
            const radio = event.target.querySelector('input[type="radio"]');
            if (radio) {
                radio.checked = true;
            }
        }

        alternativas.forEach((alt) => {
            if(alt.checked) {
                altSelected = alt.id;
            }
        });
        
    





    if (altSelected) {
        
        let respostas = JSON.parse(localStorage.getItem('respostas')) || [];

        respostas.push(altSelected);

        localStorage.setItem('respostas', JSON.stringify(respostas));
        console.log("Alternativa selecionada: " + altSelected);
        const btn = document.getElementById('btn');

            window.location.href = btn.getAttribute('href');

        console.log(respostas);

    } else {
        console.log("Nenhuma alternativa selecionada.");
        alert('Selecione uma alternativa clicando em algum círculo.');
        return false;
    }


    });
