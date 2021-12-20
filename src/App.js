import './App.scss';
import './cssClasses.scss';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomeScreen from './components/HomeScreen/HomeScreen';
import CreateBubble from './components/CreateBubble/CreateBubble';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<HomeScreen />}></Route>
        <Route path='/survey'></Route>
        <Route path='/bubble'>
          <Route path=':bubbleId' element={<h1>Bubble</h1>} />
          <Route path='create' element={<CreateBubble />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
