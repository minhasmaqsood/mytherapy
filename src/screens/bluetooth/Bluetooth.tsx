import React, { FC, useEffect, useRef, useState } from "react";
import { View, Image, Text, TouchableOpacity, Animated, StyleSheet, StatusBar, FlatList, Dimensions } from "react-native";
import HeaderComponent from "../../navigation/NavigationHeader";
import Mcs from '../../../res/images/mcs.svg'
import Slogo from '../../../res/images/slogo.svg'
import Blue from '../../../res/images/blue.svg'
const Bluetooth: FC<{}> = ({ navigation }) => {
    return (
        <View style={styles.main}>
            <HeaderComponent navigation={navigation} text={'Bluetooth'} />
            <View style={styles.top}>
                <Text style={styles.text} >Scan Now</Text>
                <Text style={styles.text1} >Make sure the device is within 10 meters and lorem ipsum dolor sit amet</Text>

            </View>
            <TouchableOpacity onPress={()=>{navigation?.navigate('Scan')}} style={{position:'absolute',top:'35%',alignSelf:'center'}}>
            <Blue />
            </TouchableOpacity>
           
            <Text style={styles.conectedText} >Recently Connected</Text>
            <View>
                <FlatList
                    data={[1, 2, 3,]}
                    horizontal={true}
                    renderItem={({ item, index }) => (<View style={styles.card}>
                <Mcs height={30} width={30} />

                        <Text style={styles.cardText} >Dr. Yolanda Joe</Text>
                    </View>)}
                    showsVerticalScrollIndicator={false}
                />
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
        backgroundColor:'#E3F7FF'
    },
    top:
    {
        height: '38%',
        width: '100%',
        backgroundColor: "#217DC1"
    },
    text:
    {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 22,
        color: '#ffff',
        alignSelf: 'center',
        marginTop:25
    },
    text1:
    {
        fontFamily: 'Poppins-Regular',
        fontSize: 10,
        color: '#ffff',
        textAlign: 'center',
        marginHorizontal: 53,
        marginTop: 15
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
        top:'92%'
    },


});
export default Bluetooth