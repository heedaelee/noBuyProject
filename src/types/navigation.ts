import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {NavigatorScreenParams} from '@react-navigation/native';

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
