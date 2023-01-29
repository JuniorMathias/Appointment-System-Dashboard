
import { useState } from 'react';
import * as S from './styles';

import Header from '../../components/Header';
import Title from '../../components/Title';
import { FiMessageSquare, FiPlus, FiSearch, FiEdit2 } from 'react-icons/fi';
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow
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
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow style={{ fontWeight: 'Bold' }}>
                <S.TableCell> Clients </S.TableCell>
                <S.TableCell>About</S.TableCell>
                <S.TableCell>Status</S.TableCell>
                <S.TableCell>Registered in</S.TableCell>
                <S.TableCell>#</S.TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 }
                }}
              >
                <S.TableCellValues>Client Name</S.TableCellValues>
                <S.TableCellValues>Suport</S.TableCellValues>
                <S.TableCellValues className='badge'
                  style={{backgroundColor: '#009b89', borderRadius: '5%'}}
                >
                  open
                </S.TableCellValues>
                <S.TableCellValues>dd/mm/yyyy</S.TableCellValues>
                <S.TableCellValues>
                  <S.Button style={{backgroundColor: '#3583f6'}}>
                    <FiSearch size={17} color="#fff" />
                  </S.Button>
                  <S.Button style={{backgroundColor: '#f6a935'}}>
                    <FiEdit2 size={17} color="#fff" />
                  </S.Button>
                </S.TableCellValues>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        
      
      
      </S.Container>
      </>
      }

      </S.Content>
    </div>
  )
}