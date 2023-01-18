import * as S from './styles';
import { useState } from 'react';
import logo from '../../assets/logo.png';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <S.ContainerCenter>
      <S.Login>
        <S.LogoArea>
          <img src={logo} alt="Logo System"/>
        </S.LogoArea>
      </S.Login>
    </S.ContainerCenter>
  );
}

export default SignIn;
