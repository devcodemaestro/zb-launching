import { useRouter } from "next/navigation";

// 사용자 정의 훅
const useGoBack = () => {
  const router = useRouter();

  // 뒤로 가기 기능을 훅으로 정의
  const goBack = () => {
    router.back();
  };

  return goBack;
};

export default useGoBack;
