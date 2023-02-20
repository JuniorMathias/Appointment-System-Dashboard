import * as S from './styles';

import Header from '../../components/Header';
import Title from '../../components/Title';
import {  FiPlusCircle  } from 'react-icons/fi';
import { toast } from "react-toastify";

import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import firebase from '../../services/firebaseConnection';

import { useHistory, useParams} from 'react-router-dom';

export default function New(e){
  const { id } = useParams();
  const history = useHistory();

  const [about, setAbout] = useState("Suport");
  const [status, setStatus] = useState('Open');
  const [complement, setComplement] = useState('');

  const [customer, setCustomer] = useState([]);
  const [loadCustomer, setLoadCustomer] = useState(true);
  const [customerSelected, setCustomerSelected] = useState(0);
  const [idCustomer, setIdCustomer] = useState(false);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    async function loadCustomer(){
      await firebase.firestore().collection('costumers')
      .get()
      .then((snapshot) => {
        let list = [];
        snapshot.forEach((doc) => {
          list.push({
            id: doc.id,
            companyName: doc.data().companyName
          })
        })

        if(list.length === 0){
          toast.info("No Company Found");
          setCustomer([ {id: 1, companyName: 'Open to work'}]);
          setLoadCustomer(false);
          return;
        }
        setCustomer(list);
        setLoadCustomer(false);

        if(id){
          loadId(list);
        }
      })
      .catch((error) => {
        toast.error("somathing went wrong", error);
        setLoadCustomer(false);
        setCustomer([ {id: 1, companyName: ''}]);
      })
    }
    loadCustomer();
  },[id]);

  async function loadId(list){
    await firebase.firestore().collection('calls').doc(id)
    .get()
    .then((snapshot)=> {
      setAbout(snapshot.data().about);
      setStatus(snapshot.data().status);
      setComplement(snapshot.data().complement)

      let index = list.findIndex(item => item.id === snapshot.data().clientId)
      setCustomerSelected(index);
      setIdCustomer(true);
    })
    .catch((error) => {
      toast.error("Something went wrong, please try again");
      setIdCustomer(false);
    })

  }

 async function handleRegister(e){
    e.preventDefault();
    if(idCustomer){
      await firebase.firestore().collection('calls')
        .doc(id)
        .update({
          client: customer[customerSelected].companyName,
          clientId: customer[customerSelected].id,
          about: about,
          status: status,
          complement: complement,
          userId: user.uid
        })
        .then(() => {
          toast.success("Updated customer successfully");
          setCustomerSelected(0);
          setComplement('');
          history.push('/dashboard');
        })
        .catch((error) => {
          toast.error("Something went wrong when registering, please try again");
        })
        return;
    }

    await firebase.firestore().collection('calls')
    .add({
      create: new Date(),
      client: customer[customerSelected].companyName,
      clientId: customer[customerSelected].id,
      about: about,
      status: status,
      complement: complement,
      userId: user.uid
    })
    .then(() => {
      toast.success("Registered successfully");
      setComplement('');
      setCustomerSelected(0);
    })
    .catch((error) => {
      toast.error("Something went wrong when registering, please try again");
    })
  }
  //function to select any select
  function handleChangeSelect(e){
    setAbout(e.target.value);
  }
  function handleOptionChange(e){
    setStatus(e.target.value);
  }
  function handleChangeCustomer(e){
    setCustomerSelected(e.target.value);
  }
    return(
        <div>
            <Header />
            <Title name='New Register'>
                <FiPlusCircle size={25} />
             </Title>

             <S.Container>
                 <S.Form onSubmit={handleRegister}>
                  <S.Values>
                      <S.Label>Customer</S.Label>

                      {loadCustomer ? (
                        <S.Select type="select" disabled={true} value="loading customers..." />
                      ) : (
                      <S.Select 
                        type='select'
                        value={customerSelected}
                        onChange={handleChangeCustomer}
                      >
                        {customer.map((item, index) => {
                          return (
                            <option key={item.id} value={index} >
                              {item.companyName}
                            </option>
                          )
                        })}
                      </S.Select>
                      )}
                      <S.Label>About</S.Label>
                      <S.Select value={about} onChange={handleChangeSelect}>
                        <S.Option value="Suport">Suport</S.Option>
                        <S.Option value="Technical">Technical</S.Option>
                        <S.Option value="Finance">Finance</S.Option>
                      </S.Select>

                      <S.Label>Status</S.Label>
                      <S.FormInput
                        type="radio"
                        name="radio"
                        value="Open"
                        onChange={handleOptionChange}
                        checked={ status === 'Open'}
                      />
                      <S.Span>Open</S.Span>

                      <S.FormInput
                        type="radio"
                        name="radio"
                        value="Progress"
                        onChange={handleOptionChange}
                        checked={ status === 'Progress'}
                        style={{marginLeft: '15px'}}
                      />
                      <S.Span>Progress</S.Span>

                      <S.FormInput
                        type="radio"
                        name="radio"
                        value="Finished"
                        onChange={handleOptionChange}
                        checked={ status === 'Finished'}
                        style={{marginLeft: '15px'}}
                      />
                      <S.Span>Finished</S.Span>
                   </S.Values>

                    <S.Label>Complement</S.Label>
                    <S.TextArea 
                      type="text"
                      placeholder="How can I help you ? (Optional)"
                      value={complement}
                      onChange={ (e) => setComplement(e.target.value)}
                    />

                    <S.Button type='submit'>Register</S.Button>

                 </S.Form>
             </S.Container>
            
        </div>
    )
}