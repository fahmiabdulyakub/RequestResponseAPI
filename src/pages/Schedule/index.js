import React, {useState, useEffect} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import {StyleSheet, Text, View, Animated} from 'react-native';
import {ICCalender, ICChevron} from '../../assets';
import {keyframes, stagger} from 'popmotion';
import {
  Button,
  ButtonIconText,
  Gap,
  HeaderTextBack,
  NumberStep,
} from '../../components';
import {colors, fonts, hp, rf, wp} from '../../constants';
const COUNT = 1;
const DURATION = 1000;
const initialphase = {scale: 0, opacity: 1};
const constructAnimations = () =>
  [...Array(COUNT).keys()].map(() => initialphase);

const Schedule = ({navigation}) => {
  const [animations, setAnimations] = useState(constructAnimations);
  const dateFormat = 'dddd, DD MMMM YYYY';
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [displayDate, setDisplayDate] = useState('');
  const [displayTime, setDisplayTime] = useState('');
  const timeFormat = 'HH:mm';
  useEffect(() => {
    animateCircles();
  }, []);

  const animateCircles = () => {
    const keyframess = Array(COUNT).fill(
      keyframes({
        values: [initialphase, {scale: 1, opacity: 0.5}],
        duration: DURATION,
        loop: Infinity,
        yoyo: Infinity,
      }),
    );
    stagger(keyframess, DURATION / COUNT).start(animationss => {
      setAnimations(animationss);
    });
  };
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    if (mode === 'date') {
      setDate(currentDate);
      const hasilDisplay = moment(currentDate).format(dateFormat).toString();
      setDisplayDate(hasilDisplay);
    } else {
      setTime(currentDate);
      const hasilDisplay = moment(currentDate).format(timeFormat);
      setDisplayTime(hasilDisplay);
    }
  };
  return (
    <View style={styles.page}>
      <HeaderTextBack
        label={'Create Account'}
        onPressBack={() => navigation.goBack()}
      />
      <NumberStep step1={true} step2={true} step3={true} />
      <Gap height={hp(1)} />
      <View style={styles.container}>
        {animations.map(({opacity, scale}, index) => {
          return (
            <Animated.View
              key={index}
              style={[
                styles.circle,
                {
                  transform: [{scale}],
                  opacity,
                },
              ]}
            />
          );
        })}
        <View style={styles.midCircle}>{<ICCalender />}</View>
        <Gap height={hp(14)} />
        <Text style={styles.title}>Schedule Video Call</Text>
        <Gap height={hp(1)} />
        <Text style={styles.text}>
          Choose the date and time that you preferred, we will send a link via
          email to make a video call on the scheduled date and time{' '}
        </Text>
        <Gap height={hp(14)} />
        <ButtonIconText
          title={displayDate ? displayDate : '- Choose Date -'}
          iconRight={<ICChevron />}
          titleColor={colors.text.gray}
          backgroundColor={colors.bg.white}
          title1={'Date'}
          paddingVertical={hp(1.5)}
          onPress={() => {
            setShow(true);
            setMode('date');
          }}
        />
        <Gap height={hp(3)} />
        <ButtonIconText
          title={displayTime ? displayTime : '- Choose Time -'}
          iconRight={<ICChevron />}
          titleColor={colors.text.gray}
          backgroundColor={colors.bg.white}
          title1={'Time'}
          paddingVertical={hp(1.5)}
          onPress={() => {
            setShow(true);
            setMode('time');
          }}
        />
      </View>
      <Button
        buttonColor={colors.bg.blue}
        textColor={colors.text.white}
        paddingVertical={hp(2)}
        marginHorizontal={wp(5)}
        borderRadius={wp(2)}
        bottom={hp(3)}
        title={'Next'}
      />
      {show && (
        <DateTimePicker
          value={mode === 'date' ? date : time}
          mode={mode}
          onChange={onChange}
          maximumDate={new Date(2030, 1, 1)}
          minimumDate={new Date()}
        />
      )}
    </View>
  );
};

const getCircle = (radius, backgroundColor = colors.bg.white) => ({
  backgroundColor,
  width: radius * 2,
  height: radius * 2,
  borderRadius: radius,
  position: 'absolute',
  left: wp(3),
});

export default Schedule;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.bg.blue3,
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: wp(5),
  },
  circle: getCircle(wp(10)),
  midCircle: {
    ...getCircle(wp(5)),
    alignItems: 'center',
    justifyContent: 'center',
    left: wp(8),
    top: hp(2.4),
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
});
