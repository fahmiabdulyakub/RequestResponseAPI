import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ICEye, ICEyeClose} from '../../assets';
import {Button, Gap, HeaderTextBack, Input, NumberStep} from '../../components';
import {colors, fonts, hp, rf, wp} from '../../constants';

const CreateAccount = ({navigation}) => {
  const [show, setShow] = useState(true);

  const showPassword = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  return (
    <View style={styles.page}>
      <HeaderTextBack
        label={'Create Account'}
        onPressBack={() => navigation.goBack()}
      />
      <NumberStep step1={true} />
      <Gap height={hp(3)} />
      <View style={styles.container}>
        <Text style={styles.title}>Create Password</Text>
        <Text style={styles.text}>
          Password will to used to login to account
        </Text>
        <Gap height={hp(3)} />
        <Input
          placeholder={'Password'}
          fontSize={rf(1.8)}
          fontFamily={fonts.MontserratMedium}
          placeholderColor={colors.text.grayMuda}
          colorText={colors.text.grayMuda}
          backgroundColor={colors.bg.white}
          icon={show ? <ICEyeClose /> : <ICEye />}
          onPress={() => showPassword()}
          secureTextEntry={show ? true : false}
        />
        <Gap height={hp(3)} />
        <View style={styles.complex}>
          <Text style={styles.text}>Complexity : </Text>

          <Text style={styles.textComplex}>Very Weak</Text>
        </View>

        <Gap height={hp(3)} />
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.textBig}>a</Text>
            <Text style={styles.textMedium}>LowerCase</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.textBig}>A</Text>
            <Text style={styles.textMedium}>Uppercase</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.textBig}>123</Text>
            <Text style={styles.textMedium}>Number</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.textBig}>9+</Text>
            <Text style={styles.textMedium}>Characters</Text>
          </View>
        </View>
      </View>
      <Button
        buttonColor={colors.bg.blue}
        textColor={colors.text.white}
        paddingVertical={hp(2)}
        marginHorizontal={wp(5)}
        borderRadius={wp(2)}
        bottom={hp(3)}
        title={'Next'}
        onPress={() => navigation.navigate('PersonalInformation')}
      />
    </View>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.bg.blue3,
    flex: 1,
  },
  text: {
    fontFamily: fonts.MontserratMedium,
    fontSize: rf(1.8),
    color: colors.text.white,
  },
  textComplex: {
    fontFamily: fonts.MontserratExtraBold,
    fontSize: rf(1.8),
    color: colors.text.yello,
  },
  textMedium: {
    fontFamily: fonts.MontserratMedium,
    fontSize: rf(1.5),
    color: colors.text.white,
  },
  textBig: {
    fontFamily: fonts.MontserratMedium,
    fontSize: rf(4),
    color: colors.text.white,
  },
  title: {
    fontFamily: fonts.MontserratBold,
    fontSize: rf(2.3),
    color: colors.text.white,
  },
  container: {
    flex: 1,
    paddingHorizontal: wp(5),
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(3),
  },
  complex: {
    flexDirection: 'row',
  },
  column: {
    alignItems: 'center',
  },
});
