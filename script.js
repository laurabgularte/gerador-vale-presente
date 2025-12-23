const vales = [
    "🎫 Vale um jantar romântico (você escolhe o lugar!)",
    "🎫 Vale uma massagem caprichada",
    "🎫 Vale uma noite de filmes com pipoca e doces",
    "🎫 Vale um dia inteiro sem lavar louça",
    "🎫 Vale um beijo de 1 minuto (com juros!)",
    "🎫 Vale um café da manhã na cama",
    "🎫 Vale uma playlist personalizada feita por mim",
    "🎫 Vale um 'Sim' para qualquer pedido bobo",
    "🎫 Vale um passeio fim de semana (você escolhe o lugar)",
    "🎫 Vale uma hora de cafuné",
    "🎫 Vale um 'sair da discussão' (use para encerrar qualquer picuinha instantaneamente)",
    "🎫 Vale fofoca: uma noite para a gente conversar sobre tudo sem distrações",
    "🎫 Vale me usar como travesseiro: por quanto tempo você quiser enquanto assistimos algo.",

];

const btn = document.getElementById('draw-btn');
const display = document.getElementById('message');
const statusMsg = document.getElementById('status-msg');


function obterProximoVale() {
    let disponiveis = JSON.parse(localStorage.getItem('valesDisponiveis'));

   
    if (!disponiveis || disponiveis.length === 0) {
        disponiveis = [...todosOsVales];
    }

    const indiceAleatorio = Math.floor(Math.random() * disponiveis.length);
    const valeSorteado = disponiveis[indiceAleatorio];

    disponiveis.splice(indiceAleatorio, 1);

   
    localStorage.setItem('valesDisponiveis', JSON.stringify(disponiveis));

    return valeSorteado;
}

function checkAvailability() {
    const lastDraw = localStorage.getItem('lastDrawDate');
    const today = new Date().toDateString();

    if (lastDraw === today) {
        const savedVale = localStorage.getItem('currentVale');
        display.innerHTML = `<span class="voucher-text">${savedVale}</span>`;
        btn.disabled = true;
        statusMsg.innerText = "Você já resgatou seu mimo de hoje! Volte amanhã. ❤️";
    }
}

btn.addEventListener('click', () => {
    const randomVale = vales[Math.floor(Math.random() * vales.length)];
    const today = new Date().toDateString();

    localStorage.setItem('lastDrawDate', today);
    localStorage.setItem('currentVale', randomVale);

    display.innerHTML = `<span class="voucher-text">${randomVale}</span>`;
    btn.disabled = true;
    statusMsg.innerText = "Mimo garantido! Amanhã tem mais. ❤️";
});


checkAvailability();