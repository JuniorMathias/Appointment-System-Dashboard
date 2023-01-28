import styled from 'styled-components';

export const Content = styled.div`
`;

export const Container = styled.div`
    display: flex;
    background-color: #dcdcdc;
    border-radius: 5px;
    padding: .8em;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 1em;
    margin-left: 10%;
    @media screen and (max-width: 750px){
        margin-left: 0;
        margin-top: 0;
        margin-bottom: 1em;
}
`;

export const Form = styled.form`
    margin-bottom: 1em;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1em;
    padding: .7em;
    border:0;
    @media screen and (max-width: 700px){
        margin-left: 0;
    }
`;

export const Label = styled.label`
    margin-bottom: 0.5em;
    font-size: 1.4em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
export const FormInput = styled.input`
    margin-bottom: 1em;
    margin-top: 0.5em;
    padding: .7em;
    padding-right: 10rem;
    border:0;
    border-radius: 5px;
    max-width: 600px;
`;
export const Button = styled.button`
    padding: 8px 40px 8px 40px;
    background-color: #121212;
    color: #fff;
    border-radius: 5px;
    font-size: 1.4em;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 30%;
`;