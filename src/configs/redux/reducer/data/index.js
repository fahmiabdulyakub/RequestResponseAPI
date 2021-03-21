import {reducer} from '../../../../constants';

const initialStateRoot = {
  data: [],
};

const dataUser = (state = initialStateRoot, action) => {
  switch (action.type) {
    case reducer.GET_DATA:
      return {
        ...state,
        data: action.value,
      };
    default:
      return state;
  }
};

export default dataUser;
