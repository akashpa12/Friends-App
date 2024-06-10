import logo from './logo.svg';
import './App.css';
import AddFriends from './components/AddFriends';
import ViewFriend from './components/ViewFriend';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddFriends/>}/>
        <Route path='/view' element={<ViewFriend/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
