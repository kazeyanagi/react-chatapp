import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MessageView = (props) => {
  const {messages, username} = props
  return (
    <>
      {messages.map((item, idx) => (
        <div
          key={idx}
          className={username === item.user
              ? "message-item"
              : "message-item other"
            }
        >
          <p className="message">
            {item.body}
          </p>
          <p>{item.user}</p>
        </div>
      ))}
    </>
  )
}

export const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const { username } = useParams()

  const onChange = (e) => {
    const value = e.target.value;
    setMessage(value);
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setMessages([...messages, {
      body: message,
      user: username
    }])
    axios.post('http://localhost:5000/message', {
      sendMessage: message,
      sendUser: username
    })
    setMessage('')
  }

  useEffect(() => {
    axios.get('http://localhost:5000/message')
      .then(res => {
        setMessages(res.data)
      })
  }, [])

  return (
    <div className="page-container">
      <header className="page-header">
        <h1 className="page-title">ChatApp</h1>
      </header>
      <main className="page-main">
        <MessageView
          messages={messages}
          username={username}
        />
      </main>
      <footer className="page-footer">
        <form className="page-interface" onSubmit={onSubmit}>
          <input type="text" value={message} onChange={onChange}/>
          <input type="submit"/>
        </form>
      </footer>
    </div>
  );
}