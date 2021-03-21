import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ICSheetDownWhite} from '../../../assets';
import {colors, fonts, hp, rf, wp} from '../../../constants';

const InputSelect = ({
  title,
  onPress,
  fontFamily,
  fontSize,
  height,
  paddingLeft,
  width,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.conatinerInput(height, paddingLeft, width)}>
        <Text style={styles.title(fontFamily, fontSize)}>{title}</Text>
        <View style={styles.iconBox}>
          <ICSheetDownWhite />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default InputSelect;

const styles = StyleSheet.create({
  conatinerInput: (height, paddingLeft, width) => ({
    flexDirection: 'row',
    borderWidth: 1,
    height: height ? height : hp(6),
    borderRadius: wp(5),
    borderColor: colors.border.primay,
    alignItems: 'center',
    width: width ? width : null,
    justifyContent: 'space-between',
    paddingLeft: paddingLeft ? paddingLeft : wp(2.4),
  }),
  title: (fontFamily, fontSize) => ({
    fontSize: fontSize ? fontSize : rf(2),
    fontFamily: fontFamily ? fontFamily : fonts.MontserratRegular,
    color: colors.text.blue,
  }),
  iconBox: {
    height: '100%',
    width: wp(15),
    backgroundColor: colors.bg.blue,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: wp(4.8),
    borderTopRightRadius: wp(4.8),
  },
});
