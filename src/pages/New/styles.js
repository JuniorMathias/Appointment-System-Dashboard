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
        margin-left: 0;
    }
    @media screen and (max-width: 400px){
        margin-right: 40%;
        margin-left: -2%;
    }
    
`;
export const Values = styled.div`
`;

export const Label = styled.label`
    margin-bottom: 0.5em;
    font-size: 1.4em;
    display: flex;
    margin-left: 100%;
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
    width: 200%;
    @media screen and (max-width: 400px && max-width: 700){
        width: 180%;
    }
    @media screen and (max-width: 700px){
        width: 180%;
    }
    
`;
export const Option = styled.option`
    
`;
export const FormInput = styled.input`
    margin: 15px 0;

    
`;
export const Span = styled.span`
    padding-Left: 0.5em;
    font-size: 1.3em;
`;
export const TextArea = styled.textarea`
    height: 105px;
    width: 200%;
    resize: none;
    border-radius: 5px;
    margin-bottom: 1em;
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
    margin-left: 70%;
`;