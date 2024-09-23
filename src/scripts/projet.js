function validateLogin() {
    const username = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    const userType = document.getElementById('usuario').value;

    // Exemplo de credenciais (substitua por uma chamada real a um servidor)
    const credentials = {
        funcionario: { username: 'funcionario', password: '1234' },
        gerente: { username: 'gerente', password: 'gerente1234' },
        administrador: { username: 'administrador', password: 'Admin' }
    };

    // Validação das credenciais
    if (username === credentials[userType].username && password === credentials[userType].password) {
        // Redirecionar para a página correspondente
        switch (userType) {
            case 'funcionario':
                window.location.href = 'funcionario.html';
                break;
            case 'gerente':
                window.location.href = 'gerente.html';
                break;
            case 'administrador':
                window.location.href = 'administrador.html';
                break;
        }
    } else {
        // Exibir mensagem de erro
        alert('Usuário ou senha inválidos. Tente novamente.');
    }
}

