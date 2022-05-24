import { Button } from '@material-ui/core';
import { Title } from '@material-ui/icons';
import Head from 'next/head';
import styled from "styled-components"
import { auth, provider } from '../firebase';

function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider).catch(alert);
    }
    return (
        <Container>


            <LoginContainer>
                <Logo src='https://media.discordapp.net/attachments/966758051145195590/978569142389063750/logo.png'></Logo>
                <Button onClick={signIn} variant='outlined'>
                    Iniciar con Google
                </Button>
            </LoginContainer>
        </Container>
    );
}

export default Login;

const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    background-color: whitesmoke;
`;

const LoginContainer = styled.div`
    padding: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 55px;
    box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.55);
`;

const Logo = styled.img`
    height: 200px;
    width: 200px;
    margin-bottom: 25px;
`;