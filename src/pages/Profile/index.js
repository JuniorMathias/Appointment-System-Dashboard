import { useState, useContext } from 'react';
import * as S from './styles';
import Header from '../../components/Header';
import Title from '../../components/Title';
import avatar from '../../assets/avatar.png';
import { AuthContext } from '../../contexts/auth';

import { FiSettings,FiUpload } from 'react-icons/fi';


export default function Profile(){
  const { user,signOut } = useContext(AuthContext);

  const [name, setName] = useState(user && user.name);
  const [email, setEmail] = useState(user && user.email);
  const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl);

  return(
      <>
        <Header />
        <S.Content className='content'>  
            <Title name="My Profile">
                <FiSettings size={25} />
            </Title>
            <S.Container>
              <S.Form>
                <S.LabelAvatar>
                  <S.Span>
                    <FiUpload color='#fff' size={25} />
                  </S.Span>
                  <S.FormInputFile
                    type="file"
                    accept="image/*"
                  />
                  <S.AvatarImage>
                  { avatarUrl == null ? 
                    <img src={avatar} width={250} height={250} alt="profile pic" />
                     :
                     <img src={avatarUrl} width="250" height="250" alt="profile pic" />
                  }
                  </S.AvatarImage>
                </S.LabelAvatar>
                <S.Label>Name</S.Label>
                <S.FormInput
                    type="text"
                    value={name}
                    onChange={ (e) => setName(e.target.value)} 
                  />
                <S.Label>Email</S.Label>
                <S.FormInput
                    type="text"
                    value={email}
                    disabled={true}
                    style={{ cursor: 'not-allowed'}}
                  />
                  <S.Button type='submit'>Save</S.Button>
              </S.Form>
            </S.Container>
            <S.Container>
                <S.ButtonSignout onClick={ () => signOut() }>Sign Out </S.ButtonSignout>
            </S.Container>
        </S.Content>
      </>
  )
}