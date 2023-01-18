
import { useContext } from 'react';

import { AuthContext } from '../../contexts/auth';

export default function Dashboard(){
  //here is gettin signOut from authContext there is a conditional
  const { signOut } = useContext(AuthContext);

  return(
    <div>
      <h1>PAGINA DASHBOARD</h1>
      <button onClick={ () => signOut() }>Fazer logout</button>
    </div>
  )
}