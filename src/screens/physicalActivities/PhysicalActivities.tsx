import React, { FC, useEffect, useRef, useState } from "react";
import { View, Text, TouchableOpacity, Animated, StyleSheet, StatusBar, FlatList } from "react-native";
import ActivityCard from "../../components/ActivityCard";
import HeaderComponent from "../../navigation/NavigationHeader";

const PhysicalActivities: FC<{}> = () => {
    const [status, setStatus] = useState('active')

    return (
        <View style={styles.main}>
            <HeaderComponent text={'Physical Activities'} />
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
    }


});
export default PhysicalActivities