import React, { FC, useEffect, useRef, useState } from "react";
import { View, Text, Image, StyleSheet } from 'react-native';
import HeaderComponent from '../../navigation/NavigationHeader';
import Calendar from '../../../res/images/calendar.svg';
import Clock from '../../../res/images/clock.svg';
import Cloud from '../../../res/images/cloud.svg';
import User from '../../../res/images/user.svg'
import Ball from '../../../res/images/ball.svg'
import PinkMountain from '../../../res/images/pinkMountain.svg';

const Tasks: FC<{}> = () => {

    return (
        <View style={styles.main}>
            <HeaderComponent text={'My Task'} />
            <View style={styles.container}>
                <Text style={styles.text}>Recommended Appointments</Text>
                <View style={styles.appoinmentCard}>
                    <View style={styles.top} >
                        <View style={styles.dot}></View>
                        <Text style={styles.text1}>Confirmed</Text>
                    </View>
                    <View style={styles.bottom}>
                        <Image source={require('../../../res/images/rec.png')} style={styles.image} />
                        <View style={{ marginLeft: 13 }}>
                            <Text style={styles.name}>Dr. Jhon Doe</Text>
                            <Text style={styles.des}>Therapist</Text>
                            <View style={[styles.bottom, { marginTop: 5 }]} >
                                <View style={styles.leftView}>
                                    <Calendar />
                                    <Text style={styles.timeText}>14 apr 2022</Text>
                                </View>
                                <View style={[styles.leftView, { marginLeft: 20 }]}>
                                    <Clock />
                                    <Text style={styles.timeText}>20:00 EST</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <Text style={styles.view}>View More</Text>
                <Text style={[styles.text, { marginTop: 10 }]}>Recommended Therapies</Text>
                <View style={styles.therapyCard}>
                    <View style={styles.textView}>
                        <View>
                            <Text style={styles.name}>Psychocotherapy</Text>
                            <View style={[styles.leftView, { marginTop: 5 }]}>
                                <User />
                                <Text style={styles.timeText}>Indivitual Sessions</Text>
                            </View>
                            <View style={[styles.leftView, { marginTop: 5 }]}>
                                <Ball />
                                <Text style={styles.timeText}>Psychocologist</Text>
                            </View>

                            <View style={[styles.leftView, { marginTop: 5 }]}>
                                <Calendar />
                                <Text style={styles.timeText}>14 apr 2022</Text>
                            </View>
                            <View style={[styles.leftView, { marginTop: 5 }]}>
                                <Clock />
                                <Text style={styles.timeText}>45 mins</Text>
                            </View>
                        </View>
                        <View style={{ marginLeft: -20 }}>
                            <Cloud />
                        </View>
                    </View>
                    <Text style={styles.bttomText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus.</Text>
                </View>
                <Text style={styles.view}>View More</Text>

                <Text style={[styles.text, { marginTop: 10 }]}>Questionnaires</Text>
                <View style={styles.questionnaireCard}>
                <Text style={[styles.text, { marginTop: 10 }]}>{"What do you think about\n loreum ersi?"}</Text>
                <PinkMountain />

                </View>

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
        paddingHorizontal: 36,
    },
    text:
    {
        fontFamily: 'Poppins-Bold',
        fontSize: 11,
        marginTop: 32,
        color: ' #333333'
    },
    appoinmentCard:
    {
        width: '100%',
        height: 120,
        backgroundColor: "#fff",
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 5,
        borderRadius: 10,
        marginTop: 8,
        paddingLeft: 20,
        paddingTop: 11,
        paddingRight: 10
    },
    image:
    {
        height: 70,
        width: 70,
        borderRadius: 97
    },
    dot:
    {
        height: 6,
        width: 6,
        borderRadius: 6,
        backgroundColor: '#92C146'
    },
    top:
    {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-end'
    },
    text1:
    {
        fontFamily: 'Poppins-Medium',
        fontSize: 7,
        color: ' #333333',
        marginLeft: 5
    },
    bottom:
    {
        flexDirection: 'row',
        alignItems: 'center'

    },
    name:
    {
        fontFamily: 'Poppins-Bold',
        fontSize: 15,
        color: ' #333333',
    },
    des:
    {
        fontFamily: 'Poppins-MediumItalic',
        fontSize: 9,
        color: ' #333333',
    },
    leftView:
    {
        flexDirection: "row",
        alignItems: 'center',

    },
    timeText:
    {
        fontFamily: 'Poppins-Regular',
        fontSize: 9,
        lineHeight: 13,
        marginLeft: 5,
        color: '#333333',
    },
    view:
    {
        fontFamily: 'Poppins-Medium',
        fontSize: 9,
        lineHeight: 13,
        marginTop: 19,
        alignSelf: 'flex-end',
        color: '#808080'
    },
    therapyCard:
    {
        width: '100%',
        height: 204,
        backgroundColor: "#fff",
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 5,
        borderRadius: 10,
        marginTop: 8,
        paddingLeft: 26,
        paddingTop: 20,
    },
    textView:
    {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    bttomText:
    {
        fontFamily: 'Poppins-medium',
        fontSize: 11,
        marginLeft: 5,
        color: '#333333',
        marginRight: 25,
        marginTop:10
    },
    questionnaireCard:
    {
        width: '100%',
        height: 75,
        backgroundColor: "#fff",
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 5,
        borderRadius: 10,
        marginTop: 8,
        paddingLeft: 27,
        paddingRight:16,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },


});
export default Tasks