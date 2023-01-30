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
                     <S.Label>Client</S.Label>
                     <S.Select  select>
                         <S.Option>
                         one
                         </S.Option>
                         <S.Option>
                         one
                         </S.Option>
                     </S.Select>
                 </S.Form>
             </S.Container>
            
        </div>
    )
}