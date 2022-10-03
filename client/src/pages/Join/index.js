import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Join = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const onChange = (e) => {
    setUsername(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    navigate(`/chat/${username}`)
  }
  return (
    <div className="page-container">
      <header className="page-header">
        <h1 className="page-title">ChatApp</h1>
      </header>
      <main className="page-main">
        <div class="card">
          <header>
            <p>JOIN</p>
            <p>nameを入力</p>
          </header>
          <form className="page-interface" onSubmit={onSubmit}>
            <input type="text" value={username} onChange={onChange}/>
            <input type="submit"/>
          </form>
        </div>
      </main>
    </div>
  )
}