import React, { FC, useEffect, useRef, useState } from "react";
import { View, Text, TouchableOpacity, Animated, StyleSheet, StatusBar, FlatList } from "react-native";
import TrainingCard from "../../components/TrainingCard";
import HeaderComponent from "../../navigation/NavigationHeader";

const HomeScreen: FC<{}> = () => {

    return (
        <View style={styles.main}>
            <HeaderComponent text={'Summary'} />
         
        </View>
    )


}
const styles = StyleSheet.create({
    main:
    {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#E3F7FF',
        paddingHorizontal: 25,
    },
    text:
    {
        fontFamily: 'Poppins-Medium',
        fontSize: 9,
        marginTop: 29,
        lineHeight: 14
    },



});
export default HomeScreen