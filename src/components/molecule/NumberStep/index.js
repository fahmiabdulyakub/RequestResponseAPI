import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts, hp, rf, wp} from '../../../constants';
import {Gap} from '../../atoms';

const NumberStep = ({step1, step2, step3, step4}) => {
  return (
    <View style={styles.row}>
      <View style={styles.circle(step1 && colors.bg.yello)}>
        <Text style={styles.angka}>1</Text>
      </View>
      <Gap
        width={wp(12.5)}
        height={hp(0.3)}
        backgroundColor={colors.bg.abuTua}
      />
      <View style={styles.circle(step2 && colors.bg.yello)}>
        <Text style={styles.angka}>2</Text>
      </View>
      <Gap
        width={wp(12.5)}
        height={hp(0.3)}
        backgroundColor={colors.bg.abuTua}
      />
      <View style={styles.circle(step3 && colors.bg.yello)}>
        <Text style={styles.angka}>3</Text>
      </View>
      <Gap
        width={wp(12.5)}
        height={hp(0.3)}
        backgroundColor={colors.bg.abuTua}
      />
      <View style={styles.circle(step4 && colors.bg.yello)}>
        <Text style={styles.angka}>4</Text>
      </View>
    </View>
  );
};

export default NumberStep;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    paddingHorizontal: wp(5),
    alignItems: 'center',
  },
  circle: color => ({
    width: wp(13),
    height: wp(13),
    borderRadius: wp(13) / 2,
    backgroundColor: color ? color : colors.bg.white,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  }),
  angka: {
    fontFamily: fonts.MontserratBold,
    color: colors.bg.gray,
    fontSize: rf(2.5),
  },
});
