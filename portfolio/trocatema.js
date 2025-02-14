document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("themeToggle");
    const html = document.documentElement;

    // Recupera o tema salvo no localStorage ou usa "light" como padrão
    const savedTheme = localStorage.getItem("theme") || "light";
    html.setAttribute("data-bs-theme", savedTheme);

    // Atualiza o ícone do botão
    updateIcon(savedTheme);

    // Evento de clique para alternar o tema
    toggleButton.addEventListener("click", function () {
        let currentTheme = html.getAttribute("data-bs-theme") || "light";
        let newTheme = currentTheme === "light" ? "dark" : "light";

        // Aplica o novo tema
        html.setAttribute("data-bs-theme", newTheme);
        localStorage.setItem("theme", newTheme);

        // Atualiza o ícone do botão
        updateIcon(newTheme);
    });

    // Função para atualizar o ícone do botão de tema
    function updateIcon(theme) {
        toggleButton.innerHTML = theme === "light" 
            ? '<i class="bi bi-sun text-warning fs-4"></i>' 
            : '<i class="bi bi-moon text-primary fs-4"></i>';
    }
});
