import { adicionarUsuario, removerUsuario, atualizarUsuario, listarUsuarios } from "./usuarios.js";

adicionarUsuario("Ana Silva", "ana@email.com", "senha123");
adicionarUsuario("Carlos Santos", "carlos@email.com", "minhasenha");

listarUsuarios();

atualizarUsuario("ana@email.com", "Ana Souza", "novaSenha456");

removerUsuario("carlos@email.com");

listarUsuarios();