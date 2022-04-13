
import './App.css';

import GetProductListContainer from './containers/GetProductListContainer';
import HomeContainer from './containers/HomeContainer';
import { Container } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      {/* <HomeContainer /> */}
      <Container className='mt-5 pt-4 text-center'>
        <GetProductListContainer />
      </Container>

    </div>
  );
}

export default App;
