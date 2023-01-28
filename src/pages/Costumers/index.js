
import { useContext } from 'react';
import * as S from './styles';
import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header';

export default function Costumers(){
  //here is gettin signOut from authContext there is a conditional
  const { signOut } = useContext(AuthContext);

  return(
    <div>
      <Header />
      <h1>PAGINA DASHBOARD</h1>
    </div>
  )
}