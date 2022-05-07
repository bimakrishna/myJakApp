import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import store from './app/redux/store';
import MainApp from './app/views/MainApp';

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;
