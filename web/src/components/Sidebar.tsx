import React from 'react';

import '../styles/components/sidebar.css';

function Sidebar() {
    return(
        <aside className='main-sidebar'>
            <div className='sidebar-item'>
                <p>Novo Cadastro</p>
            </div>
            <div className='sidebar-item'>
                <p>Clientes Cadastrados</p>
            </div>
            <div className='sidebar-item'>
                <p>Gerenciar usuários</p>
            </div>
            <div className='sidebar-item'>
                <p>Dashboard</p>
            </div>
            <div className='sidebar-item'>
                <p>Exportar dados</p>
            </div>
        </aside>
    );
}

export default Sidebar;