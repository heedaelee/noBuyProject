import {useRoute} from '@react-navigation/native';

/**
 * 현재 라우트 이름을 로그로 출력해줍니다
 */
export const useRouteLog = (message?: string) => {
  const route = useRoute();
  console.log(`route : ${route.name}Screen ${message ?? ''}`);
};
