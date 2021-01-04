import 'react-native-gesture-handler';
import React from 'react';
import Container from './src/screens/Container';
import { Provider } from 'react-redux';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <Container></Container>
    </Provider>
  );
};


export default App;


