import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import React from 'react';
import Routes from '../main/routes';
import Menu from '../template/menu';

export default props => (
    <div>
        <Menu/>
        <Routes/>
    </div>
)