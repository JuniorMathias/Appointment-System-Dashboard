import * as S from './styles';
import Header from '../../components/Header';
import Title from '../../components/Title';

import { FiSettings } from 'react-icons/fi';

export default function Profile(){
  return(
      <>
        <Header />
        <S.Content className='content'>  
            <Title name="My Profile">
                <FiSettings size={25} />
            </Title>
        </S.Content>
      </>
  )
}