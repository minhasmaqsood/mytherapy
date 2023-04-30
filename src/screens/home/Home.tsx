import React, { FC, useEffect, useRef, useState } from "react";
import { View, Text, TouchableOpacity, Animated, StyleSheet, StatusBar, FlatList, Dimensions } from "react-native";
import HeaderComponent from "../../navigation/NavigationHeader";
import Cloud from '../../../res/images/cloud.svg';

const HomeScreen: FC<{}> = ({ navigation }) => {
    return (
        <View style={styles.main}>
            <HeaderComponent navigation={navigation} />
            <View style={styles.top}>
                <Text style={styles.text}>What do you need today?</Text>
                <View style={{ paddingHorizontal: 36 }}>
                    <View style={styles.card}>
                        <View>
                            <Text style={styles.text1}>Emergency</Text>
                            <Text style={[styles.text1,{marginTop:0}]}>Plan</Text>
                        </View>
                        <Cloud />
                    </View>
                    <View style={styles.card}>
                        <View>
                            <Text style={styles.text1}>Treatment</Text>
                            <Text style={[styles.text1,{marginTop:34}]}>Plan</Text>
                        </View>
                        <Cloud />
                    </View>
                </View>
            </View>
        </View>
    )


}
const styles = StyleSheet.create({
    main:
    {
        flex: 1,
        backgroundColor: '#E3F7FF'
    },
    top:
    {
        height: '38%',
        width: '100%',
        backgroundColor: "#217DC1"
    },
    text:
    {
        fontFamily: 'Poppins-Bold',
        fontSize: 24,
        color: '#ffff',
        alignSelf: 'center',
        marginTop: 25,
        marginHorizontal: 85,
    },
    text1:
    {
        fontFamily: 'Poppins-Medium',
        fontSize: 20,
        marginTop: 5,
    },
    card:
    {
        width: '100%',
        height: 206,
        backgroundColor: '#fff',
        marginTop: 45,
        borderRadius: 10,
        flexDirection: 'row',
        paddingLeft: 31,
        paddingTop: 20,
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 5,
    }

});
export default HomeScreen