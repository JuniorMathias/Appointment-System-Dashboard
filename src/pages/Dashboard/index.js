
import { useState } from 'react';
import * as S from './styles';

import Header from '../../components/Header';
import Title from '../../components/Title';
import { FiMessageSquare, FiPlus, FiSearch, FiEdit2 } from 'react-icons/fi';
import {
  TableBody,
  TableContainer,
  TableHead
} from '@material-ui/core';

export default function Dashboard(){
  const [register, setRegister] = useState([1]);

  return(
    <div>
      <Header />
      <S.Content>

        <Title name='dashboard'>
          <FiMessageSquare size={25} />
        </Title>
      {register.length === 0 ? (
        <S.Container>

          <S.Span>Nothing Registered...</S.Span>

          <S.Link to="/dashboard">
            <FiPlus size={25} color="#fff" />
            New Register
          </S.Link>

        </S.Container>
      ): 
      <>
      <S.Container>
        <S.Link to="/dashboard">
          <FiPlus size={25} color="#fff" />
          New Register
        </S.Link>
        <S.Table>
          <S.Tr>
            <S.Th scope="col">Cliente</S.Th>
            <S.Th scope="col">Assunto</S.Th>
            <S.Th scope="col">Status</S.Th>
            <S.Th scope="col">Cadastrado em</S.Th>
            <S.Th scope="col">#</S.Th>
          </S.Tr>
          <S.Tbody>
            <S.Tr>
              <S.Td>Sujeito</S.Td>
              <S.Td data-label="Assunto">Suporte</S.Td>
              <S.Td data-label="Status">
                <span className="badge" style={{backgroundColor: '#5cb85c' }}>Em aberto</span>
              </S.Td>
              <S.Td data-label="Cadastrado">20/06/2021</S.Td>
              <S.Td data-label="#">
                <S.Button id="action" style={{backgroundColor: '#3583f6' }}>
                  <FiSearch color="#FFF" size={17} />
                </S.Button>
                <S.Button id="action" style={{backgroundColor: '#F6a935' }}>
                  <FiEdit2 color="#FFF" size={17} />
                </S.Button>
              </S.Td>
            </S.Tr>
          </S.Tbody>
        </S.Table>
      
      </S.Container>
      </>
      }

      </S.Content>
    </div>
  )
}