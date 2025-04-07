import Badge from '@/common/Badge';
import { UserIcon } from '@heroicons/react/24/solid';
import StackIcon from './StackIcon';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { EyeIcon, HeartIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ item }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/projectJoinDetail/${item.id}`);
  };

  // console.log(item);
  return (
    <>
      <div
        className="w-[300px] p-3 rounded-[30px] bg-white flex flex-col justify-center gap-6 border mb-[50px] cursor-pointer hover:shadow-lg transition-shadow"
        onClick={handleCardClick}
      >
        {/* 상단 => 뱃지, 모집인원  */}
        <div className="w-[250px] h-[44px] mx-auto">
          {' '}
          <div className="w-[250px] h-[44px] flex flex-row justify-between items-center">
            <Badge
              text="모집중"
              className="w-[72px] h-[27px] bg-[#3FC22E]  text-white text-[13px] font-bold"
            />
            <div className="w-[88px] h-[27px] flex flex-row items-center ">
              <UserIcon className="w-[16px]" />
              <div className="text-[14px]">모집인원 : {item.recruitmentCount}</div>
            </div>
          </div>
        </div>

        {/* 중간 */}

        <div className="w-[250px] mx-auto flex flow-row justify-between items-start">
          {/* 왼쪽 */}
          <div className="flex flex-col gap-3">
            {/* 제목 */}
            <div className="text-[20px] w-[265px]">{item.title}</div>
            {/* 날짜 */}
            <div className="w-[265px] text-[13px] flex flex-row gap-2 ">
              <div>
                시작일자 <span className="text-grey300 ">{item.startDate}</span>
              </div>
              {item.endDate && (
                <>
                  <div>-</div>
                  <div>
                    마감일자 <span className="text-grey300 ">{item.endDate}</span>
                  </div>
                </>
              )}
            </div>
            {/* 내용 */}
            <div className="text-[16px] w-[265px] line-clamp-4">{item.description}</div>
            {/* 아이콘 */}
            <div className="w-[269px] flex flex-wrap gap-4">
              {item.techStacksImageUrl.map((item) => (
                <StackIcon key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
        {/* underLine */}
        <div className="w-[250px] border mx-auto"></div>

        {/* 하단 */}
        <div className="w-[250px] h-[44px] mx-auto">
          {' '}
          <div className="w-[250px] flex flex-row justify-between">
            {/* 왼쪽 */}
            <div className="w-[100px] h-[44px] flex flex-row items-center gap-2">
              {/* 뱃지 */}
              <Avatar className="w-[35px] h-[35px]">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>코트리</div>
            </div>
            {/* 오른쪽 */}
            <div className="w-[100px] h-[44px] flex flex-row items-center">
              <div className="flex flex-row items-center gap-3">
                <div className="flex flex-row items-center gap-2 ">
                  <EyeIcon className="w-[20px] text-black " />
                  <div className="text-[15px]">12</div>
                </div>
                <div className="flex flex-row items-center gap-2 ">
                  <HeartIcon className="w-[20px] text-primary400  " />
                  <div className="text-[15px]">12</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
