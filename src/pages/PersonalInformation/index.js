import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ICChevron} from '../../assets';
import {
  Button,
  ButtonIconText,
  Gap,
  HeaderTextBack,
  ModalOption,
  NumberStep,
} from '../../components';
import {colors, fonts, hp, rf, wp} from '../../constants';

const PersonalInformation = ({navigation}) => {
  const [modal, setModal] = useState(false);
  const [modalIncome, setModalIncome] = useState(false);
  const [modalExpense, setModalExpense] = useState(false);
  const [goal, setGoal] = useState(null);
  const [income, setIncome] = useState('');
  const [expense, setExpense] = useState('');
  const data = [
    {name: 'Saham', id: 1},
    {name: 'Investasi', id: 2},
    {name: 'Uang', id: 3},
  ];
  const dataIncome = [
    {name: 'Rp 1.000.000 - Rp 2.000.000', id: 1},
    {name: 'Rp 2.000.000 - Rp 3.000.000', id: 2},
    {name: 'Rp 4.000.000 - Rp 5.000.000', id: 3},
  ];
  const dataExpense = [
    {name: 'Rp 10.000.000 - Rp 20.000.000', id: 1},
    {name: 'Rp 20.000.000 - Rp 30.000.000', id: 2},
    {name: 'Rp 40.000.000 - Rp 50.000.000', id: 3},
  ];
  return (
    <View style={styles.page}>
      <HeaderTextBack
        label={'Create Account'}
        onPressBack={() => navigation.goBack()}
      />
      <NumberStep step1={true} step2={true} />
      <Gap height={hp(10)} />
      <View style={styles.container}>
        <Text style={styles.title}>Personal Information</Text>
        <Gap height={hp(1)} />
        <Text style={styles.text}>
          Please fill in the Information below and your goal for digital solving
        </Text>
        <Gap height={hp(10)} />
        <ButtonIconText
          title1={'Goal for activation'}
          title={goal ? goal.name : '- Choose Option -'}
          iconRight={<ICChevron />}
          backgroundColor={colors.bg.white}
          titleColor={colors.text.gray}
          paddingVertical={hp(1.5)}
          onPress={() => setModal(true)}
        />
        <Gap height={hp(4)} />
        <ButtonIconText
          title1={'Monthly income'}
          title={income ? income.name : '- Choose Option -'}
          iconRight={<ICChevron />}
          backgroundColor={colors.bg.white}
          titleColor={colors.text.gray}
          paddingVertical={hp(1.5)}
          onPress={() => setModalIncome(true)}
        />
        <Gap height={hp(4)} />
        <ButtonIconText
          title1={'Monthly expense'}
          title={expense ? expense.name : '- Choose Option -'}
          iconRight={<ICChevron />}
          backgroundColor={colors.bg.white}
          titleColor={colors.text.gray}
          paddingVertical={hp(1.5)}
          onPress={() => setModalExpense(true)}
        />
      </View>

      <Button
        buttonColor={data && income && expense ? colors.bg.blue : colors.bg.abu}
        textColor={colors.text.white}
        paddingVertical={hp(2)}
        marginHorizontal={wp(5)}
        borderRadius={wp(2)}
        bottom={hp(3)}
        disabled={data && income && expense ? false : true}
        title={'Next'}
        onPress={() => navigation.navigate('Schedule')}
      />
      <ModalOption
        data={data}
        isVisible={modal}
        onPressClose={() => setModal(false)}
        onPressItem={value => {
          setGoal(value);
          setModal(false);
        }}
      />
      <ModalOption
        data={dataIncome}
        isVisible={modalIncome}
        onPressClose={() => setModalIncome(false)}
        onPressItem={value => {
          setIncome(value);
          setModalIncome(false);
        }}
      />
      <ModalOption
        data={dataExpense}
        isVisible={modalExpense}
        onPressClose={() => setModalExpense(false)}
        onPressItem={value => {
          setExpense(value);
          setModalExpense(false);
        }}
      />
    </View>
  );
};

export default PersonalInformation;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.bg.blue3,
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: wp(5),
  },
  title: {
    fontFamily: fonts.MontserratBold,
    fontSize: rf(2.3),
    color: colors.text.white,
  },
  text: {
    fontFamily: fonts.MontserratMedium,
    fontSize: rf(1.8),
    color: colors.text.white,
  },
  dropdown: {
    backgroundColor: colors.bg.white,
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(3.6),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 15,
  },
  titleSelect: {
    fontFamily: fonts.MontserratRegular,
    fontSize: rf(1.5),
    color: colors.text.gray,
  },
  title1: {
    fontFamily: fonts.MontserratBold,
    color: colors.text.abu,
    fontSize: rf(1.3),
  },
});
