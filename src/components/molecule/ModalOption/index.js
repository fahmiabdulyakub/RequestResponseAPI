import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import {colors, fonts, hp, rf, wp} from '../../../constants';

const ModalOption = ({
  isVisible,
  onPressClose,
  onPressItem,
  title,
  loading,
  data,
  heightModal,
}) => {
  return (
    <Modal
      style={styles.modal}
      isVisible={isVisible}
      onBackdropPress={onPressClose}
      onBackButtonPress={onPressClose}
      animationIn="zoomIn"
      animationInTiming={300}
      animationOutTiming={500}
      useNativeDriver={true}
      animationOut="zoomOut">
      <View style={styles.container}>
        {loading ? (
          <View style={styles.loading}>
            <ActivityIndicator size="large" color={colors.bg.blue} />
          </View>
        ) : (
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.content}
                onPress={() => onPressItem(item)}>
                <Text style={styles.titleSelect}>{item.nama}</Text>
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    </Modal>
  );
};

export default ModalOption;

const styles = StyleSheet.create({
  modal: {
    alignItems: 'center',
  },
  container: {
    backgroundColor: colors.bg.white,
    borderRadius: wp(5),
    width: wp(80),
    justifyContent: 'center',
    paddingVertical: hp(1),
    paddingBottom: hp(3),
    paddingHorizontal: wp(3),
  },
  content: {
    paddingVertical: hp(1),
    backgroundColor: colors.bg.white,
    borderBottomColor: colors.bg.abu,
    borderBottomWidth: wp(0.3),
  },
  titleSelect: {
    fontFamily: fonts.MontserratRegular,
    fontSize: rf(2),
    color: colors.text.gray,
  },
  loading: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: hp(2),
  },
});
