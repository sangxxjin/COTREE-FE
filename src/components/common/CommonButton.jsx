import { Button } from '@/components/ui/button';

const CommonButton = ({ text, width, height }) => {
  return (
    <Button
      className="bg-primary300 text-white text-[16px] font-[700] hover:bg-primary300 hover:text-white hover:border-none"
      variant="outline"
      style={{
        width: width || '120px', // 기본값 설정
        height: height || '40px',
      }}
    >
      {text || 'Button'}
    </Button>
  );
};

export default CommonButton;
