import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './TabBar';

export interface RootNavigatorProps {
  enableDrawer: boolean;
}

const RootNavigator: FC<RootNavigatorProps> = () => {
  return (
    <>
      <NavigationContainer >
        <AppNavigator />
      </NavigationContainer>
    </>
  );
};

export default RootNavigator;
