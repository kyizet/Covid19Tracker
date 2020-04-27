import React from 'react';
import {Text, View, Modal, StyleSheet, TouchableOpacity} from 'react-native';

import Colors from '../constants/Colors';

const DataModal = props => {
  return (
    <Modal visible={props.openModal} animationType="slide" transparent={true}>
      {props.selectedCountry === undefined ? (
        ''
      ) : (
        <View style={styles.container}>
          <View>
            <View>
              <Text style={styles.header}>Country Data</Text>
            </View>

            <View style={styles.dataWrapper}>
              <Text style={styles.title}>Country: </Text>
              <Text style={styles.data}>{props.selectedCountry.country}</Text>
            </View>

            <View style={styles.dataWrapper}>
              <Text style={styles.title}>Cases: </Text>
              <Text style={styles.data}>{props.selectedCountry.cases}</Text>
            </View>

            <View style={styles.dataWrapper}>
              <Text style={styles.title}>Deaths: </Text>
              <Text style={styles.data}>{props.selectedCountry.deaths}</Text>
            </View>

            <View style={styles.dataWrapper}>
              <Text style={styles.title}>Recovered: </Text>
              <Text style={styles.data}>{props.selectedCountry.recovered}</Text>
            </View>

            <View style={{borderBottomWidth: 0.5}} />

            <View style={styles.dataWrapper}>
              <Text style={styles.title}>Today Cases: </Text>
              <Text style={styles.data}>
                {props.selectedCountry.todayCases}
              </Text>
            </View>

            <View style={styles.dataWrapper}>
              <Text style={styles.title}>Today Deaths: </Text>
              <Text style={styles.data}>
                {props.selectedCountry.todayDeaths}
              </Text>
            </View>

            <View style={{borderBottomWidth: 0.5}} />

            <View style={styles.dataWrapper}>
              <Text style={styles.title}>Total tests: </Text>
              <Text style={styles.data}>{props.selectedCountry.tests}</Text>
            </View>

            <View style={styles.dataWrapper}>
              <Text style={styles.title}>Active: </Text>
              <Text style={styles.data}>{props.selectedCountry.active}</Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => {
              props.handleOpenModal();
            }}>
            <Text style={styles.close}>X</Text>
          </TouchableOpacity>
        </View>
      )}
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    opacity: 0.8,
  },
  data: {
    color: Colors.secondary,
    fontSize: 20,
  },
  dataWrapper: {
    flexDirection: 'row',
    paddingVertical: '1.5%',
  },
  title: {
    color: Colors.primary,
    fontSize: 20,
  },
  header: {
    color: Colors.primary,
    fontSize: 30,
    borderBottomWidth: 3,
    borderBottomColor: Colors.secondary,
    marginBottom: '5%',
    fontWeight: 'bold',
  },
  close: {
    fontWeight: 'bold',
    color: Colors.primary,
    fontSize: 30,
  },
});

export default DataModal;
