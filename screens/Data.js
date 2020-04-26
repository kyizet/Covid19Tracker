import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';

import Header from '../components/Header';

const Data = () => {
  const [data, setData] = useState(0);

  useEffect(() => {
    fetch('https://covid19.mathdro.id/api')
      .then(response => response.json())
      .then(json => setData(json));
  });
  return (
    <View>
      <Header lastUpdated={data.lastUpdate} />
      <ScrollView>
        <View style={styles.alignCent} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  alignCent: {
    alignItems: 'center',
  },
});
export default Data;
