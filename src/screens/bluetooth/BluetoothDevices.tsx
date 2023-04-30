import React, { FC, useEffect, useRef, useState } from "react";
import { View, Image, Text, TouchableOpacity, Animated, StyleSheet, StatusBar, FlatList, Dimensions } from "react-native";
import HeaderComponent from "../../navigation/NavigationHeader";
import Mcs from '../../../res/images/mcs.svg'
import Slogo from '../../../res/images/slogo.svg'
import Check from '../../../res/images/check.svg'
import UnCheck from '../../../res/images/uncheck.svg'

const BluetoothDevices: FC<{}> = ({ navigation }) => {
    const [array, setArray] = useState([
        { flag: false },
        { flag: true },
        { flag: false },
        { flag: false },
        { flag: false },
        { flag: false },
        { flag: false },
        { flag: false },
        { flag: false },
        { flag: false },
        { flag: false },
    ])
    return (
        <View style={styles.main}>
            <HeaderComponent navigation={navigation} text={'Bluetooth'} flag={true} />
            <View style={styles.top}>
                <Text style={styles.text} >Found Devices</Text>
            </View>
            <View style={styles.card}>
                <FlatList
                    data={array}
                    renderItem={({ item, index }) => (
                        <View style={styles.innerCard}>
                            {
                                item.flag ?
                                    <TouchableOpacity style={[styles.check, {
                                        backgroundColor: '#217DC1', height: 16, width: 16,
                                        borderRadius: 3, alignItems: 'center', justifyContent: 'center'
                                    }]} onPress={() => {
                                        let arr = [...array]
                                        arr[index].flag = !arr[index].flag
                                        setArray(arr)
                                    }}>
                                        <Check />
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity style={styles.check} onPress={() => {
                                        let arr = [...array]
                                        arr[index].flag = !arr[index].flag
                                        setArray(arr)
                                    }}>
                                        <UnCheck />
                                    </TouchableOpacity> }

                                    <Mcs height={30} width={30} />
                            <View style={{ marginLeft: 13 }}>
                                <Text style={styles.cardText} >Bluetooth Device Name</Text>
                                <Text style={[styles.cardText, { fontFamily: 'Poppins-Regular', fontSize: 8 }]} >Apple Iphone 14 Pro</Text>

                            </View>
                            
                        </View>
                    )}
                    showsVerticalScrollIndicator={false}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Connect</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.logo}>
                <Text style={[styles.cardText, { marginRight: 10 }]} >Powered by</Text>
                <Mcs height={30} width={40} />
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
        backgroundColor: "#217DC1",
        zIndex: 0
    },
    text:
    {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 18,
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
        marginTop: 15
    },
    buttonText:
    {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 11,
        color: '#ffff',
       
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
        fontFamily: 'Poppins-Medium',
        fontSize: 10,
        color: '#333333',
        lineHeight: 12
    },
    card:
    {
        position: 'absolute',
        paddingTop: 17,
        paddingBottom: 30,
        width: '80%',
        backgroundColor: '#fff',
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        borderRadius: 15,
        top: 180,
        alignSelf: 'center',
        zIndex: 1000,
        marginHorizontal: 36,
        maxHeight:500,
        minHeight:200
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
    innerCard:
    {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 9
    },
    check:
    {
        marginLeft: 11,
        marginRight: 11
    },
    button:
    {
        backgroundColor:'#217DC1',
        height:39,
        width:148,
        borderRadius:20,
        marginTop:20,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center'
    }



});
export default BluetoothDevices