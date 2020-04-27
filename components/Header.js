import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Colors from '../constants/Colors';

const Header = props => {
  return (
    <View style={styles.titleBG}>
      <Text style={styles.title}>Covid-19 Tracker</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleBG: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: '5%',
    borderBottomWidth: 0.5,
    borderColor: Colors.primary,
    marginBottom: '5%',
  },
  title: {
    fontSize: 30,
    color: Colors.primary,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  info: {
    fontWeight: 'bold',
    fontSize: 10,
    color: Colors.secondary,
  },
});

export default Header;
