document.addEventListener('DOMContentLoaded', function () {
    // Referências aos elementos HTML
    const startButton = document.getElementById('mostrarAlerta');
    const progressBar = document.getElementById('progressBar');
    const alertContainer = document.getElementById('meuAlerta');

    // Função para mostrar o alerta
    function showAlert(message, alertType) {
        alertContainer.innerHTML = `
            <div class="alert alert-${alertType} mt-3" role="alert">
                ${message}
            </div>
        `;
    }

    // Função para atualizar a barra de progresso
    function updateProgressBar(progress) {
        progressBar.style.width = progress + '%';
        progressBar.setAttribute('aria-valuenow', progress);
    }

    // Evento de clique no botão "Iniciar"
    startButton.addEventListener('click', function () {
        let progress = 0;

        // Simula o progresso com intervalo de 500ms
        const interval = setInterval(function () {
            progress += 10;
            updateProgressBar(progress);

            if (progress >= 100) {
                clearInterval(interval);
                showAlert('Conta encerrada com sucesso!', 'success');
            }
        }, 500);
    });
});
