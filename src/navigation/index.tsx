import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeNavigator from './TabNavigator';
export interface RootNavigatorProps {
  enableDrawer: boolean;
}

const RootNavigator: FC<RootNavigatorProps> = ({enableDrawer}) => {
  const dispatch = useDispatch()

  return (
      <NavigationContainer>
        <HomeNavigator/>
      </NavigationContainer>
  );
};

export default RootNavigator;