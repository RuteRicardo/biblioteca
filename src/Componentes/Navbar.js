// src/Componentes/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <div>
        <li><Link to="/">Cadastrar Alunos</Link></li>
        <li><Link to="/CadastrarLivros">Cadastrar Livros</Link></li>
        <li><Link to="/EmprestarLivros">Emprestar Livros</Link></li>
        <li><Link to="/DevolverLivros">Devolver Livros</Link></li>
        </div>
        <details><summary>Relatórios</summary>
        
        <li><Link to="/RelatoriodeLivros">Relatório de Livros</Link></li>
        <li><Link to="/RelatoriodeAlunos">Relatório de Alunos</Link></li>
        <li><Link to="/RelatoriodeLivrosEmprestados">Relatório de Livros Emprestados</Link></li>
        </details>
      </ul>
    </nav>
  );
};

export default Navbar;
