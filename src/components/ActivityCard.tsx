import React, { FC, useEffect, useRef, useState } from "react";
import { View, Text, TouchableOpacity, Animated, StyleSheet, StatusBar, Image } from "react-native";
import Calendar from '../../res/images/calendar.svg'
import Clock from '../../res/images/clock.svg'
import Cycle from '../../res/images/cycle.svg'
import Mode from '../../res/images/mode.svg'
import Time from '../../res/images/time.svg'
const ActivityCard: FC<{}> = ({status}:any) => {
    return (
        <View style={[styles.ActivityCard,{height:status=='completed'?123:69}]}>
            <View style={styles.imageView}>
                <Cycle/>
            </View>
            <View>
                <Text style={styles.text}>Cycling</Text>
                <View style={styles.bottom} >
                    <View style={styles.leftView}>
                        <Time/>
                    <Text style={styles.text1}>2 hours</Text>
                    </View>
                    <View style={[styles.leftView,{marginLeft:20}]}>
                        <Mode/>
                    <Text style={styles.text1}>Moderate</Text>
                    </View>
                </View>
                {status=='completed'?
                <>
                 <View style={styles.bottom} >
                 <View style={styles.leftView}>
                    <Calendar/>
                 <Text style={styles.text1}>2 hours</Text>
                 </View>
                 <View style={[styles.leftView,{marginLeft:20}]}>
                    <Clock/>
                 <Text style={styles.text1}>Moderate</Text>
                 </View>
             </View>
             <Text style={[styles.des,{marginTop:5}]} numberOfLines={2}>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit nunc.</Text>
             </>
                :null}
            </View>
        </View>
    )


}
const styles = StyleSheet.create({
    ActivityCard:
    {
        marginTop: 20,
        height: 69,
        width: '100%',
        backgroundColor: '#fff',
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 5,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    imageView:
    {
        width: 70,
        backgroundColor: "#217DC1",
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    image:
    {
        height: 33,
        width: 38,
        resizeMode: 'contain'
    },
    text:
    {
        fontFamily: 'Poppins-Medium',
        fontSize: 14,
        lineHeight: 21,
        marginLeft: 15,
    },
    bottom:
    {
        flexDirection: "row",
        alignItems: 'center',
        marginLeft: 15,
        marginTop:5
    },
    leftView:
    {
        flexDirection: "row",
        alignItems: 'center',

    },
    timeImage:
    {
        height: 13,
        width: 12,
        marginRight:5,
        resizeMode:'contain'
    },
    text1:
    {
        fontFamily: 'Poppins-Regular',
        fontSize: 8,
        lineHeight: 13,
        marginLeft:5
    },
    des:
    {
        fontFamily: 'Poppins-Regular',
        fontSize: 7,
        lineHeight: 12,
        marginLeft:15,
        marginRight:170,
    }
});
export default ActivityCard