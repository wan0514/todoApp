'use client'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import { getItems, postItems } from '../api/todo'
import plusIcon from '../../../public/ic/plusBlack.svg'

export default function AddTodoBar() {
  const [inputValue, setInputValue] = useState<string>('')
  const isValid = inputValue.length > 0

  const postTodo = (): void => {
    postItems(inputValue)
    alert(`todo ${inputValue} 추가 완료`)
    setInputValue('')
  }

  return (
    <div className="flex items-center gap-4">
      <form
        onSubmit={postTodo}
        className="rounded-3xl w-full border-2 border-solid bg-slate-100 stroke-slate-900 shadow-custom-3px"
      >
        <input
          className="w-auto max-w-full rounded-3xl outline-none bg-slate-100 text-slate-900 placeholder-slate-500  px-6 py-4 font-NanumSquareR whitespace-nowrap"
          type="text"
          placeholder="할 일을 입력해주세요"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
      </form>
      <div
        className={`${
          isValid ? 'bg-violet600' : ' bg-slate-200'
        } rounded-3xl border-2 border-solid stroke-slate-900 shadow-custom-3px `}
      >
        <button
          disabled={!isValid}
          className={`appearance-none focus:outline-none flex items-center justify-center rounded-3xl h-100% px-10 py-4 border-0 bg-transparent`}
          onClick={postTodo}
        >
          <Image src={plusIcon} alt="header logo" />
          <div className="font-NanumSquareB h-4 whitespace-nowrap">
            추가하기
          </div>
        </button>
      </div>
    </div>
  )
}
