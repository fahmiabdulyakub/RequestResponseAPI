import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, fonts, rf} from '../../../constants';

const Button = ({
  title,
  onPress,
  buttonColor,
  textColor,
  paddingHorizontal,
  disabled,
  fontSize,
  fontFamily,
  borderWidth,
  borderColor,
  paddingVertical,
  borderRadius,
  numberOfLines,
  marginHorizontal,
  bottom,
}) => {
  return (
    <TouchableOpacity
      style={styles.container(
        buttonColor,
        paddingHorizontal,
        borderWidth,
        borderColor,
        paddingVertical,
        borderRadius,
        marginHorizontal,
        bottom,
      )}
      onPress={onPress}
      disabled={disabled}>
      <Text
        style={styles.title(textColor, fontSize, fontFamily)}
        ellipsizeMode={'tail'}
        numberOfLines={numberOfLines ? numberOfLines : null}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (
    buttonColor,
    paddingHorizontal,
    borderWidth,
    borderColor,
    paddingVertical,
    borderRadius,
    marginHorizontal,
    bottom,
  ) => ({
    padding: 5,
    backgroundColor: buttonColor ? buttonColor : colors.bg.yello,
    borderRadius: borderRadius ? borderRadius : 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: paddingHorizontal ? paddingHorizontal : 5,
    marginHorizontal: marginHorizontal,
    borderWidth: borderWidth,
    borderColor: borderColor,
    paddingVertical: paddingVertical,
    bottom: bottom,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  }),
  title: (textColor, fontSize, fontFamily) => ({
    fontSize: fontSize ? fontSize : rf(2),
    fontFamily: fontFamily ? fontFamily : fonts.MontserratBold,
    color: textColor ? textColor : colors.text.blue,
  }),
});
