
import { useState } from 'react';
import * as S from './styles';

import Header from '../../components/Header';
import Title from '../../components/Title';
import { FiMessageSquare, FiPlus, FiSearch, FiEdit2 } from 'react-icons/fi';

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
            <S.Th scope="col">Client</S.Th>
            <S.Th scope="col">About</S.Th>
            <S.Th scope="col">Status</S.Th>
            <S.Th scope="col">Registered in</S.Th>
            <S.Th scope="col">#</S.Th>
          </S.Tr>
          <S.Tbody>
            <S.Tr>
              <S.Td>Junior</S.Td>
              <S.Td data-label="Assunto">Suport</S.Td>
              <S.Td data-label="Status">
                <span className="badge" style={{backgroundColor: '#5cb85c' }}>Open</span>
              </S.Td>
              <S.Td data-label="Cadastrado">DD/MM/YYYY</S.Td>
              <S.Td data-label="#">
                <S.Button id="action" 
                  style={{backgroundColor: '#3583f6', marginRight: '0.3em', borderRadius: '20%'}}
                >
                  <FiSearch color="#FFF" size={17} />
                </S.Button>
                <S.Button id="action" style={{backgroundColor: '#F6a935', borderRadius: '20%' }}>
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