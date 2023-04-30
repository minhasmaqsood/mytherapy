import React, { FC, useEffect, useRef, useState } from "react";
import { View, Text, TouchableOpacity, Animated, StyleSheet, StatusBar, FlatList } from "react-native";
import HeaderComponent from "../../navigation/NavigationHeader";
import Calendar from '../../../res/images/calendar.svg'
import GreyUnheck from '../../../res/images/greyUncheck.svg';
import GreenCheck from '../../../res/images/greyCheck.svg'
import Plus from '../../../res/images/plus.svg'
const Goals: FC<{}> = ({ navigation }) => {
    const [status, setStatus] = useState('active')
    const [array, setArray] = useState([{ flag: true }, { flag: false }, { flag: false }, { flag: true }])
    return (
        <View style={styles.main}>
            <HeaderComponent navigation={navigation} text={'My Goals'} />
            <View style={styles.top}>
                <View style={{ paddingHorizontal: 37 }} >
                    <View style={styles.buttonView}>
                        <TouchableOpacity onPress={() => { setStatus('active') }} style={[styles.button, { backgroundColor: status == 'active' ? '#94C246' : '#2A89D0' }]} >
                            <Text style={styles.buttonText}>Active</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setStatus('completed') }} style={[styles.button, { backgroundColor: status == 'completed' ? '#94C246' : '#2A89D0' }]} >
                            <Text style={styles.buttonText}>Completed</Text>
                        </TouchableOpacity>
                    </View>


                </View>
            </View>
            <View style={{ paddingHorizontal: 37, marginTop: -210 }} >
                <FlatList
                    data={array}
                    renderItem={({ item, index }) => (<View style={styles.card}>
                        <View>
                            <Text style={styles.text}>lorem title</Text>
                            <View style={styles.leftView}>
                                <Calendar />
                                <Text style={styles.text1}>2 hours</Text>
                            </View>
                        </View>
                        {item.flag ?
                            <TouchableOpacity onPress={() => {
                                let arr = [...array]
                                arr[index].flag = !arr[index].flag
                                setArray(arr)
                            }}>
                                <GreyUnheck />
                            </TouchableOpacity>
                            :
                            <TouchableOpacity style={styles.bottom} onPress={() => {
                                let arr = [...array]
                                arr[index].flag = !arr[index].flag
                                setArray(arr)
                            }}>
                                <GreyUnheck />
                                <View style={styles.check}>
                                    <GreenCheck />
                                </View>
                            </TouchableOpacity>

                        }
                    </View>)}
                    showsVerticalScrollIndicator={false}
                />
            </View>
            <View style={styles.plusView}>
                <Plus />
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
        fontSize: 14,

    },
    buttonView:
    {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 35
    },
    button:
    {
        height: 37,
        width: '47%',
        borderRadius: 10,
        backgroundColor: '#CCCCCC',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:
    {
        fontFamily: 'Poppins-Bold',
        fontSize: 12,
        color: '#fff'
    },
    card:
    {
        height: 68,
        width: '100%',
        backgroundColor: '#FFFFFF',
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 5,
        marginTop: 22,
        borderRadius: 10,
        paddingLeft: 26,
        paddingRight: 16,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    leftView:
    {
        flexDirection: "row",
        alignItems: 'center',

    },
    text1:
    {
        fontFamily: 'Poppins-Regular',
        fontSize: 8,
        lineHeight: 13,
        marginLeft: 5
    },
    bottom:
    {
        alignItems: 'center',
        justifyContent: 'center'
    },
    check:
    {
        position: 'absolute'
    },
    plusView:
    {
        backgroundColor: '#92C146',
        height: 62,
        width: 62,
        borderRadius: 62,
        position: 'absolute',
        alignSelf: 'flex-end',
        right: 37,
        top: '87%',
        alignItems: 'center',
        justifyContent: 'center'
    }


});
export default Goals