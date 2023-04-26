import React from 'react';
import { TouchableOpacity, View, Text,Image } from 'react-native';
const HeaderComponent = ({text}) => {

    return (
        <View
            style={{
                width:'100%',
                backgroundColor: '#217DC1',
                height: 100,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 30,
                paddingTop:36
            }}
        >
            <Image source={require('../../res/images/menu.png')} style={{height:18,width:20}} />
            <Text style={{fontFamily: 'Poppins-Bold',color:'#fff',fontSize:14,lineHeight:21 }}>{text}</Text>
            <Image source={require('../../res/images/bell.png')} style={{height:18,width:20}} />

        </View>
    );
};
export default HeaderComponent;
