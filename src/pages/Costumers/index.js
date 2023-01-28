
import { useState } from 'react';

import * as S from './styles';

import Header from '../../components/Header';
import Title from '../../components/Title';

import { FiUser } from 'react-icons/fi';
import { toast } from "react-toastify";

import firebase from '../../services/firebaseConnection';



export default function Costumers(){
  const [companyName, setCompanyName] = useState('');
  const [document, setDocument] = useState('');
  const [address, setAddress] = useState('');

async function handleAdd(e){
    e.preventDefault();

    if(companyName !== '' && document !== '' && address !==''){
        await firebase.firestore().collection('costumers')
        .add({
            companyName: companyName,
            document: document,
            address: address
        })
        .then(()=>{
            setCompanyName('');
            setDocument('');
            setAddress('');
            toast.info("Company Registered successfully");
        })
        .catch(()=>{
            toast.error("Couldn't register the company");
        })
    }else{
        toast.error("Please Fill in the details");
    }

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
                <S.Label>Company Name</S.Label>
                <S.FormInput
                    type="text"
                    value={companyName}
                    placeholder="Company Name"
                    onChange={ (e) => setCompanyName(e.target.value)} 
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