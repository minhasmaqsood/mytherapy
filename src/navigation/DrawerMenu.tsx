import React, { FC, useRef } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';
import Menu from '../../res/images/menu.svg'
const DrawerMenu: FC<{}> = ({ navigation }: any) => {
  const childRef: FunctionTypes = useRef();

  return (
    <View style={styles.container} >
      <TouchableOpacity style={{marginLeft:22}} onPress={() => navigation?.closeDrawer()}>
        <Menu />
      </TouchableOpacity>
      <View style={styles.imgView}>
        <Image source={require('../../res/images/rec.png')} style={styles.image} />
        <Text style={styles.text}>Deny Doel</Text>
      </View>
      <View style={[styles.card,{marginTop:30,backgroundColor:'transparent'}]}>
      <Text style={styles.text1}>Home</Text>
      </View>
      <View style={[styles.card]}>
      <Text style={styles.text1}>Emergency Plan</Text>
      </View>
      <View style={[styles.card,{backgroundColor:'transparent'}]}>
      <Text style={styles.text1}>Therapy Plan</Text>
      </View>
      <View style={[styles.card,{backgroundColor:'transparent'}]}>
      <Text style={styles.text1}>Therapy Overview</Text>
      </View>
      <View style={[styles.card,{backgroundColor:'transparent'}]}>
      <Text style={styles.text1}>Qestionnaire</Text>
      </View>
      <View style={[styles.card,{backgroundColor:'transparent'}]}>
      <Text style={styles.text1}>Documentation and Notes</Text>
      </View>
      <View style={[styles.card,{backgroundColor:'transparent'}]}>
      <Text style={styles.text1}>Information</Text>
      </View>
      <View style={[styles.card,{backgroundColor:'transparent'}]}>
      <Text style={styles.text1}>Help and Suppoprt</Text>
      </View>
      <View style={[styles.card,{backgroundColor:'transparent'}]}>
      <Text style={styles.text1}>Feedback</Text>
      </View>
      <View style={[styles.card,{backgroundColor:'transparent',marginTop:131}]}>
      <Text style={styles.text1}>Log Out</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    backgroundColor: '#2A89D0',
    width: 230,
    height: '76%',
    marginTop: 30,
    marginLeft: 15
  },
  image:
  {
    height: 70,
    width: 70,
    borderRadius: 70,
    marginLeft: 22,

  },
  imgView:
  {
    flexDirection: 'row',
    marginTop: 50,
    alignItems: 'center'
  },
  text:
  {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
    color: '#fff',
    marginLeft: 20
  },
  text1:
  {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#fff',
  },
  card:
  {
    height:30,
    width:'100%',
    backgroundColor:'#92C146',
    paddingLeft: 23,
    paddingTop:5

  }


})

export default DrawerMenu;
