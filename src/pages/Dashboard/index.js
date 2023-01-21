
import { useContext } from 'react';

import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header';

export default function Dashboard(){
  //here is gettin signOut from authContext there is a conditional
  const { signOut } = useContext(AuthContext);

  return(
    <div>
      <Header />
      <h1>PAGINA DASHBOARD</h1>
      <button onClick={ () => signOut() }>Fazer logout</button>
    </div>
  )
}