import * as S from './styles';
import { FiX } from 'react-icons/fi';



export default function Modal(content, close){
    return(
      <>
      <S.Modal>
          <S.Container>
              <S.Button onClick={close}>
                  <FiX size={23} color='#fff' />
                  Back
              </S.Button>
              <S.Content>
                <S.H2>Details</S.H2>
                <S.Row>
                    <S.Span>
                        About: <a>{content.about}</a>
                    </S.Span>
                </S.Row>
                <S.Row>
                    <S.Span>
                        Client: <a>{content.client}</a>
                    </S.Span>
                    <S.Span>
                        Registered to: <a>{content.createFormated}</a>
                    </S.Span>
                </S.Row>
                <S.Row>
                    <S.Span>
                        Status: <S.Sta style={{color: '#fff', backgroundColor: content.status === 'Open' ? '#5cb85c' : '#999' }}>{content.status}</S.Sta>
                    </S.Span>
                </S.Row>
                {/* //showing only if the complement is different of null */}
                {content.complement !== '' && (
                    <>
                    <h3>Complement</h3>
                    <p>
                      {content.complement}
                    </p>
                    </>
                ) }

              </S.Content>
          </S.Container>
      </S.Modal>
        
      </> 
    )
}