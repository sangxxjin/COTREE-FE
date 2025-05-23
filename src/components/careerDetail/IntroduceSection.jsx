const IntroduceSection = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className=" w-[1136px] h-[489px] mx-auto mt-[80px] flex flex-col gap-4">
        {/* 사진, 이름 영역 */}
        <div className="h-[217px] flex flex-row gap-7">
          <div className="w-[217px] h-[217px] border rounded-[15px]">
            <img
              src={data.imageUrl !== null ? data.imageUrl : '/images/career/profileDefault.png'}
              alt="강의 카드 이미지"
              className="w-full h-full object-cover rounded-[15px]"
            />
          </div>
          <div className="h-full flex flex-col justify-around">
            {/* 이름, 직업 */}
            <div className="flex flex-col gap-3">
              <div className="text-[36px] font-bold">{data.name}</div>
              <div className="text-[24px] font-[500] flex flex-row gap-2">
                {data &&
                  data.positionNames &&
                  data.positionNames.map((position) => <div key={position}>{position}</div>)}
              </div>
            </div>
            {/* 연찬, 이메일 */}
            <div className="flex flex-col gap-1 text-[16px]">
              <div className="flex flex-row gap-4">
                <div className="w-[46px] text-grey300 ">연차</div>
                <div>{data.years}년차</div>
              </div>
              <div className="flex flex-row gap-4">
                <div className="w-[46px] text-grey300">이메일</div>
                <div>{data.email}</div>
              </div>
            </div>
          </div>
        </div>
        {/* 소개글 영역 */}
        <div className="w-full whitespace-pre-line mt-[20px]">{data.introduction}</div>
      </div>
    </>
  );
};

export default IntroduceSection;
