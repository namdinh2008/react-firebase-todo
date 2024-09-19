import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import { Header } from './compomnents/header';
import Container from '@mui/material/Container';

function App() {
    return (
        <Container maxWidth="sm" sx={{ pb: 5}}>
            <Header />
            <main>
                <Outlet />
            </main>
        </Container>
    );
}

export default App;
