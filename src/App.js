import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Donation from './components/Donation/Donation';
import Events from './components/Events/Events';
import Blog from './components/Blog/Blog';
import Register from './components/Register/Register';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/donation' element={<Donation></Donation>}></Route>
        <Route path='/events' element={<Events></Events>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
