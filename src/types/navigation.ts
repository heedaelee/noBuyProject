import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {NavigatorScreenParams} from '@react-navigation/native';

/**
 * 전체 Stack에 포함된 스크린 목록과  파라미터를 정의하여야 합니다.
 * Router 설정시, RootStack 내에서 BottomTabParamList와
 * BotomTabParamList에 왠만한건 다 들어가는데 혹시 기타 추가를 위해 union으로
 * 객체를 설정했음.
 * 스택 위계가, RootStack > BottomTabNavigator이고,,
 * 사실상 BottomTabParamList을 유니온으로 설정하지 않아도 되는데,
 * 그때 그 개발자가 RootStackParamList만 가져오면
 * 모든 스크린을 자동 완성 해주기 위에 편의상 유니온을 결합함. 즉 BottomTabParamList 를 삭제해도
 * 타입 에러는 안뜸
 */
export type RootStackParamList = BottomTabParamList & {
  BottomTabNavigator: undefined;
};

export type BottomTabParamList = {
  // HomeNavigator: NavigatorScreenParams<HomeTabParamList>;
  HomeScreen: NavigatorScreenParams<HomeTabParamList>;
};
/**
 * ChannelNavigator Tab에 포함된 스크린 목록과 해당 스크린에서 사용하는 파라미터를 정의하여야 합니다.
 */
export type HomeTabParamList = {HomeScreen: undefined};

//BottomTabScreenProps 는 기본 api이다
export type HomeTabScreenProps<T extends keyof HomeTabParamList> =
  BottomTabScreenProps<HomeTabParamList, T>;
