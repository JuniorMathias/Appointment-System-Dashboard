
import { useState } from 'react';
import * as S from './styles';

import Header from '../../components/Header';
import Title from '../../components/Title';
import { FiMessageSquare, FiPlus } from 'react-icons/fi';

export default function Dashboard(){

  return(
    <div>
      <Header />
      <S.Content>
        <Title name='dashboard'>
          <FiMessageSquare size={25} />
        </Title>
        <S.Container>
          <S.Span>Nothing Registered...</S.Span>
          <S.Link to="/dashboard">
            <FiPlus size={25} color="#fff" />
            New Register
          </S.Link>
        </S.Container>
      </S.Content>
    </div>
  )
}