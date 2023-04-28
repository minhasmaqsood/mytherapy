import React, { FC, useEffect, useRef, useState } from "react";
import { View, Image, Text, TouchableOpacity, Animated, StyleSheet, StatusBar, FlatList, Dimensions } from "react-native";
import HeaderComponent from "../../navigation/NavigationHeader";
import Mcs from '../../../res/images/mcs.svg'
import Blue from '../../../res/images/blue.svg'
import Back from '../../../res/images/back.svg'
const Bluetooth: FC<{}> = ({ navigation }) => {
useEffect(()=>{
setTimeout(()=>{
    navigation?.navigate('BluetoothDevices')
},2000)
},[])
    return (
        <View style={styles.main}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation?.goBack()}>
                    <Back />
                </TouchableOpacity>
                <Text style={{ fontFamily: 'Poppins-Bold', color: '#fff', fontSize: 14, lineHeight: 21 }}>{'Bluetooth'}</Text>
                <View></View>
            </View>
            <Text style={styles.text} >Scanning...</Text>
            <Text style={styles.text1} >Make sure the device is within 10 meters and lorem ipsum dolor sit amet</Text>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 25 }}>
                <Blue />
            </View>
            <View style={styles.logo}>
                <Text style={[styles.cardText, { marginRight: 10 }]} >Powered by</Text>
                <Mcs height={30} width={35} />
            </View>

        </View>
    )


}
const styles = StyleSheet.create({
    main:
    {
        flex: 1,
        backgroundColor: "#217DC1"
    },
    header:
    {
        width: '100%',
        backgroundColor: '#217DC1',
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingTop: 36
    },
    text:
    {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 22,
        color: '#ffff',
        alignSelf: 'center',
        marginTop: 25
    },
    text1:
    {
        fontFamily: 'Poppins-Regular',
        fontSize: 10,
        color: '#ffff',
        textAlign: 'center',
        marginHorizontal: 53,
        marginTop: 15,
    },
    conectedText:
    {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 14,
        color: '#333333',
        alignSelf: 'center',
        marginTop: '63%'

    },
    image:
    {
        height: 50,
        width: 50,
        borderRadius: 50,
        resizeMode: 'contain'
    },
    cardText:
    {
        fontFamily: 'Poppins-Regular',
        fontSize: 8,
        color: '#333333',
    },
    card:
    {
        alignItems: 'center',
        marginLeft: 45,
        marginTop: 8
    },
    logo:
    {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 18,
        alignSelf: 'center',
        position:'absolute',
        top:'90%'
    }


});
export default Bluetooth