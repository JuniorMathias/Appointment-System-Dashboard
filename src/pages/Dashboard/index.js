
import { useState, useEffect } from 'react';
import * as S from './styles';

import Header from '../../components/Header';
import Title from '../../components/Title';
import { FiMessageSquare, FiPlus, FiSearch, FiEdit2 } from 'react-icons/fi';

import firebase from '../../services/firebaseConnection';
import { format } from 'date-fns';

const listRef = firebase.firestore().collection('calls').orderBy('create', 'desc');

export default function Dashboard(){
  const [register, setRegister] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [lastDocs, setLastDocs] = useState();

  useEffect(() =>{
    loadCalls();
    return() => {
    }
  }, []);

  async function loadCalls(){
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
          create: doc.data().create,
          createFormated: format(doc.data().create.toDate(), 'dd/MM/yyyy'),
          status: doc.data().status,
          complement: doc.data().complement
        })
      })

      //checking which register was searched and following from the search
      const lastDoc = snapshot.docs[snapshot.docs.length - 1];

      setRegister(register => [...register, ...list]); //getting the registers and putting in the params. spread operator
      setLastDocs(lastDoc);
    }else {
      setIsEmpty(true);
    }
    setLoadingMore(false);
  }
  async function handleMore(){
    setLoadingMore(true);
    await listRef.startAfter(lastDocs).limit(5)
    .get()
    .then((snapshot)=>{
      updateState(snapshot)
    })
  }

if(loading){
  return (
    <div>
      <Header/>
      <S.Content>
        <Title name='dashboard'>
          <FiMessageSquare size={25} />
        </Title>
        <S.Container>
          <S.Span>Loading Registers...</S.Span>
        </S.Container>
      </S.Content>
    </div>

  )
}

console.log(register);
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
            {register.map((item, index) =>{
              return (
                <S.Tr key={index}>
                  <S.Td data-label="Customer">{item.client}</S.Td>
                  <S.Td data-label="Assunto">{item.about}</S.Td>
                  <S.Td data-label="Status">
                    <span className="badge" style={{backgroundColor: item.status === 'Open' ? '#5cb85c' : '#999' }}>{item.status}</span>
                  </S.Td>
                  <S.Td data-label="Cadastrado">{item.createFormated}</S.Td>
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
              )
            })}
          </S.Tbody>
        </S.Table>
      
      {loadingMore && <h3 style={{textAlign: 'center', marginTop: 15 }}>Loading Datas...</h3>}
      { !loadingMore && !isEmpty && <S.ButtonMore className="btn-more" onClick={handleMore}>Buscar mais</S.ButtonMore> }
      </S.Container>
      </>
      }

      </S.Content>
    </div>
  )
}