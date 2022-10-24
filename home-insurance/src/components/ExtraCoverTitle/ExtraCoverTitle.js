import {CoverTitleContainer, CoverTitle} from './ExtraCoverTitle.styled'
export const ExtraCoverTitle = ({titleTxt}) => {
  return (
    <>
     <CoverTitleContainer>
      <CoverTitle data-testid="cover-title">{titleTxt}</CoverTitle>
    </CoverTitleContainer>
    </>
  )
}
