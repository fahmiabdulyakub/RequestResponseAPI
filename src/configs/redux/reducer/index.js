import {persistCombineReducers} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import data from './data';

const reducer = {
  data: data,
};

const configReduxPersist = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['data'],
};

const reduxPersistReducer = persistCombineReducers(configReduxPersist, reducer);

export default reduxPersistReducer;
