import { useState } from 'react'

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Hoho', age: 20 },
  { name: 'Mimi', age: 20 },
]

const UserSearch: React.FC = () => {
  const [name, setName] = useState('')
  const [user, setUser] = useState<{ name: string; age: number } | undefined>()

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name
    })

    setUser(foundUser)
  }

  return (
    <div>
      <h3>UserSearch</h3>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Add Guest</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  )
}

export default UserSearch
