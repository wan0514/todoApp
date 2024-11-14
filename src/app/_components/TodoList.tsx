import React from 'react'
import Image from 'next/image'
import TodoItem from './TodoItem'
import done from '../../../public/img/done.svg'
import todo from '../../../public/img/todo.svg'

interface Todo {
  id: number
  name: string
  isCompleted: boolean
}

interface TodoListProps {
  todos: Todo[]
  isCompleted: boolean
  onToggle: (id: number, isCompleted: boolean) => void
}

export default function TodoList({
  todos,
  isCompleted,
  onToggle,
}: TodoListProps) {
  return (
    <div className="flex flex-col gap-4 w-full">
      <Image src={isCompleted ? done : todo} alt={'이미지'} />
      <div className="flex flex-col gap-4">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            isCompleted={todo.isCompleted}
            name={todo.name}
            onToggle={onToggle}
          />
        ))}
      </div>
    </div>
  )
}
