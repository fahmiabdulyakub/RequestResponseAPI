import axios from 'axios';
import {reducer, server} from '../../../../constants';
import {showError} from '../../../../utils';

export const pembayaran = data => dispatch => {
  return new Promise(resolve => {
    dispatch({type: reducer.LOADING, value: true});
    axios
      .post(`${server.BASE_URL_9004}/v1/customer/cart/confirmation`, data)
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
