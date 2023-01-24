import styled from 'styled-components';

export const Content = styled.div`
    
`;

export const Container = styled.div`
    display: flex;
    background-color: #f8f8f8;
    border-radius: 5px;
    padding: .8em;
    align-items: center;
    margin-left: 200px;
`;
export const Form = styled.form`
    
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
    
`;

export const Span = styled.span`
    z-index: 99;
    position: absolute;
    opacity: 0.7;
    transition: all 0.5s;
    &:hover {
        opacity: 1;
    }
`;
export const Button = styled.button`
    
`;

export const FormInput = styled.input`
    display: none;
`;

