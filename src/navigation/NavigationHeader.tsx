import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import Menu from '../../res/images/menu.svg';
import Bell from '../../res/images/bell.svg'
const HeaderComponent = ({ text,navigation }) => {

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
            <TouchableOpacity onPress={()=>navigation?.openDrawer()}>
            <Menu />
            </TouchableOpacity>
            <Text style={{ fontFamily: 'Poppins-Bold', color: '#fff', fontSize: 14, lineHeight: 21 }}>{text}</Text>
            <TouchableOpacity  onPress={()=>navigation?.navigate('Notifications')}>
            <Bell />
            <View style={{height:10,width:10,borderRadius:10,backgroundColor:'#92C146',position:'absolute',left:10}}></View>
            </TouchableOpacity>
        </View>
    );
};
export default HeaderComponent;
