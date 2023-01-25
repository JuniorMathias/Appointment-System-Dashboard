import styled from 'styled-components';

export const Content = styled.div`
`;

export const Container = styled.div`
    display: flex;
    background-color: #cecece;
    border-radius: 5px;
    padding: .8em;
    margin-bottom: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Form = styled.form`
    margin-bottom: 1em;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1em;
    padding: .7em;
    border:0;
    max-width: 600px;
`;

export const LabelAvatar = styled.label`
    width: 280px;
    height: 280px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    margin-left: 1.5em;
`;
export const FormInputFile = styled.input`
    display: none;
    margin-bottom: 1em;
    padding: 0.7em;
    border: 0;
    border-radius: 5px;
    max-width: 600px;
    display: none;
`;
export const AvatarImage = styled.div`
    margin-bottom: 1em;
    border-radius: 50%;
    object-fit: cover;
`;
export const Label = styled.label`
    margin-bottom: 0.5em;
    font-size: 1.4em;
    font-weight: bold;
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
export const FormInput = styled.input`
    margin-bottom: 1em;
    padding: .7em;
    padding-right: 10rem;
    border:0;
    border-radius: 5px;
    max-width: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
export const Button = styled.button`
    padding: 8px 40px 8px 40px;
    background-color: #121212;
    color: #fff;
    border-radius: 5px;
    font-size: 1.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 32%;
`;
export const ButtonSignout = styled.button`
    padding: 8px 20px;
    background-color: transparent;
    border:1px solid #121212;
    border-radius: 5px;
    font-size: 1.5em;
    display: flex;
    justify-content: center;
    align-items: center;
`;



