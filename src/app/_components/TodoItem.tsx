import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import checkbox from '../../../public/ic/checkbox.svg'
import checkedbox from '../../../public/ic/checkedbox.svg'

interface TodoItemProps {
  id: number
  name: string
  isCompleted: boolean
}

const commonStyle: string =
  'p-2.5 px-3 flex items-center gap-4 rounded-3xl border-2 border-solid stroke-slate-900'
const doneStyle: string = 'bg-purple-100 line-through'
const todoStyle: string = 'bg-white '

export default function TodoItem({ id, name, isCompleted }: TodoItemProps) {
  return (
    <Link href={`/items/${id}`}>
      <div className={`${isCompleted ? doneStyle : todoStyle} ${commonStyle}`}>
        <Image src={isCompleted ? checkedbox : checkbox} alt="check box" />
        <div className="font-NanumSquareR">{name}</div>
      </div>
    </Link>
  )
}
