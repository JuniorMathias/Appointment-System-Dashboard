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
                <h2>Details</h2>
                <S.Row>
                    <S.Span>
                        About: <a>{content.about}</a>
                    </S.Span>
                </S.Row>
              </S.Content>

          </S.Container>
      </S.Modal>
        
      </> 
    )
}