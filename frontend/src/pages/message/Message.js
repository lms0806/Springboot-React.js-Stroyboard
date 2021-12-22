import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Message = () => {
  return (
    <div>
      <Link to="/message/sendmessage">
        <Button variant="dark">쪽지 보내기</Button>
      </Link>
      <Link to="/message/receivemessages">
        <Button variant="dark">받은 쪽지함</Button>
      </Link>
      <Link to="/message/sendmessages">
        <Button variant="dark">보낸 쪽지함</Button>
      </Link>
    </div>
  );
};

export default Message;
