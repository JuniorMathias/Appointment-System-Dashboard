import styled from 'styled-components';

export const Title = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 5px;
    background-color: #f8f8f8;
    margin-left: 200px;
    padding: 1em 16px;
    @media screen and (max-width: 700px){
        margin-left: 0;
    }
`;
export const Span = styled.span`
    margin-left: 1em;
    font-size: 1.5em;
`;