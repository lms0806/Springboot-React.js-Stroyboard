import React, { useEffect } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './pages/post/Home';
import Header from './components/Header';
import SaveForm from './pages/post/SaveForm';
import Detail from './pages/post/Detail';
import LoginForm from './pages/user/LoginForm';
import { Container } from 'react-bootstrap';
import JoinForm from './pages/user/JoinForm';
import { useDispatch } from 'react-redux';
import { login } from './store';
import UpdateForm from './pages/post/UpdateForm';
import SearchIdForm from './pages/user/SearchIdForm';
import SearchPasswordForm from './pages/user/SearchPasswordForm';
import Myinfo from './pages/user/Myinfo';
import Search from './pages/post/Search';
import SendMessage from './pages/message/SendMessage';
import SendMessages from './pages/message/SendMessages';
import ReceiveMessages from './pages/message/ReceiveMessages';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    let jwtToken = localStorage.getItem('Authorization');
    if (jwtToken !== null) {
      dispatch(login());
    }
  }, []);

  return (
    <div>
      <Header />
      <Container>
        <Route path="/" exact={true} component={Home} />
        <Route path="/saveForm" exact={true} component={SaveForm} />
        <Route path="/post/:id" exact={true} component={Detail} />
        <Route
          path="/post/search/:keyword/:type"
          exact={true}
          component={Search}
        />
        <Route path="/loginForm" exact={true} component={LoginForm} />
        <Route path="/joinForm" exact={true} component={JoinForm} />
        <Route path="/myinfo" exact={true} component={Myinfo} />
        <Route path="/SearchIdForm" exact={true} component={SearchIdForm} />
        <Route
          path="/SearchPasswordForm"
          exact={true}
          component={SearchPasswordForm}
        />
        <Route path="/updateForm/:id" exact={true} component={UpdateForm} />
        <Route
          path="/message/sendmessage"
          exact={true}
          component={SendMessage}
        />
        <Route
          path="/message/sendmessages"
          exact={true}
          component={SendMessages}
        />
        <Route
          path="/message/receivemessages"
          exact={true}
          component={ReceiveMessages}
        />
      </Container>
    </div>
  );
}

export default App;
