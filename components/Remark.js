import React from 'react';
import {TouchableOpacity, View, StyleSheet, Text} from 'react-native';

import Colors from '../constants/Colors';

const Remark = props => {
  return (
    <TouchableOpacity
      style={styles.caseBox}
      onPress={() => props.fetchData.bind(this)}>
      <View style={styles.alignCent}>
        <Text style={styles.caseBoxTitle}>{props.title}</Text>
      </View>

      <View style={styles.alignCent}>
        <Text style={styles.caseBoxResult}>{props.result}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  alignCent: {
    alignItems: 'center',
  },
  caseBox: {
    borderWidth: 1,
    width: '80%',
    paddingVertical: '5%',
    borderColor: Colors.primary,
    marginBottom: '10%',
  },
  caseBoxTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.secondary,
  },
  caseBoxResult: {
    fontSize: 25,
    color: Colors.tertiary,
  },
});

export default Remark;
