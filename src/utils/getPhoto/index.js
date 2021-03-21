import {PermissionsAndroid} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {ImageOptions} from '../../constants';
import {showError} from '../showMessage';

export const openCamera = async onImageSaved => {
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.CAMERA,
  );
  let imgaeBase64 = null;
  if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    launchCamera(ImageOptions, response => {
      if (response.didCancel) {
        showError('Opps, anda batal melakukan foto');
      } else if (response.error) {
        showError('Ada masalah dalam mengakses kamera');
      } else {
        imgaeBase64 = `data:${response.type};base64, ${response.base64}`;
      }
      onImageSaved(imgaeBase64);
    });
  } else {
    onImageSaved(imgaeBase64);
    showError(
      'Aplikasi membutuhkan akses ke camrea, silahkan ubah perizinkan pada pengaturan',
    );
  }
};

export const openPenyimpanan = async onImageSaved => {
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  );
  let imgaeBase64 = null;
  if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    launchImageLibrary(ImageOptions, response => {
      if (response.didCancel) {
        showError('Opps, anda batal memilih foto');
      } else if (response.error) {
        showError('Ada masalah dalam mengakses penyimpanan');
      } else {
        imgaeBase64 = `data:${response.type};base64, ${response.base64}`;
      }
      onImageSaved(imgaeBase64);
    });
  } else {
    onImageSaved(imgaeBase64);
    showError(
      'Aplikasi membutuhkan akses ke penyimpanan, silahkan ubah perizinkan pada pengaturan',
    );
  }
};
