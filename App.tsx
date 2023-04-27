import React, { useRef } from 'react';
import 'react-native-gesture-handler'
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import RootNavigator from './src/navigation/index';
// const MyStatusBar = ({ backgroundColor, ...props }: any) => (
//   <View style={[styles.statusBar, { backgroundColor }]}>
//     <SafeAreaView>
//       <StatusBar translucent backgroundColor={backgroundColor} {...props} />
//     </SafeAreaView>
//   </View>
// );

const App = () => {
  return (
      <View style={styles.container}>
        {/* <MyStatusBar backgroundColor="transparent" barStyle="default" /> */}
        {/* <SafeAreaView style={styles.bottomNotch} > */}
          <RootNavigator />
        {/* </SafeAreaView> */}
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    // height: STATUSBAR_HEIGHT,
  },
  bottomNotch: {
    flex: 1,
    backgroundColor: 'white',
  }

});

export default App;
