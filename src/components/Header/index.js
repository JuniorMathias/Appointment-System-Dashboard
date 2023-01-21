import * as S from './styles';
import { AuthContext } from '../../contexts/auth';
import { useContext } from 'react';
import avatar from '../../assets/avatar.png';
import { FiHome, FiUser, FiSettings  } from 'react-icons/fi';


export default function Header(){
    //GETTING THE DATA FROM USERS I CAN USE USER.NAME EX
    const { user } = useContext(AuthContext);

    return(
      <> 
        <S.SideBar>
            <S.Avatar src={user.avatarUrl == null ? avatar : user.avatarUrl } alt="Avatar" />
        </S.SideBar>

        <S.Link to="/">
            <FiHome color='#fff' size={24} />
            Chamados
        </S.Link>
      </> 
    )
}