// Função para alternar entre modo claro e modo escuro
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode'); // Adiciona ou remove a classe 'dark-mode'
    
    // Armazenar a preferência do usuário no localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark'); // Salva a preferência como 'dark'
    } else {
        localStorage.setItem('theme', 'light'); // Salva a preferência como 'light'
    }
}

// Verifica a preferência do usuário ao carregar a página
window.onload = function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode'); // Aplica o modo escuro se salvo
    }
};
