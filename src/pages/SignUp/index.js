import * as S from './styles';
import { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
//import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

function SignUp() {
  const [ name, setName ] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signUp, loadingAuth } = useContext(AuthContext);

function handleSubmit(e){
  e.preventDefault();

  if(name !== '' && email !== '' && password !== ''){
    signUp(email, password, name);
  }
}

  return (
    <S.ContainerCenter>
      <S.Login>
        <S.LoginArea>
          <S.MyIcon src={logo} alt="Logo System" />
        </S.LoginArea>
        <S.Form onSubmit={handleSubmit}>
          <S.Title>Create Account</S.Title>
          <S.FormInput
            type="text"
            placeholder="Type your name"
            value={name}
            onChange={ (e) => setName(e.target.value)} 
          />
          <S.FormInput
            type="text"
            placeholder="Type your email"
            value={email}
            onChange={ (e) => setEmail(e.target.value)} 
          />
          <S.FormInput
            type="password"
            placeholder="*******"
            value={password}
            onChange={ (e) => setPassword(e.target.value)} 
          />
          <S.Button
            type="submit"
          >
            {loadingAuth ? 'Loading...' : 'Register'}
          </S.Button>
        </S.Form>
        <S.Link to="/">Already have account ? Sign In</S.Link>
      </S.Login>
    </S.ContainerCenter>
  );
}

export default SignUp;
