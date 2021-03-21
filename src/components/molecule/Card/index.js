import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts, hp, rf, wp} from '../../../constants';

const Card = ({image, onPress, title}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.contentText}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    elevation: 5,
    backgroundColor: colors.bg.white,
    shadowOffset: {width: 1, height: 1},
    shadowColor: colors.bg.black,
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: hp(1.5),
    width: wp(30),
    height: hp(20),
  },
  image: {
    width: '100%',
    height: hp(15),
    borderRadius: 10,
  },
  contentText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  title: {
    fontSize: rf(1.6),
    fontFamily: fonts.MontserratBold,
    textTransform: 'capitalize',
  },
});
