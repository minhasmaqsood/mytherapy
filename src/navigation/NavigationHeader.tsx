import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import Menu from '../../res/images/menu.svg';
import Bell from '../../res/images/bell.svg'
const HeaderComponent = ({ text }) => {

    return (
        <View
            style={{
                width: '100%',
                backgroundColor: '#217DC1',
                height: 100,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 30,
                paddingTop: 36
            }}
        >
            <Menu />
            <Text style={{ fontFamily: 'Poppins-Bold', color: '#fff', fontSize: 14, lineHeight: 21 }}>{text}</Text>
            <Bell />
        </View>
    );
};
export default HeaderComponent;
