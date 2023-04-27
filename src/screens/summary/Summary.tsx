import React, { FC, useEffect, useRef, useState } from "react";
import { View, Text, TouchableOpacity, Animated, StyleSheet, StatusBar, FlatList, Dimensions } from "react-native";
import TrainingCard from "../../components/TrainingCard";
import HeaderComponent from "../../navigation/NavigationHeader";
import {
    LineChart,
} from "react-native-chart-kit";

const HomeScreen: FC<{}> = ({navigation}) => {
    const [array, setArray] = useState([{ date: '2023/04/24', value: 75 }, { date: '2023/04/24', value: 75 }, { date: '2023/04/24', value: 75 }, { date: '2023/04/24', value: 75 }, { date: '2023/04/24', value: 75 }])
    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43],
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                strokeWidth: 2 // optional
            }
        ],
        legend: ["Rainy Days"] // optional
    };
    return (
        <View style={styles.main}>
            <HeaderComponent text={'Summary'} navigation={navigation} />
            <View style={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.text}>Summary of Blood Oxygen Saturation (SpO2)</Text>
                    <View style={styles.buttonView}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Last Week</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, { backgroundColor: '#B3B3B3' }]}>
                            <Text style={styles.buttonText}>Last Month</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, { backgroundColor: '#B3B3B3' }]}>
                            <Text style={styles.buttonText}>Select Date</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <LineChart
                            data={{
                                labels: ["04/2", "04/2", "04/2", "04/2", "04/2", "04/2"],
                                datasets: [
                                    {
                                        data: [
                                           100,90,80,70
                                        ]
                                    }
                                ]
                            }}
                            width={Dimensions.get("window").width -120} // from react-native
                            height={160}
                            yAxisInterval={1} 
                            chartConfig={{
                                backgroundColor: "transparent",
                                backgroundGradientFrom: "#fff",
                                backgroundGradientTo: "#fff",
                                decimalPlaces: 1,
                                color: (opacity = 1) => `#217DC1`,
                                labelColor: (opacity = 1) => `#4D4D4D`,
                                style: {
                                    borderRadius: 20,
                                   
                                },
                                propsForDots: {
                                    r: "4",
                                    strokeWidth: "2",
                                    stroke: "#94C246"
                                }
                            }}
                            bezier
                            style={{
                                marginTop: 25,
                                borderRadius: 16,
                                marginLeft:20
                            }}
                        />
                    </View>
                    <View style={styles.tableView}>
                        <Text style={styles.tableText}>Date</Text>
                        <Text style={styles.tableText}>Value</Text>
                    </View>
                    <FlatList
                        data={array}
                        renderItem={({ item, index }) => (
                            <View style={[styles.tableView, { marginTop: 0, backgroundColor: index % 2 == 0 ? '#FFFFFF' : '#E6E6E6' }]}>
                                <Text style={[styles.tableText, { color: '#4D4D4D' }]}>{item.date}</Text>
                                <Text style={[styles.tableText, { color: '#4D4D4D', marginRight: 7 }]}>{item.value}</Text>
                            </View>
                        )}
                        showsVerticalScrollIndicator={false}
                    />


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
    card:
    {
        width: '100%',
        backgroundColor: '#fff',
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 21,
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 5,
        paddingVertical: 28,
    },
    text:
    {
        fontFamily: 'Poppins-Regular',
        fontSize: 7,
        marginLeft: 23,
        lineHeight: 12,
        color: ' #4D4D4D'
    },
    buttonView:
    {
        flexDirection: 'row',
        marginRight: 25,
        marginLeft: 23,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    button:
    {

        marginTop: 16,
        width: '31%',
        height: 16,
        backgroundColor: '#217DC1',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:
    {
        fontFamily: 'Poppins-Regular',
        fontSize: 5,
        lineHeight: 9,
        color: '#fff'
    },
    tableView:
    {
        flexDirection: 'row',
        alignItems: 'center',
        width: '75%',
        backgroundColor: '#217DC1',
        height: 29,
        // marginHorizontal: 40,
        marginTop: 30,
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        alignSelf: 'center'
    },
    tableText:
    {
        fontFamily: 'Poppins-Regular',
        fontSize: 5,
        lineHeight: 9,
        color: '#fff'
    }



});
export default HomeScreen