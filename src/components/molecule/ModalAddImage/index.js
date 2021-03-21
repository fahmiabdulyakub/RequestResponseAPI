import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import {ICCamera, ICFolder, ICCancel} from '../../../assets';
import {ButtonIconOnly} from '../../../components';
import {colors, fonts, hp, rf, wp} from '../../../constants';
import {Gap} from '../../atoms';

const ModalAddImage = ({
  isVisible,
  onPressClose,
  onPressCamera,
  onPressGallery,
}) => {
  return (
    <Modal
      isVisible={isVisible}
      useNativeDriver={true}
      onBackdropPress={onPressClose}
      onBackButtonPress={onPressClose}
      animationIn="slideInLeft"
      animationOut="slideOutRight">
      <View style={styles.conatinerModal}>
        <View style={styles.header}>
          <Text style={styles.title}>Tambah foto</Text>
          <ButtonIconOnly icon={<ICCancel />} onPress={onPressClose} />
        </View>
        <View style={styles.content}>
          <View style={styles.contentImage}>
            <ButtonIconOnly
              icon={<ICCamera width={wp(20)} height={wp(20)} />}
              backgroundColor={colors.bg.white}
              borderRadius={wp(5)}
              size={wp(30)}
              shadow={true}
              onPress={onPressCamera}
            />
          </View>
          <Gap width={wp(10)} />
          <View style={styles.contentImage}>
            <ButtonIconOnly
              icon={<ICFolder width={wp(20)} height={wp(20)} />}
              backgroundColor={colors.bg.white}
              borderRadius={wp(5)}
              size={wp(30)}
              shadow={true}
              onPress={onPressGallery}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalAddImage;

const styles = StyleSheet.create({
  conatinerModal: {
    backgroundColor: colors.bg.white,
    height: hp(40),
    borderRadius: 20,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: colors.bg.blue,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: hp(6),
    alignItems: 'center',
    paddingLeft: 40,
    paddingRight: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: rf(2),
    fontFamily: fonts.MontserratBold,
    color: colors.text.white,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  contentImage: {
    alignItems: 'center',
  },
  imageFoto: {
    width: wp(40),
    height: hp(20),
    resizeMode: 'contain',
  },
});
