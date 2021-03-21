import Geolocation from '@react-native-community/geolocation';
import GetLocation from 'react-native-get-location';
import {showError} from '../showMessage';

export const getLiveLocation = meter => {
  return new Promise(resolve => {
    Geolocation.watchPosition(
      live => {
        resolve(live.coords);
      },
      error => {
        if (error.PERMISSION_DENIED) {
          showError('Aplikasi tidak mendapatkan izin mengakses lokasi');
        } else if (error.POSITION_UNAVAILABLE) {
          showError('GPS hp anda tidak aktif');
        } else if (error.TIMEOUT) {
          showError('Timeout mengakses lokasi hp anda');
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
        distanceFilter: meter,
        maximumAge: 1000,
      },
    );
  });
};

export const getLocation = () => {
  return new Promise(resolve => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 150000,
    })
      .then(location => {
        resolve(location);
      })
      .catch(error => {
        const {code} = error;
        if (code === 'UNAVAILABLE') {
          showError('GPS hp anda tidak aktif');
        }
        if (code === 'TIMEOUT') {
          showError('Timeout mengakses lokasi hp anda');
        }
        if (code === 'UNAUTHORIZED') {
          showError('Aplikasi tidak mendapatkan izin mengakses lokasi');
        }
      });
  });
};
