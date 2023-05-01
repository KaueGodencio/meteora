// Seleciona o botão de envio e o campo de e-mail
const submitBtn = document.querySelector('#submitBtn');
const emailInput = document.querySelector('#emailInput');

// Adiciona um listener de evento ao botão de envio
submitBtn.addEventListener('click', function() {
  // Verifica se o valor do campo de e-mail é válido
  if (emailInput.checkValidity()) {
    // Se o valor for válido, mostra o modal
    const modal = new bootstrap.Modal(document.querySelector('#myModal'));
    modal.show();
    // Limpa o valor do campo de e-mail
    emailInput.value = '';
  } else {
    // Se o valor não for válido, exibe uma mensagem de erro
    emailInput.classList.add('is-invalid');
  }
});