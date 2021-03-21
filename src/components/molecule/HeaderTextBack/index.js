import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ICBack} from '../../../assets';
import {colors, fonts, hp, rf, wp} from '../../../constants';
import {ButtonIconOnly, Gap} from '../../atoms';

const HeaderTextBack = ({onPressBack, label}) => {
  return (
    <View>
      <View style={styles.conatiner}>
        <ButtonIconOnly
          icon={<ICBack width={wp(10)} height={hp(10)} />}
          onPress={onPressBack}
        />

        <Gap width={wp(5)} />

        <Text style={styles.label}>{label}</Text>
      </View>
    </View>
  );
};

export default HeaderTextBack;

const styles = StyleSheet.create({
  conatiner: {
    paddingVertical: hp(1.2),
    paddingHorizontal: wp(2.4),
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: rf(2),
    fontFamily: fonts.MontserratBold,
    color: colors.text.white,
  },
});
