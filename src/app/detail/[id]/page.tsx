import React from 'react';

type Props = {
  params: {
    id: string;
  };
};

export default async function Detail({ params }: Props) {
  const { id } = await params;
  return (
    <div className="">
      <main className="">
        디테일페이지 {id}
        <div className="font-NanumSquareB">
          NanumSquareB 폰트가 적용된 텍스트입니다.
        </div>
        <div className="font-NanumSquareR">
          NanumSquareR 폰트가 적용된 제목입니다.
        </div>
      </main>
    </div>
  );
}
