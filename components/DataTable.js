import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Colors from '../constants/Colors';

import DataModal from './DataModal';

const DataTable = props => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState();
  let temp = props.data;
  let cases = [];

  const handleOpenModal = () => {
    setOpenModal(false);
  };

  for (let i in temp) {
    cases.push(
      <TouchableOpacity
        style={styles.dataWrapper}
        key={i}
        onPress={() => {
          setOpenModal(true);
          setSelectedCountry(i);
        }}>
        <View style={styles.innerDataWrapper}>
          <View style={{flex: 1, paddingLeft: '3%'}}>
            <Text style={styles.dataText}>{temp[i].country}</Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.dataText}>{temp[i].cases}</Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.dataText}>{temp[i].deaths}</Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.dataText}>{temp[i].recovered}</Text>
          </View>
        </View>
      </TouchableOpacity>,
    );
  }
  return (
    <View>
      <View style={styles.headerWrapper}>
        <View style={{flex: 1, paddingLeft: '3%'}}>
          <Text style={styles.header}>Country</Text>
        </View>
        <View style={{flex: 1}}>
          <Text style={styles.header}>Confirmed</Text>
        </View>
        <View style={{flex: 1}}>
          <Text style={styles.header}>Death</Text>
        </View>
        <View style={{flex: 1}}>
          <Text style={styles.header}>Recovered</Text>
        </View>
      </View>

      <ScrollView>
        <View>{cases}</View>
        <DataModal
          openModal={openModal}
          handleOpenModal={handleOpenModal}
          selectedCountry={props.data[selectedCountry]}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderBottomColor: Colors.tertiary,
    borderBottomWidth: 0.5,
    paddingBottom: 20,
  },
  header: {
    color: Colors.primary,
    fontWeight: 'bold',
  },
  dataWrapper: {
    borderBottomColor: Colors.tertiary,
    borderBottomWidth: 0.5,
    paddingVertical: 20,
  },
  innerDataWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  dataText: {
    color: Colors.secondary,
  },
});

export default DataTable;
