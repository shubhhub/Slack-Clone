import './App.css';
import Header from './Header'
import Sidebar from './Sidebar'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Chat from './Chat'
import Login from './Login';
// import { useState } from 'react';
import {useStateValue} from './StateProvider'
// using material-ui for icons
// https://mui.com/material-ui/getting-started/installation/
// https://mui.com/material-ui/material-icons/

// react-router
// https://v5.reactrouter.com/web/guides/quick-start

function App() {
  // const [user, setUser] = useState(null);
  const [{user}, dispatch] = useStateValue();


  return (
    <div className="app">

      {/* <h1>Hello🚀</h1> */}
      <Router>
        {/* Header */}
        {!user ? (
          // LOGIN PAGE
          // <h1>LOGIN PAGE</h1>
          <Login/>
        ) : (
          <>
            {/* fragment in react */}
            <Header />

            <div className='app__body'>
              {/* SideBar */}
              <Sidebar />
              {/* React Router for chat screen */}

              <Routes>
                <Route path="/room/:roomID" element={<Chat />}></Route>
                {/* :roomId can be anything, /room/abc and /room/pqk both will go inside this */}
                {/* chat component */}

                <Route path="/">

                </Route>
              </Routes>
              {/* Check in which route you are in and print things */}
            </div>
          </>
        )}
      </Router>


    </div>
  );
}

export default App;
