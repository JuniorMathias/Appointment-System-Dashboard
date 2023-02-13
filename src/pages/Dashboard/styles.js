import styled from 'styled-components';
import { Link as Router } from 'react-router-dom';

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
    margin-top: 5em;
    margin-left: 11.0%;
    @media screen and (max-width: 750px){
        margin-left: 0;
        margin-top: 0;
        margin-bottom: 1em;
    }
    @media screen and (max-width: 750px){
      margin-left: 0;
      margin-top: 0;
      margin-bottom: 1em;
  }
    @media screen and (max-width: 400px){
      margin-left: 0;
      margin-top: 0;
      margin-bottom: 1em;
    }
`;

export const Span = styled.span`
    margin: 2em 0;
    font-weight: 600;
    font-size: 1.6em;
`;

export const Link = styled(Router)`
    display: block;
    color: #fff;
    padding: 10px;
    background-color: #83bf02;
    border-radius: 5%;
    text-decoration: none;
    display: flex;
    font-weight: 600;
    font-size: 1.4em;
    align-items: center;
    transition: ease-in-out .2s;
    &:hover {
        transform: scale(1.1);
    }
    svg{
        margin-right: .7em;
      }
    @media screen and (max-width: 700px){
        float: left;
    }
    @media screen and (max-width: 400px){
        text-align: center;
        float: none;
    }
`;

// table part 
export const Table = styled.table`
    border:1px solid #CCC;
    margin-top: 1em;
    padding: 0;
    width: 100%;
    table-layout: fixed;
    @media screen and (max-width: 1000px){
      margin-top: 1em;
      margin-bottom: 1em;
  }
`;
export const Th = styled.th`
  padding: .62em;
  text-align: center;
  font-weight: bold !important;
  font-size: .85em;
  letter-spacing: .1em;
  text-transform: uppercase;
`;

export const Tr = styled.tr`
  background-color: #f8f8f8;
  color: #009b89 !important;
  border: 1px solid #ddd;
  padding: .35em;
`;

export const Tbody = styled.tbody`
  color: #009b89 !important;
  text-align: center !important;
  font-weight: bold !important;
`;

export const Td = styled.td`
  background-color: #f8f8f8;
  color: #474a51 !important;
  border: 1px solid #ddd;
  padding: .35em;
  margin-left:
`;
export const Button = styled.button`
`;
export const ButtonMore = styled.button`
  margin: 1.5em 0;
  padding: .5em 1em;
  height: 35px;
  border: 0;
  border-radius: 5px;
  background-color: #181c2e;
  color: #fff !important;
  font-size: 1.1em !important;
`;
