import styled, { css } from 'styled-components';
import { Link as Router } from 'react-router-dom';
import {
    TextField as input,
    Button as btn,
    TableCell as tbc,
    TableRow as tr
  } from '@material-ui/core';

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
    margin-left: 11.4%;
    @media screen and (max-width: 750px){
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
export const TableCell = styled(tbc)`
  font-weight: bold !important;
  width: 15%;
  color: #009b89 !important;
  text-align: center !important;
  // border-bottom: 50% !important;
`;
export const TableCellValues = styled(tbc)`
  width: 15%;
  color: #fff !important;
  text-align: center !important;
`;
export const Button = styled.button`
`;
