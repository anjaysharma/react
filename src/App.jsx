import React from 'react'

function App() {
  const name = React.useRef()
  const email = React.useRef()
  const password = React.useRef()
  const phone = React.useRef()
  
  console.log('render')

  return (
    <div>
      <h1>Forms</h1>

      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          ref={name}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          ref={email}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          ref={password}
        />

        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          ref={phone}
        />

        <button
          type="button"
          onClick={() => {
            console.log(name.current.value)
            console.log(email.current.value)
            console.log(password.current.value)
            console.log(phone.current.value)
          }}
        >
          Submit
        </button>

      </form>
    </div>
  )
}

export default App