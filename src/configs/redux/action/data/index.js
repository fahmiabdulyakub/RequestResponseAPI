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
