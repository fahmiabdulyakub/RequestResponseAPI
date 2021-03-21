import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ICCheck} from '../../../assets';
import {colors, wp} from '../../../constants';

const Circle = () => {
  return (
    <View style={styles.cheklist}>
      <ICCheck />
    </View>
  );
};

export default Circle;

const styles = StyleSheet.create({
  cheklist: {
    width: wp(10),
    height: wp(10),
    borderRadius: wp(10) / 2,
    backgroundColor: colors.bg.green,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
});
