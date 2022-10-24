import GlobalStyle, { Container } from './globalStyles'
import { ExtraCoverTitle } from './components/ExtraCoverTitle/ExtraCoverTitle';
import { Header } from './components/Header/Header';
import { OptionalExtraCover } from './contanier/OptionalExtraCover';
import { InfoSection } from './components/InfoSection/InfoSection';

const App = () => {
  return (<>  
   <GlobalStyle/>
   <Header titleText = {"HOME INSURANCE"}/>
   <Container>
      <InfoSection/>
      <ExtraCoverTitle titleTxt="Tailor your cover with our optional Extra"/>
      <OptionalExtraCover />
   </Container>
     </>
  );
}

export default App;
