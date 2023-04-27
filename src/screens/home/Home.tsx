import React, { FC, useEffect, useRef, useState } from "react";
import { View, Text, TouchableOpacity, Animated, StyleSheet, StatusBar, FlatList, Dimensions } from "react-native";
import HeaderComponent from "../../navigation/NavigationHeader";
const HomeScreen: FC<{}> = ({navigation}) => {
    return (
        <View style={styles.main}>
            <HeaderComponent  navigation={navigation} />

        </View>
    )


}
const styles = StyleSheet.create({
    main:
    {
        flex: 1,
    },
  

});
export default HomeScreen