import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
// import styles from 'react-native-calendar/components/styles';
import RootStack from './RootStack';
import {LogContextProvider} from '../contexts/LogContext';
// import {SearchContextProvider} from './contexts/SearchContext';
// import {Header, Contents, Footer} from './components/Layout';

function Calendar() {
  return (
        <LogContextProvider>
          <RootStack />
        </LogContextProvider>
  );
}

export default Calendar;