
import { useState, useEffect } from 'react';
import * as S from './styles';

import Header from '../../components/Header';
import Title from '../../components/Title';
import { FiMessageSquare, FiPlus, FiSearch, FiEdit2 } from 'react-icons/fi';

import firebase from '../../services/firebaseConnection';
import { format } from 'date-fns';

const listRef = firebase.firestore().collection('calls').orderBy('created', 'desc');

export default function Dashboard(){
  const [register, setRegister] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [lastDocs, setLastDocs] = useState();

  useEffect(() =>{
    loadRegister();
    return() => {

    }
  }, []);

  async function loadRegister(){
    await listRef.limit(5)
    .get()
    .then((snapshot) => {
      updateState(snapshot);
    })
    .catch(() => {
      setLoadingMore(false);
    })
    setLoading(false);
  }

  //loading the registration from firebase

  async function updateState(snapshot) {
    const isCollectionEmpty = snapshot.size === 0;

    if(!isCollectionEmpty){
      let list = [];
      
      snapshot.forEach((doc)=> {
        list.push({
          id: doc.id,
          about: doc.data().about,
          client: doc.data().client,
          clientId: doc.data().clientId,
          created: doc.data().created,
          createFormated: format(doc.data().created.toDate(), 'dd/MM/yyyy'),
          status: doc.data().status,
          complement: doc.data().complement
        })
      })

      //checking which register was searched and following from the search
      const lastDoc = snapshot.docs[snapshot.docs.length - 1];

      setRegister(register => [...register, ...list]) //getting the registers and putting in the params. spread operator
      setLastDocs(lastDoc);
    }else {
      setIsEmpty(true);
    }
    setLoadingMore(false);
  }

  return(
    <div>
      <Header />
      <S.Content>

        <Title name='dashboard'>
          <FiMessageSquare size={25} />
        </Title>
      {register.length === 0 ? (
        <S.Container>

          <S.Span>Nothing Registered...</S.Span>

          <S.Link to="/new">
            <FiPlus size={25} color="#fff" />
            New Register
          </S.Link>

        </S.Container>
      ): 
      <>
      <S.Container>
        <S.Link to="/new">
          <FiPlus size={25} color="#fff" />
          New Register
        </S.Link>
        <S.Table>
          <S.Tr>
            <S.Th scope="col">Client</S.Th>
            <S.Th scope="col">About</S.Th>
            <S.Th scope="col">Status</S.Th>
            <S.Th scope="col">Registered in</S.Th>
            <S.Th scope="col">#</S.Th>
          </S.Tr>
          <S.Tbody>
            <S.Tr>
              <S.Td>Junior</S.Td>
              <S.Td data-label="Assunto">Suport</S.Td>
              <S.Td data-label="Status">
                <span className="badge" style={{backgroundColor: '#5cb85c' }}>Open</span>
              </S.Td>
              <S.Td data-label="Cadastrado">DD/MM/YYYY</S.Td>
              <S.Td data-label="#">
                <S.Button id="action" 
                  style={{backgroundColor: '#3583f6', marginRight: '0.3em', borderRadius: '20%'}}
                >
                  <FiSearch color="#FFF" size={17} />
                </S.Button>
                <S.Button id="action" style={{backgroundColor: '#F6a935', borderRadius: '20%' }}>
                  <FiEdit2 color="#FFF" size={17} />
                </S.Button>
              </S.Td>
            </S.Tr>
          </S.Tbody>
        </S.Table>
      
      </S.Container>
      </>
      }

      </S.Content>
    </div>
  )
}