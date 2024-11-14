import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { patchItem } from '../api/todo'
import checkbox from '../../../public/ic/checkbox.svg'
import checkedbox from '../../../public/ic/checkedbox.svg'

interface TodoItemProps {
  id: number
  name: string
  isCompleted: boolean
  onToggle: (id: number, isCompleted: boolean) => void
}

const commonStyle: string =
  'p-2.5 px-3 flex items-center gap-4 rounded-3xl border-2 border-solid stroke-slate-900'
const doneStyle: string = 'bg-purple-100 line-through'
const todoStyle: string = 'bg-white '

export default function TodoItem({
  id,
  name,
  isCompleted,
  onToggle,
}: TodoItemProps) {
  const handleToggle = async (e: React.MouseEvent) => {
    e.preventDefault()

    try {
      await onToggle(id, !isCompleted)
    } catch (error) {
      console.error('Error toggling todo item:', error)
    }
  }

  return (
    <Link href={`/items/${id}`}>
      <div
        className={`${isCompleted ? doneStyle : todoStyle} ${commonStyle}`}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={isCompleted ? checkedbox : checkbox}
          alt="check box"
          onClick={handleToggle}
        />
        <div className="font-NanumSquareR">{name}</div>
      </div>
    </Link>
  )
}
