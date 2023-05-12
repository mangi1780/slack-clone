import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import Chat from './Components/Chat';
import { useState } from 'react';
import Login from './Components/Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{user},dispatch] = useStateValue();

  return (
    <div className="App">
      <Router>
        {!user ? <Login /> : <>
          <Header />
          <div className='app__body'>
            <Sidebar />
            <Switch>
              <Route path='/channel/:channelId' element={<Chat />}>
              </Route>
              <Route path='/' element={<Chat />}>
              </Route>
            </Switch>
            {/*React-Router -- chat screen*/}
          </div>
        </>}
      </Router>


    </div>
  );
}

export default App;
