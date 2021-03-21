import Toast from 'react-native-toast-message';

export const showError = (message, description, onPress, time) => {
  Toast.show({
    type: 'error',
    text1: message,
    text2: description,
    position: 'top',
    visibilityTime: time ? time : 2000,
    topOffset: 5,
    onPress: onPress,
  });
};

export const showSuccess = (message, description, onPress, time) => {
  Toast.show({
    type: 'success',
    text1: message,
    text2: description,
    position: 'top',
    visibilityTime: time ? time : 2000,
    topOffset: 5,
    onPress: onPress,
  });
};

export const showInfo = (message, description, onPress, time) => {
  Toast.show({
    type: 'info',
    text1: message,
    text2: description,
    position: 'top',
    visibilityTime: time ? time : 2000,
    topOffset: 5,
    onPress: onPress,
  });
};

export const messageNextFitur = () => {
  showInfo('Sabar kawan', 'fitur ini masih dalam pengembangan');
};
