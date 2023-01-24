import styled from 'styled-components';

export const Content = styled.div`
    
`;

export const Container = styled.div`
    display: flex;
    background-color: #cecece;
    border-radius: 5px;
    padding: .8em;
    align-items: center;
    margin-left: 200px;
`;
export const Form = styled.form`
    margin-bottom: 1em;
    border-radius: 50%;
    object-fit: cover;
`;

export const LabelAvatar = styled.label`
    width: 280px;
    height: 280px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
`;
export const Label = styled.label`
    margin-bottom: 0.5em;
    font-size: 1.4em;
`;

export const Span = styled.span`
    z-index: 99;
    position: absolute;
    opacity: 0.7;
    transition: all 0.5s;
    &:hover {
        opacity: 1;
        transform: scale(1.4);
    }
`;
export const Button = styled.button`
    
`;

export const FormInput = styled.input`
    display: none;
    margin-bottom: 1em;
    padding: 0.7em;
    border: 0;
    border-radius: 5px;
    max-width: 600px;
`;

