import React from "react";

const StatCard= ({label, value}) => (
  <div className="stat-card">
    <p>{label}</p>
    <p>{value}</p>
  </div>
);

const QuickActionButton = ({label}) => (
  <button className="quick-action">{label}</button>
);

const Home = () => {
  return (
    <>
      <main>
        <header className="header-home">
          <div>
            <h1>Church_Connect</h1>
          </div>
          <nav className="nav-buttons">
            <button>Membro</button>
            <button>Filhos</button>
            <button>Departamentos</button>
            <button>Cargos</button>
            <button>Igrejas</button>
            <button>Documentos</button>
          </nav>
        </header>

        <section className="dashboardHome">
          <h2>Deshboard</h2>
          <p>Visão geral do sistema de gerenciamento da igreja</p>
        </section>

        <section className="stats">
          <StatCard label="Membros ativos" value={248} />
          <StatCard label="Filhos Cadastrados" value={89} />
          <StatCard label="Departamentos" value={12} />
          <StatCard label="Cargos" value={8} />
        </section>

        <section className="actions-info">
          <div className="quick-actions">
            <h2>Ações Rápidas</h2>
            <p>Acesso rápido às principais funcionalidades</p>
            <QuickActionButton label="Cadastrar Novo Membro" />
            <QuickActionButton label="Cadastrar Filho" />
            <QuickActionButton label="Criar Departamento" />
            <QuickActionButton label="Criar Cargo" />
          </div>

          <div className="church-info">
            <h1>Informações da Igreja</h1>
            <p>Dados principais da congregação</p>
            <h2>IEADV São Pedro</h2>
            <p>Rua ....</p>
            <p>email: ....</p>
            <button>Editar Informações</button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
