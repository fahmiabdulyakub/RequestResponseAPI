import React, {useState, useEffect} from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  RefreshControl,
  View,
  FlatList,
} from 'react-native';
import {ICUser, ICLocation, ICChevron} from '../../assets';
import {
  ButtonIconOnly,
  ButtonIconText,
  Card,
  Gap,
  ModalAddImage,
  ModalOption,
} from '../../components';
import {colors, fonts, imageFake, reducer} from '../../constants';
import {hp, rf, wp} from '../../constants/display';
import {getLocation, openCamera, openPenyimpanan} from '../../utils';
import {useDispatch, useSelector} from 'react-redux';
import {
  getKecamatan,
  getKelurahan,
  getKota,
  getProvinsi,
  getUser,
} from '../../configs/redux/action/data';

const Profile = ({navigation}) => {
  const [modal, setModal] = useState(false);
  const [user, setUser] = useState([]);
  const [modalProvinsi, setModalProvinsi] = useState(false);
  const [provinsi, setProvinsi] = useState(null);
  const [dataProvinsi, setDataProvinsi] = useState('');
  const [modalKota, setModalKota] = useState(false);
  const [kota, setKota] = useState(null);
  const [dataKota, setDataKota] = useState('');
  const [modalKecamatan, setModalKecamatan] = useState(false);
  const [kecamatan, setKecamatan] = useState(null);
  const [dataKecamatan, setDataKecamatan] = useState('');
  const [modalKelurahan, setModalKelurahan] = useState(false);
  const [kelurahan, setKelurahan] = useState(null);
  const [dataKelurahan, setDataKelurahan] = useState('');
  const [refresh, setRefresh] = useState(false);
  const [image, setImage] = useState('');
  const stateProfile = useSelector(state => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    setRefresh(true);
    dispatch(getUser()).then(result => {
      setUser(result);
    });
    getLocation().then(location => {
      dispatch({type: reducer.PROFILE_LATITUDE, value: location.latitude});
      dispatch({type: reducer.PROFILE_LONGITUDE, value: location.longitude});
      setRefresh(false);
    });
  }, [dispatch]);

  const onImageSaved = savedImage => {
    setImage(savedImage);
    setModal(false);
  };

  const getLokasi = () => {
    setRefresh(true);
    getLocation().then(location => {
      dispatch({type: reducer.PROFILE_LATITUDE, value: location.latitude});
      dispatch({type: reducer.PROFILE_LONGITUDE, value: location.longitude});
      setRefresh(false);
    });
  };

  const getDataProvinsi = () => {
    setModalProvinsi(true);
    dispatch(getProvinsi()).then(result => {
      setProvinsi(result.provinsi);
    });
  };
  const getDataKota = () => {
    setModalKota(true);
    dispatch(getKota(dataProvinsi.id)).then(result => {
      setKota(result.kota_kabupaten);
    });
  };
  const getDataKecamatan = () => {
    setModalKecamatan(true);
    dispatch(getKecamatan(dataKota.id)).then(result => {
      setKecamatan(result.kecamatan);
      console.log(result.kecamatan);
    });
  };
  const getDataKelurahan = () => {
    setModalKelurahan(true);
    dispatch(getKelurahan(dataKecamatan.id)).then(result => {
      setKelurahan(result.kelurahan);
    });
  };
  return (
    <View style={styles.page}>
      <StatusBar backgroundColor={colors.bg.blue3} />
      <View style={styles.header}>
        <View style={styles.container}>
          <Text style={styles.text}>My Profile</Text>
          <ButtonIconOnly
            icon={<ICLocation />}
            backgroundColor={colors.bg.white}
            borderRadius={wp(10) / 2}
            size={wp(10)}
            onPress={() => getLokasi()}
          />
        </View>
        <Gap height={hp(3)} />
        <View style={styles.containerImage}>
          <TouchableOpacity
            style={styles.profilePic}
            onPress={() => setModal(true)}>
            <Image
              source={{uri: image ? image : imageFake.singleUrl}}
              style={styles.image}
            />
            <View style={styles.circle}>{<ICUser />}</View>
          </TouchableOpacity>
          <Gap height={hp(2)} />
          <Text style={styles.name}>Fahmi Abdul Yakub</Text>
          <Gap height={hp(1)} />
          <Text style={styles.text2}>React Native Developer</Text>
          <Text style={styles.textMedium}>
            Latitude : {stateProfile.latitude}
          </Text>
          <Text style={styles.textMedium}>
            Longitude : {stateProfile.longitude}
          </Text>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refresh} />}>
        <Gap height={hp(3)} />
        <Text style={styles.text3}>List Friends</Text>
        <FlatList
          data={user}
          style={styles.conatinerScroll}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          renderItem={({item}) => (
            <Card title={item.firstName} image={item.picture} />
          )}
          keyExtractor={item => item.id.toString()}
        />
        <ButtonIconText
          title1={'Province'}
          title={dataProvinsi ? dataProvinsi.nama : '- Choose Province -'}
          iconRight={<ICChevron />}
          backgroundColor={colors.bg.blue3}
          titleColor={colors.text.white}
          paddingVertical={hp(1.5)}
          onPress={() => getDataProvinsi()}
          marginHorizontal={wp(5)}
        />
        <Gap height={hp(2)} />
        <ButtonIconText
          title1={'City'}
          title={dataKota ? dataKota.nama : '- Choose City -'}
          iconRight={<ICChevron />}
          disabled={dataProvinsi ? false : true}
          backgroundColor={colors.bg.blue3}
          titleColor={colors.text.white}
          paddingVertical={hp(1.5)}
          onPress={() => getDataKota()}
          marginHorizontal={wp(5)}
        />
        <Gap height={hp(2)} />
        <ButtonIconText
          title1={'Subdistrict'}
          title={dataKecamatan ? dataKecamatan.nama : '- Choose Subdistrict -'}
          iconRight={<ICChevron />}
          disabled={dataKota ? false : true}
          backgroundColor={colors.bg.blue3}
          titleColor={colors.text.white}
          paddingVertical={hp(1.5)}
          onPress={() => getDataKecamatan()}
          marginHorizontal={wp(5)}
        />
        <Gap height={hp(2)} />
        <ButtonIconText
          title1={'Villages'}
          title={dataKelurahan ? dataKelurahan.nama : '- Choose Villages -'}
          iconRight={<ICChevron />}
          disabled={dataKecamatan ? false : true}
          backgroundColor={colors.bg.blue3}
          titleColor={colors.text.white}
          paddingVertical={hp(1.5)}
          onPress={() => getDataKelurahan()}
          marginHorizontal={wp(5)}
        />
        <Gap height={hp(10)} />
      </ScrollView>

      <ModalAddImage
        onPressCamera={() => openCamera(onImageSaved)}
        onPressGallery={() => openPenyimpanan(onImageSaved)}
        isVisible={modal}
        onPressClose={() => setModal(false)}
      />
      <ModalOption
        data={provinsi}
        isVisible={modalProvinsi}
        loading={stateProfile.loading}
        onPressClose={() => setModalProvinsi(false)}
        onPressItem={value => {
          setDataProvinsi(value);
          setModalProvinsi(false);
        }}
      />
      <ModalOption
        data={kota}
        isVisible={modalKota}
        loading={stateProfile.loading}
        onPressClose={() => setModalKota(false)}
        onPressItem={value => {
          setDataKota(value);
          setModalKota(false);
        }}
      />
      <ModalOption
        data={kecamatan}
        isVisible={modalKecamatan}
        loading={stateProfile.loading}
        onPressClose={() => setModalKecamatan(false)}
        onPressItem={value => {
          setDataKecamatan(value);
          setModalKecamatan(false);
        }}
      />
      <ModalOption
        data={kelurahan}
        isVisible={modalKelurahan}
        loading={stateProfile.loading}
        onPressClose={() => setModalKelurahan(false)}
        onPressItem={value => {
          setDataKelurahan(value);
          setModalKelurahan(false);
        }}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.bg.white,
    flex: 1,
  },
  text: {
    fontFamily: fonts.MontserratExtraBold,
    color: colors.text.white,
    fontSize: rf(3),
    width: wp(50),
  },
  bg: {
    width: wp(100),
    height: hp(53),
    position: 'absolute',
  },
  container: {
    paddingHorizontal: wp(5),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  header: {
    paddingVertical: hp(2),
    backgroundColor: colors.bg.blue3,
    borderBottomRightRadius: wp(10),
    borderBottomLeftRadius: wp(10),
    paddingBottom: hp(5),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  friends: {
    paddingHorizontal: wp(5),
  },
  containerImage: {
    paddingHorizontal: wp(5),
    alignItems: 'center',
  },
  profilePic: {
    backgroundColor: colors.bg.white,
    borderRadius: wp(5),
    width: wp(25),
    height: wp(25),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  image: {
    width: wp(25),
    height: wp(25),
    borderRadius: wp(5),
  },
  circle: {
    width: wp(10),
    height: wp(10),
    borderRadius: wp(10) / 2,
    backgroundColor: colors.bg.white,
    position: 'absolute',
    top: hp(8),
    left: wp(18),
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  name: {
    fontFamily: fonts.MontserratBold,
    fontSize: rf(2),
    color: colors.text.white,
  },
  text2: {
    fontFamily: fonts.MontserratBold,
    fontSize: rf(1.5),
    color: colors.text.black,
  },
  text3: {
    fontFamily: fonts.MontserratBold,
    fontSize: rf(2),
    color: colors.text.black,
    left: wp(5),
  },
  textMedium: {
    fontFamily: fonts.MontserratMedium,
    fontSize: rf(1.5),
    color: colors.text.white,
  },
  conatinerScroll: {
    paddingHorizontal: wp(4),
  },
});
