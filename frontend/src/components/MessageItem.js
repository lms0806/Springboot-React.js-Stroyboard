import React from 'react';

const MessageItem = ({ send, content, receive }) => {
  return (
    <tbody>
      <tr>
        <td>{send}</td>
        <td>{content}</td>
        <td>{receive}</td>
      </tr>
    </tbody>
  );
};

export default MessageItem;
