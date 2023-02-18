import styled from 'styled-components';

export const Modal = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
    z-index: 99;
`;

export const Container = styled.div`
    position: fixed;
    max-width: 600px;
    top: 15%;
    left: 0;
    right: 0;
    margin: 0 auto;
    padding: 4em 2em;
    background-color: #fff;
    box-shadow: 0 0 20px rgba(0,0,0,0.8);
`;
export const Button = styled.button`
    background-color: #f65835;
    border: 0;
    color: #fff;
    position: absolute;
    top: 15px;
    left: 15px;
    display: flex;
    justify-content: center;
    align-items: center
    padding: 4px 15px;
    border-radius: 5px;
    svg{
        margin-right: 5px;
    }
`;
export const H2 = styled.h2`
    margin-bottom: 1.2em;
    font-size: 2em;

`;
export const Span = styled.span`
    font-weight: bold;
    font-size: 1.2em;
    color: #121212;
    margin-right: 7px;
`;
export const Sta = styled.a`
    font-weight: 400;
    margin-right: 1em;
    padding: 2px 8px;
    border-radius: 3px;
`;
export const Row = styled.div`
    margin-bottom: 1em;
`;
export const Paragraph = styled.p`
    //getting the format of the paragraph
    white-space: pre-wrap;
    padding-top: 0.5em;

`;
export const Content = styled.div`
`;