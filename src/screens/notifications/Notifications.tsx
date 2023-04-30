import React, { FC, useEffect, useRef, useState } from "react";
import { View, Text, TouchableOpacity, Animated, StyleSheet, StatusBar, FlatList } from "react-native";
import HeaderComponent from "../../navigation/NavigationHeader";
import Bell from '../../../res/images/bell.svg'
const Notifications: FC<{}> = ({ navigation }) => {

    return (
        <View style={styles.main}>
            <HeaderComponent navigation={navigation} />
            <View style={styles.top}></View>
            <View style={styles.notificationCont}>
                <View style={styles.mainCard}>
                    <Text style={styles.text}>Notifications</Text>
                    <TouchableOpacity onPress={() => navigation?.goBack()}>
                        <Bell />
                        <View style={{ height: 10, width: 10, borderRadius: 10, backgroundColor: '#92C146', position: 'absolute', left: 10 }}></View>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={[1, 2, 3, 6, 5, 4, 4, 5]}
                    renderItem={({ item,index }) => ( <View style={[styles.textView,{backgroundColor: index==3?'#92C146':'transparent'}]}>
                        <View style={{marginTop:8, height: 5, width: 5, borderRadius: 5, backgroundColor: '#92C146',}}></View>
                        <Text style={styles.text1} numberOfLines={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
    
                    </View>)}
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
        backgroundColor: '#E3F7FF',

    },
    text:
    {
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        color: '#ffff'
    },
    text1:
    {
        fontFamily: 'Poppins-Medium',
        fontSize: 12,
        color: '#ffff',
        marginLeft:13
    },
    top:
    {
        height: '35%',
        width: '100%',
        backgroundColor: '#207CC0'
    },
    notificationCont:
    {
        backgroundColor: '#2A89D0',
        width: '75%',
        height: 459,
        alignSelf: 'flex-end',
        right: 20,
        position: 'absolute',
        top: 45
    },
    mainCard:
    {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 31,
        marginTop: 15,
        marginRight: 15,
        justifyContent: 'space-between'
    },
    textView:
    {
        flexDirection: 'row',
        // alignItems: 'center',
        paddingLeft:16,
        paddingTop:10,
        height:52,
        backgroundColor:'#92C146'
    }


});
export default Notifications