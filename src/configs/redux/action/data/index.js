import axios from 'axios';
import {reducer, server} from '../../../../constants';
import {showError} from '../../../../utils';

export const getUser = data => dispatch => {
  return new Promise(resolve => {
    dispatch({type: reducer.LOADING, value: true});
    axios
      .get(`${server.BASE_URL}/user?limit=10`, {
        headers: {'app-id': server.token},
      })
      .then(result => {
        dispatch({type: reducer.LOADING, value: false});
        resolve(result.data.data);
      })
      .catch(error => {
        const dataError = error.response.data;
        dispatch({type: reducer.LOADING, value: false});
        showError(dataError.message);
      });
  });
};

export const getProvinsi = () => dispatch => {
  return new Promise(resolve => {
    dispatch({type: reducer.LOADING, value: true});
    axios
      .get(`${server.URL_DAERAH}/provinsi`)
      .then(result => {
        dispatch({type: reducer.LOADING, value: false});
        resolve(result.data);
      })
      .catch(error => {
        const dataError = error.response.data;
        dispatch({type: reducer.LOADING, value: false});
        showError(dataError.message);
      });
  });
};

export const getKota = id => dispatch => {
  return new Promise(resolve => {
    dispatch({type: reducer.LOADING, value: true});
    axios
      .get(`${server.URL_DAERAH}/kota?id_provinsi=${id}`)
      .then(result => {
        dispatch({type: reducer.LOADING, value: false});
        resolve(result.data);
      })
      .catch(error => {
        const dataError = error.response.data;
        dispatch({type: reducer.LOADING, value: false});
        showError(dataError.message);
      });
  });
};
export const getKecamatan = id => dispatch => {
  return new Promise(resolve => {
    dispatch({type: reducer.LOADING, value: true});
    axios
      .get(`${server.URL_DAERAH}/kecamatan?id_kota=${id}`)
      .then(result => {
        dispatch({type: reducer.LOADING, value: false});
        resolve(result.data);
      })
      .catch(error => {
        const dataError = error.response.data;
        dispatch({type: reducer.LOADING, value: false});
        showError(dataError.message);
      });
  });
};
export const getKelurahan = id => dispatch => {
  return new Promise(resolve => {
    dispatch({type: reducer.LOADING, value: true});
    axios
      .get(`${server.URL_DAERAH}/kelurahan?id_kecamatan=${id}`)
      .then(result => {
        dispatch({type: reducer.LOADING, value: false});
        resolve(result.data);
      })
      .catch(error => {
        const dataError = error.response.data;
        dispatch({type: reducer.LOADING, value: false});
        showError(dataError.message);
      });
  });
};
