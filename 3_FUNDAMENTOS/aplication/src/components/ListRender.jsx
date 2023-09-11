import { useState } from "react"

const ListRender = () => {
    const [list] = useState(["Guilherme", "João", "Josias", "Mariana"])

    const [users, setUsers] = useState([
        {id: 1, name: "Guilherme", age: 21},
        {id: 2, name: "João", age: 43},
        {id: 3, name: "Josias", age: 75},
    ])

    const delteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4)

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }
  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name} - {user.age}</li>
            ))}
        </ul>
        <button onClick={delteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender