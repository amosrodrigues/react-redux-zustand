import { FormEvent, useState } from 'react'

export function AddTodo() {
  const [newTodo, setNovoTodo] = useState('')

  function handleNewTodo(e: FormEvent) {
    e.preventDefault()

    console.log(newTodo)
  }

  return (
    <form onSubmit={handleNewTodo}>
      <input
        type="text"
        placeholder="Novo to-do"
        value={newTodo}
        onChange={(e) => setNovoTodo(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  )
}
