import * as S from './styles';
import { useState, useContext } from 'react';
//import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { AuthContext } from '../../contexts/auth'
function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, loadingAuth } = useContext(AuthContext);

function handleSubmit(e){
  e.preventDefault();
  
  if(email !== '' && password !== ''){
    signIn(email, password);
  }

}

  return (
    <S.ContainerCenter>
      <S.Login>
        <S.LoginArea>
          <S.MyIcon src={logo} alt="Logo System" />
        </S.LoginArea>
        <S.Form onSubmit={handleSubmit}>
          <S.Title>Sign In</S.Title>
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
            {loadingAuth ? 'Loading...' : 'Sign In'}
          </S.Button>
        </S.Form>
        <S.Link to="/register">Don't have an account? Subscribe</S.Link>
      </S.Login>
    </S.ContainerCenter>
  );
}

export default SignIn;
