'use client'
import { useState, useEffect, Suspense } from 'react'
import TodoList from './_components/TodoList'
import AddTodoBar from './_components/AddTodoBar'
import { getItems } from './api/todo'

const Metadata = {
  title: 'Home',
}

interface Todo {
  id: number
  tenantId: string
  name: string
  memo: string
  imageUrl: string
  isCompleted: boolean
}

type Todos = Todo[]

export default function Home() {
  const [todos, setTodos] = useState<Todos>([])

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const fetchedTodos = await getItems()
        setTodos(fetchedTodos)
      } catch (error) {
        console.error('Error fetching todos:', error)
      }
    }
    fetchTodos()
  }, [])

  const completedTodos = todos.filter((todo) => todo.isCompleted)
  const notCompletedTodos = todos.filter((todo) => !todo.isCompleted)

  return (
    <div className="flex flex-col gap-10 font-NanumSquareB">
      <AddTodoBar />
      <div className="flex gap-4">
        <TodoList todos={notCompletedTodos} isCompleted={false} />
        <TodoList todos={completedTodos} isCompleted={true} />
      </div>
    </div>
  )
}
