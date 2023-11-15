document.getElementById('cadastroFamiliaBtn').addEventListener('click', function() {
    window.location.href = 'cadastroFamilia.html';
});

document.getElementById('cadastroDoadorBtn').addEventListener('click', function() {
    window.location.href = 'cadastroDoador.html';
});
function submitForm() {
    var doador = document.getElementById('doador').value;
    var alimento = document.getElementById('alimento').value;
    var quantidade = document.getElementById('quantidade').value;

    // Você pode fazer algo com os dados, como enviar para um servidor ou exibir em um console.
    console.log('Doador:', doador);
    console.log('Tipo de Alimento:', alimento);
    console.log('Quantidade:', quantidade);

    // Adicione aqui a lógica para enviar os dados para o servidor, se necessário.
}
