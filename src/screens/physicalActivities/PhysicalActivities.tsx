import React, { FC, useEffect, useRef, useState } from "react";
import { View, Text, TouchableOpacity, Animated, StyleSheet, StatusBar, FlatList } from "react-native";
import ActivityCard from "../../components/ActivityCard";
import HeaderComponent from "../../navigation/NavigationHeader";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const PhysicalActivities: FC<{}> = ({ navigation }) => {
    const [status, setStatus] = useState('active')
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [array, setArray] = useState([{
        selected: true,
        flag: true,
    },
    {
        selected: false,
        flag: false,
    },
    {
        selected: false,
        flag: true,
    }, {
        selected: false,
        flag: false,
    },
    {
        selected: false,
        flag: true,
    }, {
        selected: false,
        flag: false,
    }, {
        selected: false,
        flag: true,
    }])
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        hideDatePicker();
    };

    return (
        <View style={styles.main}>
            <HeaderComponent text={'Physical Activities'} navigation={navigation} />
            <View style={styles.container}>
                <Text style={styles.text}>Training Recommendations</Text>
                <View style={styles.buttonView}>
                    <TouchableOpacity onPress={() => { setStatus('active') }} style={[styles.button, { backgroundColor: status == 'active' ? '#94C246' : '#CCCCCC' }]} >
                        <Text style={styles.buttonText}>Active</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setStatus('completed') }} style={[styles.button, { backgroundColor: status == 'completed' ? '#94C246' : '#CCCCCC' }]} >
                        <Text style={styles.buttonText}>Completed</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.calenView}>
                    <Text style={styles.calenText}>
                        Date Select
                    </Text>
                    <TouchableOpacity style={styles.pick} onPress={showDatePicker}>
                        <Text style={styles.calenText}>
                            pick Date
                        </Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    horizontal={true}
                    data={array}
                    renderItem={({ item,index }) => (<TouchableOpacity onPress={()=>{
                        let arr=[...array]
                        for(let i=0;i<arr.length;i++)
                        {
                            arr[i].selected=false

                        }
                        arr[index].selected=true
                        setArray(arr)

                    }}
                    style={[styles.dateCard,{backgroundColor:item.selected?"#217DC1":'transparent'}]}>
                        <Text style={[styles.day,{color:item.selected?'#fff':'black'}]}>Sat</Text>
                        <Text style={[styles.date,{color:item.selected?'#fff':'black'}]}>May 26</Text>
                        <View style={[styles.dateView,{backgroundColor:item.flag?'#92C146':'#B3B3B3'}]}></View>
                    </TouchableOpacity>)}
                    showsVerticalScrollIndicator={false}
                />

                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
                <FlatList
                    data={[1, 2, 3, 6, 5, 4, 4, 5]}
                    renderItem={({ item }) => (<ActivityCard status={status} />)}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    )


}
const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#E3F7FF',
        paddingHorizontal: 36,
    },
    text:
    {
        fontFamily: 'Poppins-Medium',
        fontSize: 9,
        marginTop: 29,
        lineHeight: 14
    },
    buttonView:
    {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 9
    },
    button:
    {
        height: 38,
        width: '47%',
        borderRadius: 10,
        backgroundColor: '#CCCCCC',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:
    {
        fontFamily: 'Poppins-Medium',
        fontSize: 9,
        color: '#fff'
    },
    calenView:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        alignItems: 'center'

    },
    calenText:
    {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 9,

    },
    pick:
    {
        height: 20,
        width: '30%',
        backgroundColor: '#fff',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    dateCard:
    {
        height: 80,
        width: 40,
        backgroundColor: "#217DC1",
        alignItems: 'center',
        marginLeft: 5,
        paddingTop:7,
        marginTop:10
    },
    day:
    {
        fontFamily: 'Poppins-Regular',
        fontSize: 9,
    },
    date:
    {
        fontFamily: 'Poppins-Regular',
        fontSize: 6,
    },
    dateView:
    {
        height: 22,
        width: 22,
        borderRadius: 30,
        backgroundColor: 'grey',
        marginTop: 3
    }




});
export default PhysicalActivities