import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Message from './Message';

const SendMessage = (props) => {
  const { user } = useSelector((store) => store);
  const [message, setMessage] = useState({
    sendusername: user.username,
    receiveusername: '',
    content: '',
  });

  const sendMessage = (e) => {
    e.preventDefault();
    fetch('http://localhost:8000/message/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: localStorage.getItem('Authorization'),
      },
      body: JSON.stringify(message),
    })
      .then((res) => {
        console.log(res);
        return res.text();
      })
      .then((res) => {
        console.log(res);
        if (res === 'ok') {
          props.history.push('/');
        } else {
          alert('받는 사람이 존재하지 않습니다.');
        }
      });
  };

  const changeValue = (e) => {
    setMessage({
      ...message,
      [e.target.name]: e.target.value,
    });
  };
  console.log('hello');
  return (
    <div>
      <Message />
      <hr />
      <h1>쪽지 보내기</h1>
      <hr />
      <Form>
        <Form.Group>
          <Form.Label>받는 사람</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter receive"
            name="receiveusername"
            onChange={changeValue}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Content</Form.Label>
          <Form.Control
            type="textarea"
            placeholder="Enter content"
            row={5}
            name="content"
            onChange={changeValue}
          />
        </Form.Group>
        <br />
        <Button variant="dark" type="submit" onClick={sendMessage}>
          보내기
        </Button>
      </Form>
    </div>
  );
};

export default SendMessage;
