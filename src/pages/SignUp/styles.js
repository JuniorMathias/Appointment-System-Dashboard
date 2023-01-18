import styled from 'styled-components';
import { Link as Router } from 'react-router-dom';

export const ContainerCenter = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #121212;
`;

export const Login = styled.div`
    background-color: #EAEAEC;
    width: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const LoginArea = styled.div`
    display: flex;
    justify-content: center;
    background-color: #181c2e;
    width: 100%;
`;

export const MyIcon = styled.img`
    padding: 20px;
    width: 170px;
    height: 130px;
`;

export const Title = styled.h1`
    text-align: center;
    margin-bottom: 0.5em;
    color: #181c2e;
`;

export const Form = styled.form`
    margin-top: 1.5em;
    width: 90%;
    display: flex;
    flex-direction: column;
`;

export const FormInput = styled.input`
    margin-bottom: 15px;
    height: 35px;
    border: 0;
    border-radius: 7px;
    padding: 10px;
    font-size: 15px;
    background-color: #FFF !important;
`;

export const Button = styled.button`
    height: 35px;
    border: 0;
    border-radius: 7px;
    background-color: #181c2e;
    color: #fff;
    font-size: 1.3em;
`;

export const Link = styled(Router)`
  color: #000;
  cursor: pointer;
  margin: 1.5em 0;
`;