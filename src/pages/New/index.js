import * as S from './styles';

import Header from '../../components/Header';
import Title from '../../components/Title';
import {  FiPlusCircle  } from 'react-icons/fi';

export default function New(){

    return(
        <div>
            <Header />
            <Title name='New Register'>
                <FiPlusCircle size={25} />
             </Title>

             <S.Container>
                 <S.Form>
                  <S.Values>
                      <S.Label>Costumer</S.Label>
                      <S.Select type='select'>
                        <S.Option key={1} value={1}>one</S.Option>
                      </S.Select>

                      <S.Label>About</S.Label>
                      <S.Select>
                        <S.Option value="Suport">Suport</S.Option>
                        <S.Option value="Technical">Technical</S.Option>
                        <S.Option value="Finance">Finance</S.Option>
                      </S.Select>

                      <S.Label>Status</S.Label>
                      <S.FormInput
                        type="radio"
                        name="radio"
                        value="Open"
                      />
                      <S.Span>Open</S.Span>

                      <S.FormInput
                        type="radio"
                        name="radio"
                        value="Progress"
                      />
                      <S.Span>Progress</S.Span>

                      <S.FormInput
                        type="radio"
                        name="radio"
                        value="Finished"
                      />
                      <S.Span>Finished</S.Span>
                   </S.Values>

                    <S.Label>Complement</S.Label>
                    <S.TextArea 
                      type="text"
                      placeholder="How can I help you ? (Optional)"
                    />

                 </S.Form>
             </S.Container>
            
        </div>
    )
}