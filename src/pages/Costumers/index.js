
import { useState } from 'react';
import * as S from './styles';
import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header';
import Title from '../../components/Title';
import { FiUser } from 'react-icons/fi';



export default function Costumers(){
  const [fakeName, setFakeName] = useState('');
  const [document, setDocument] = useState('');
  const [address, setAddress] = useState('');

  function handleAdd(e){
    e.preventDefault();
  }

  return(
      <div>
        <Header />
        <S.Content>
            <Title name="Customers">
                <FiUser size={25} />
            </Title>
        <S.Container>
            <S.Form onSubmit={handleAdd}>
                <S.Label>Fake Name</S.Label>
                <S.FormInput
                    type="text"
                    value={fakeName}
                    placeholder="Company Name"
                    onChange={ (e) => setFakeName(e.target.value)} 
                />

                <S.Label>Document Number</S.Label>
                <S.FormInput
                    type="text"
                    value={document}
                    placeholder="Document Number"
                    onChange={ (e) => setDocument(e.target.value)} 
                />

                <S.Label>Address</S.Label>
                <S.FormInput
                    type="text"
                    value={address}
                    placeholder="Company Address"
                    onChange={ (e) => setAddress(e.target.value)} 
                />
                <S.Button type='submit'>Register</S.Button>
            </S.Form>
        </S.Container>
        </S.Content>
      </div>
      
  )
}