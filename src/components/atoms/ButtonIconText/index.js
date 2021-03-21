import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts, rf, hp, wp} from '../../../constants';

const ButtonIconText = ({
  title,
  title1,
  icon,
  iconRight,
  flexDirection,
  backgroundColor,
  titleColor,
  borderRadius,
  onPress,
  fontTitle,
  paddingVertical,
  paddingHorizontal,
  marginHorizontal,
  widthText,
  leftText,
  height,
  disabled,
}) => {
  return (
    <TouchableOpacity
      style={styles.conatiner(
        flexDirection,
        backgroundColor,
        borderRadius,
        paddingVertical,
        paddingHorizontal,
        marginHorizontal,
        height,
      )}
      onPress={onPress}
      disabled={disabled}>
      {icon && icon}
      <View>
        <Text style={styles.title1}>{title1}</Text>
        <Text style={styles.title(titleColor, fontTitle, widthText, leftText)}>
          {title}
        </Text>
      </View>

      {iconRight && iconRight}
    </TouchableOpacity>
  );
};

export default ButtonIconText;

const styles = StyleSheet.create({
  conatiner: (
    flexDirection,
    backgroundColor,
    borderRadius,
    paddingVertical,
    paddingHorizontal,
    marginHorizontal,
    height,
  ) => ({
    backgroundColor: backgroundColor ? backgroundColor : colors.bg.blue,
    paddingVertical: height ? null : paddingVertical ? paddingVertical : hp(1),
    paddingHorizontal: paddingHorizontal ? paddingHorizontal : wp(3.6),
    height: height ? height : null,
    borderRadius: borderRadius ? borderRadius : 15,
    flexDirection: flexDirection ? flexDirection : 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: marginHorizontal,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  }),
  title: (titleColor, fontTitle, widthText, leftText) => ({
    fontFamily: fontTitle ? fontTitle : fonts.MontserratRegular,
    fontSize: rf(1.5),
    color: titleColor ? titleColor : colors.text.white,
    width: widthText ? widthText : null,
    left: leftText ? leftText : null,
  }),
  title1: {
    fontFamily: fonts.MontserratBold,
    color: colors.text.abu,
    fontSize: rf(1.3),
  },
});
