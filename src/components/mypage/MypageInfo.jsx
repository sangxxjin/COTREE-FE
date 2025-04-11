import React, { useState } from 'react';
import ActionButton from '../common/ActionButton';
import EditProfileModal from './EditProfileModal';
import useAuthStore from '@/store/useAuthStore';

const MypageInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { userInfo } = useAuthStore();

  return (
    <div className="h-[291px] w-full px-[49px] py-[46px] border border-grey200 rounded-[20px] mt-10 mb-24">
      <div className="flex">
        <div className="rounded-full w-[200px] h-[200px] overflow-hidden">
          <img src="/images/mypage-user.png" alt="유저썸네일" />
        </div>
        <div className="pt-[15px] ml-[55px] flex-1">
          <div className="w-[105.74px] h-[29.18px] rounded-[30px] mb-[15px] bg-[#DAF8E6] flex items-center justify-center text-[14px] font-semibold text-[#1A8245]">
            일반 회원
          </div>
          {/* 헤드헌터와 스타일을 나눠야겠다 */}
          {/* <div className="w-[105.74px] h-[29.18px] rounded-[30px] mb-[26px] bg-[#FFEBE9] flex items-center justify-center text-[14px] font-semibold text-primary400">
            헤드헌터
          </div> */}
          <div className="text-[36px] font-medium">{userInfo?.nickname}</div>
          <div className="text-[20px] font-light text-grey400">{userInfo?.email}</div>
        </div>

        <div className="mt-[80px]">
          <ActionButton
            text="회원정보 수정"
            customeStyle="w-[201px] h-[50px] font-semibold text-primary300 border border-primary300"
            onClick={() => setIsModalOpen(true)}
          />
        </div>
      </div>

      {/* 회원정보 수정 모달 */}
      {isModalOpen && <EditProfileModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default MypageInfo;
