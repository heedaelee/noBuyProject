import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {Colors} from './style-config';

/**
 * 공통 헤더 스타일링
 */
export const headerConfig: NativeStackNavigationOptions = {
  headerTitleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerTitle: '',
  headerTitleAlign: 'center',
  headerShadowVisible: false,
  headerBackVisible: false,
  headerStyle: {
    backgroundColor: Colors.gray90,
  },
};

export default {headerConfig: headerConfig};
