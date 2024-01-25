import { useState } from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import UploadPage from './UploadPage'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
/*function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }


  
  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <UploadPage/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
    </div>
  )
}*/


const LoginPage = ({ onLogin }) => {
  const handleLogin = (event) => {
    event.preventDefault();
    onLogin();
  };

  return (
    <div className="login-page">
      <div className="login-form">
        <h2>Sign In</h2>
        <form onSubmit={handleLogin}>
          <div className="email">
            <input type="email" placeholder="Email address" defaultValue="dummy@example.com" required />
          </div>
          <div className="password">
            <input type="password" placeholder="Password" defaultValue="password" required />
          </div>
          <button type="submit" >Sign In</button>
        </form>
      </div>
    </div>
  );
};

class App extends React.Component {
  state = { isLoggedIn: false };

  handleLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  render() {
    return (
      <Router>
        <div className='grid-container'>
          {this.state.isLoggedIn ? (
            <>
              <Header OpenSidebar={this.OpenSidebar} />
              <UploadPage />
              <Sidebar openSidebarToggle={this.openSidebarToggle} OpenSidebar={this.OpenSidebar} />
            </>
          ) : (
            <LoginPage onLogin={this.handleLogin} />
          )}
        </div>
      </Router>
    );
  }
  
}


export default App