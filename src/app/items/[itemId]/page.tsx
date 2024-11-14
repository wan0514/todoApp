import React from 'react'
import Image from 'next/image'
import defaultImage from '../../../../public/ic/defaultImg.svg'
import checkBox from '../../../../public/ic/checkbox.svg'
import grayPlus from '../../../../public/ic/plusGray.svg'
import check from '../../../../public/ic/check.svg'
import xIcon from '../../../../public/ic/X.svg'
// type Props = {
//   params: {
//     itemId: string
//   }
// }

export default async function Detail() {
  // { params }: Props
  // const { itemId } = params

  // const inputValue = itemId
  return (
    <div className="flex flex-col px-[102px] items-center gap-6 w-full h-screen font-NanumSquareB bg-white pt-6">
      <div className="flex items-center justify-center rounded-3xl border-2 border-solid stroke-slate-900 w-full px-6">
        <Image src={checkBox} alt="체크여부" />
        <input
          className="w-auto max-w-full min-w-0 underline rounded-3xl outline-none bg-white text-slate-900 placeholder-slate-500 pl-4 py-4 "
          type="text"
          // value={inputValue}
          // onChange={(e) => setInpuValue(e.target.value)}
        ></input>
      </div>
      <div className="flex justify-center w-full gap-6 h-[311px]">
        <div className="flex basis-2/5  relative items-center justify-center border-2 border-dashed border-slate-300 bg-slate-50 w-full h-full rounded-3xl">
          <Image src={defaultImage} alt="이미지" />
          <button className="flex justify-center items-center absolute bottom-4 right-4 w-16 h-16 rounded-full bg-slate-200">
            <Image src={grayPlus} alt="이미지" width={24} height={24} />
          </button>
        </div>
        <div className="flex basis-3/5 flex-col items-center gap-4 w-full bg-meomo-pad rounded-3xl">
          <p className="mt-5 text-amber800">Memo</p>
          <textarea className="appearance-none border-0 outline-none bg-transparent p-0 m-0 w-full px-4 pb-6 h-full text-center resize-none overflow-auto font-NanumSquareR"></textarea>
        </div>
      </div>
      <div className="flex justify-end gap-4 w-full text-base h-14">
        <button className="appearance-none focus:outline-none flex gap-1 items-center justify-center rounded-3xl h-100% px-10 py-4 border-2 border-slate-900 border-solid bg-slate-200">
          <Image src={check} alt="이미지" />
          <div>수정완료</div>
        </button>
        <button className="appearance-none focus:outline-none flex gap-1 items-center justify-center rounded-3xl h-100% px-10 py-4 border-2 border-slate-900 border-solid bg-rose500">
          <Image src={xIcon} alt="이미지" />
          <div className="text-white">삭제하기</div>
        </button>
      </div>
    </div>
  )
}