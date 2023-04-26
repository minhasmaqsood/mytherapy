import React, { FC, useEffect, useRef, useState } from "react";
import { View, Text, TouchableOpacity, Animated, StyleSheet, StatusBar, Image } from "react-native";

const TrainingCard: FC<{}> = () => {
    return (
        <View>
            <View style={styles.ActivityCard}>
                <Text style={styles.text} >98%</Text>
                <Text style={styles.text1} >Blood Oxygen Saturation (SpO2)</Text>
            </View>
            <View style={styles.bottom}>
                <View style={[styles.bottomcard,{marginLeft:5}]}>
                    <Text style={styles.text} >35</Text>
                    <Text style={styles.text1} >Body Temperature</Text>
                </View>
                <View style={[styles.bottomcard,{marginRight:5}]}>
                    <Text style={styles.text} >98</Text>
                    <Text style={styles.text1} >NTC Temp</Text>
                </View>
            </View>
        </View>
    )


}
const styles = StyleSheet.create({
    ActivityCard:
    {
        marginTop: 20,
        height: 97,
        width: '97%',
        backgroundColor: '#fff',
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 5,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight:5,
        marginLeft:5
    },
    text:
    {
        fontFamily: 'Poppins-Medium',
        color: '#217DC1',
        fontSize: 33,
        lineHeight: 55,
    },
    text1:
    {
        fontFamily: 'Poppins-Regular',
        fontSize: 8,
        lineHeight: 12,
        color: '#4D4D4D'
    },
    bottom:
    {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center'
    },
    bottomcard:
    {
        marginTop: 20,
        height: 97,
        width: '46%',
        backgroundColor: '#fff',
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 5,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
export default TrainingCard