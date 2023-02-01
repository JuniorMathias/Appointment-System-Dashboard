import * as S from './styles';
import { useState } from 'react';
import Header from '../../components/Header';
import Title from '../../components/Title';
import {  FiPlusCircle  } from 'react-icons/fi';

export default function New(e){
  const [about, setAbout] = useState("Suport");
  const [status, setStatus] = useState('Open');


  function handleRegister(){
    e.preventDefault();
  }
  function handleChangeSelect(){
    setAbout(e.target.value);
  }
  function handleOptionChange(){
    setStatus(e.target.value);
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
                      <S.Label>Costumer</S.Label>
                      <S.Select type='select'>
                        <S.Option key={1} value={1}>one</S.Option>
                      </S.Select>

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
                        checked={ status == 'open'}
                      />
                      <S.Span>Open</S.Span>

                      <S.FormInput
                        type="radio"
                        name="radio"
                        value="Progress"
                        onChange={handleOptionChange}
                        checked={ status == 'Progress'}
                        style={{marginLeft: '15px'}}
                      />
                      <S.Span>Progress</S.Span>

                      <S.FormInput
                        type="radio"
                        name="radio"
                        value="Finished"
                        onChange={handleOptionChange}
                        checked={ status == 'Finished'}
                        style={{marginLeft: '15px'}}
                      />
                      <S.Span>Finished</S.Span>
                   </S.Values>

                    <S.Label>Complement</S.Label>
                    <S.TextArea 
                      type="text"
                      placeholder="How can I help you ? (Optional)"
                    />

                    <S.Button type='submit'>Register</S.Button>

                 </S.Form>
             </S.Container>
            
        </div>
    )
}