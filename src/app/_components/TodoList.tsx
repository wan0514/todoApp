import React from 'react'
import Image from 'next/image'
import TodoItem from './TodoItem'
import done from '../../../public/img/done.svg'
import todo from '../../../public/img/todo.svg'
import todoEmpty from '../../../public/img/Type=Todo.svg'
import doneEmpty from '../../../public/img/Type=Done.svg'

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

const getEmptyStateProps = (isCompleted: boolean) => ({
  emptyImageSrc: isCompleted ? doneEmpty : todoEmpty,
  message: isCompleted
    ? '아직 다 한 일이 없어요.\n해야 할 일을 체크해보세요!'
    : '할 일이 없어요.\nTODO를 새롭게 추가해주세요!',
})

const EmptyState = ({ isCompleted }: { isCompleted: boolean }) => {
  const { emptyImageSrc, message } = getEmptyStateProps(isCompleted)

  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <Image
        className="pt-12"
        src={emptyImageSrc}
        alt="빈 상태 이미지"
        width={240}
        height={240}
      />
      <div className="text-slate-400 text-center">
        <p className="whitespace-pre-line leading-tight">{message}</p>
      </div>
    </div>
  )
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
        {todos.length == 0 ? (
          <EmptyState isCompleted={isCompleted} />
        ) : (
          todos.map((todo) => (
            <TodoItem key={todo.id} {...todo} onToggle={onToggle} />
          ))
        )}
      </div>
    </div>
  )
}
