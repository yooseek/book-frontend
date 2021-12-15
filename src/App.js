import React from 'react';
import { Container } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import detail from './pages/book/detail';
import home from './pages/book/home';
import saveForm from './pages/book/saveForm';
import updateForm from './pages/book/updateForm';
import joinForm from './pages/user/joinForm';
import loginForm from './pages/user/loginForm';
function App() {
  return (
    <div>
      <Header />
      <Container>
        <Route path="/" exact={true} component={home} />
        <Route path="/saveForm" exact={true} component={saveForm} />
        <Route path="/book/:id" exact={true} component={detail} />
        <Route path="/loginForm" exact={true} component={loginForm} />
        <Route path="/joinForm" exact={true} component={joinForm} />
        <Route path="/updateForm/:id" exact={true} component={updateForm} />
      </Container>
    </div>
  );
}

export default App;
