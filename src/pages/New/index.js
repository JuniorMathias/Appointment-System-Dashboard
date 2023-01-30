import * as S from './styles';

import Header from '../../components/Header';
import Title from '../../components/Title';
import {  FiPlusCircle  } from 'react-icons/fi';

export default function New(){

    return(
        <div>
            <Header />
            <Title name='New Register'>
                <FiPlusCircle size={25} />
             </Title>

             <S.Container>
                 <S.Form>
                    <S.Label>Costumer</S.Label>
                    <S.Select type='select'>
                      <S.Option key={1} value={1}>one</S.Option>
                    </S.Select>
                    <S.Label>About</S.Label>
                    <S.Select>
                      <S.Option value="Suport">Suport</S.Option>
                      <S.Option value="Technical">Technical</S.Option>
                      <S.Option value="Finance">Finance</S.Option>
                    </S.Select>
                 </S.Form>
             </S.Container>
            
        </div>
    )
}