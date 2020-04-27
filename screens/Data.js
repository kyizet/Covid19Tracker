import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';

import Header from '../components/Header';

import DataTable from '../components/DataTable';

const Data = () => {
  const [data, setData] = useState(0);

  useEffect(() => {
    fetchData();
  });

  const fetchData = () => {
    fetch('https://corona.lmao.ninja/v2/countries')
      .then(response => response.json())
      .then(json => setData(json));
  };

  return (
    <View>
      <Header lastUpdated={data.todayCases} />
      <DataTable data={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  alignCent: {
    alignItems: 'center',
  },
});
export default Data;
