import React, { FC, useEffect, useRef, useState } from "react";
import { View, Text, TouchableOpacity, Animated, StyleSheet, StatusBar, FlatList } from "react-native";
import TrainingCard from "../../components/TrainingCard";
import HeaderComponent from "../../navigation/NavigationHeader";

const HomeScreen: FC<{}> = () => {

    return (
        <View style={styles.main}>
            <HeaderComponent text={'Training'} />
            <View style={styles.container}>
            <FlatList
                    data={[1, 2, 3, 6, 5, 4, 4, 5]}
                    renderItem={({ item }) => (<TrainingCard />)}
                    showsVerticalScrollIndicator={false}
                />
                
            </View>
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