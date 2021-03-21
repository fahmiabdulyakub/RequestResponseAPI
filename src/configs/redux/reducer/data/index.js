import {reducer} from '../../../../constants';

const initialStateRoot = {
  data: [],
  latitude: 0,
  longitude: 0,
  loading: false,
};

const dataUser = (state = initialStateRoot, action) => {
  switch (action.type) {
    case reducer.GET_DATA:
      return {
        ...state,
        data: action.value,
      };
    case reducer.PROFILE_LATITUDE:
      return {
        ...state,
        latitude: action.value,
      };
    case reducer.LOADING:
      return {
        ...state,
        loading: action.value,
      };
    case reducer.PROFILE_LONGITUDE:
      return {
        ...state,
        longitude: action.value,
      };
    default:
      return state;
  }
};

export default dataUser;
