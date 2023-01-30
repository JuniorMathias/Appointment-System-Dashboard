import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    background-color: #dcdcdc;
    border-radius: 5px;
    padding: .8em;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 1em;
    @media screen and (max-width: 700px){
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
    @media screen and (max-width: 750px){
        margin-right: 40%;
        margin-left: 0;
    }
    @media screen and (max-width: 700px){
        margin-left: 10%;
    }
    @media screen and (max-width: 400px){
        margin-right: 60%;
        margin-left: -2%;
    }
    
`;
export const Values = styled.div`
`;

export const Label = styled.label`
    margin-bottom: 0.5em;
    font-size: 1.4em;
    display: flex;
    margin-left: 150%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
export const Select = styled.select`
    margin-bottom: 1em;
    margin-top: 0.5em;
    padding: .7em;
    border: 0;
    border-radius: 5px;
    width: 300%;
    
`;
export const Option = styled.option`
    
`;
export const FormInput = styled.input`
    
`;
export const Span = styled.span`
    
`;
export const TextArea = styled.textarea`
    
`;