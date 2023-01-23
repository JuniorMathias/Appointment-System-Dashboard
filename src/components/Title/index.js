
import * as S from './styles';

export default function Title({children, name}){
  return(
      <S.Title>
        {children}
        <S.Span>{name}</S.Span>
      </S.Title>
  )
}