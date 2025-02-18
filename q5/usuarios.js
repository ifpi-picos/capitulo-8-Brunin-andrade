const usuarios = [];

export function adicionarUsuario(nome, email, senha) {
    usuarios.push({ nome, email, senha });
    console.log(`Usuário ${nome} adicionado com sucesso.`);
}

export function removerUsuario(email) {
    const index = usuarios.findIndex(user => user.email === email);
    if (index !== -1) {
        const removido = usuarios.splice(index, 1);
        console.log(`Usuário ${removido[0].nome} removido.`);
    } else {
        console.log("Usuário não encontrado.");
    }
}

export function atualizarUsuario(email, novoNome, novaSenha) {
    const usuario = usuarios.find(user => user.email === email);
    if (usuario) {
        usuario.nome = novoNome || usuario.nome;
        usuario.senha = novaSenha || usuario.senha;
        console.log(`Usuário ${email} atualizado.`);
    } else {
        console.log("Usuário não encontrado.");
    }
}

export function listarUsuarios() {
    console.log("\nLista de Usuários:");
    usuarios.forEach(user => {
        console.log(`Nome: ${user.nome}, Email: ${user.email}`);
    });
}