import * as React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './configs';
import 'moment/locale/id';
import Toast from 'react-native-toast-message';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Profile} from './pages';

const Stack = createStackNavigator();

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Profile">
              <Stack.Screen
                name="Profile"
                component={Profile}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
          </NavigationContainer>
          <Toast ref={ref => Toast.setRef(ref)} />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
