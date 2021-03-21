import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {BgTop, ICUser} from '../../assets';
import {Gap} from '../../components';
import {colors, fonts, imageFake} from '../../constants';
import {hp, rf, wp} from '../../constants/display';

const RegisterEmail = ({navigation}) => {
  return (
    <View style={styles.page}>
      <StatusBar backgroundColor={colors.bg.blue3} />
      <Image source={BgTop} style={styles.bg} />
      <Gap height={hp(5)} />
      <View style={styles.container}>
        <Text style={styles.text}>My Profile</Text>
        <Gap height={hp(5)} />
      </View>
      <View style={styles.containerImage}>
        <TouchableOpacity style={styles.profilePic}>
          <Image source={{uri: imageFake.singleUrl}} style={styles.image} />
          <View style={styles.circle}>{<ICUser />}</View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterEmail;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.bg.white,
    flex: 1,
  },
  text: {
    fontFamily: fonts.MontserratExtraBold,
    color: colors.text.white,
    fontSize: rf(3),
    width: wp(50),
  },
  desc: {
    fontFamily: fonts.MontserratBold,
    color: colors.text.concrete,
    fontSize: rf(1.8),
    textAlign: 'justify',
    width: wp(75),
  },
  bg: {
    width: wp(100),
    height: hp(53),
    position: 'absolute',
  },
  container: {
    paddingHorizontal: wp(5),
  },
  containerImage: {
    paddingHorizontal: wp(5),
    alignItems: 'center',
  },
  profilePic: {
    backgroundColor: colors.bg.white,
    borderRadius: wp(5),
    width: wp(25),
    height: wp(25),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  image: {
    width: wp(25),
    height: wp(25),
    borderRadius: wp(5),
  },
  circle: {
    width: wp(10),
    height: wp(10),
    borderRadius: wp(10) / 2,
    backgroundColor: colors.bg.white,
    position: 'absolute',
    top: hp(8),
    left: wp(18),
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
});
