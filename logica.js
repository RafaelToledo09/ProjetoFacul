function verificarIdade() {
    
    let idade = prompt("Olá! Qual é a sua idade para acessar o site?");
    const gameContainer = document.getElementById('game-container');

   
    if (idade === null || idade.trim() === "") {
        alert("Acesso cancelado ou idade inválida.");
        gameContainer.classList.add('blur-game'); 
        return;
    }

    
    if (Number(idade) >= 18) {
        localStorage.setItem('idadeVerificada', 'maior');
        gameContainer.classList.remove('blur-game'); 
        alert("Acesso liberado! Bem-vindo.");
    } else {
        localStorage.setItem('idadeVerificada', 'menor');
        gameContainer.classList.add('blur-game'); 
        alert("Acesso restrito para maiores de 18 anos. Conteúdo bloqueado.");
    }
}


window.onload = function() {
    const status = localStorage.getItem('idadeVerificada');
    const gameContainer = document.getElementById('game-container');

    
    if (status === 'maior') {
        gameContainer.classList.remove('blur-game');
    } else if (status === 'menor') {
        gameContainer.classList.add('blur-game');
    } else {
        
        verificarIdade();
    }
};
function toggleTema() {
    const body = document.body;
    const btn = document.getElementById('btn-theme');
    
    
    body.classList.toggle('light-mode');
    
    
    if (body.classList.contains('light-mode')) {
        btn.innerHTML = "🌙 Modo Escuro";
        localStorage.setItem('tema', 'claro');
    } else {
        btn.innerHTML = "☀️ Modo Claro";
        localStorage.setItem('tema', 'escuro');
    }
}
window.onload = function() {
    // --- LÓGICA DO TEMA ---
    const temaSalvo = localStorage.getItem('tema');
    const btn = document.getElementById('btn-theme');
    
    if (temaSalvo === 'claro') {
        document.body.classList.add('light-mode');
        if (btn) btn.innerHTML = "🌙 Modo Escuro";
    }
    

    
    const statusIdade = localStorage.getItem('idadeVerificada');
    const gameContainer = document.getElementById('game-container');

    if (statusIdade === 'maior') {
        gameContainer.classList.remove('blur-game');
    } else if (statusIdade === 'menor') {
        gameContainer.classList.add('blur-game');
    } else {
        verificarIdade();
    }
};