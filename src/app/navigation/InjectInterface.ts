import {
  RouteProp,
  ParamListBase,
  NavigationProp,
} from '@react-navigation/native';

export interface Props {
  route: RouteProp<ParamListBase>;
  navigation: NavigationProp<ParamListBase, string, any, any>;
  navigateWithReset: (route: string, params?: any) => void;
  setShowToast: any;
  setHiddenLoading: any;
  setShowLoading: any;
}
