import React, { useEffect, useState } from 'react';
import { Pagination, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import MessageItem from '../../components/MessageItem';
import Message from './Message';

const SendMessages = () => {
  const { user } = useSelector((store) => store);
  const [messages, setMessages] = useState([]);
  const [last, setLast] = useState('');
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetch(
      'http://localhost:8000/message/' +
        user.username +
        '/Receiveusername?page=' +
        page,
      {
        method: 'GET',
      },
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        console.log('hi');
        console.log(res.content);
        console.log('hi');
        console.log(res.content);
        setMessages(res.content);
        setLast(res.last);
      });
  }, [page]);

  const prev = () => {
    setPage(page - 1);
  };

  const next = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <Message />
      <hr />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>보낸 사람</th>
            <th>내용</th>
            <th>받는 사람</th>
          </tr>
        </thead>
        {messages.map((message) => (
          <MessageItem
            send={message.receiveusername}
            content={message.content}
            receive={message.sendusername}
          />
        ))}
      </Table>
      <br />
      <div className="d-flex justify-content-center">
        <Pagination>
          {page === 0 ? (
            <Pagination.Item onClick={prev} disabled>
              Prev
            </Pagination.Item>
          ) : (
            <Pagination.Item onClick={prev}>Prev</Pagination.Item>
          )}
          &nbsp;
          {page}
          &nbsp;
          {last === true ? (
            <Pagination.Item onClick={next} disabled>
              Next
            </Pagination.Item>
          ) : (
            <Pagination.Item onClick={next}>Next</Pagination.Item>
          )}
        </Pagination>
      </div>
    </div>
  );
};

export default SendMessages;
