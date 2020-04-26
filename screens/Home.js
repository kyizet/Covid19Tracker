import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import axios from 'react-native-axios';

/* Components */
import Header from '../components/Header';
import Remark from '../components/Remark';

const Home = () => {
  const [data, setData] = useState(0);
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    console.log('BEFORE');
    axios
      .post('https://covid19.mathdro.id/api')
      .then(response => console.log('THE RESPONSE: ' + response));
    console.log('AFTER');
  }, []);

  return (
    <View>
      <Header lastUpdated={data.lastUpdate} />
      <ScrollView>
        <View style={styles.alignCent}>
          <Remark title={'Confirmed Cases'} result={data.confirmed} />
          <Remark title={'Deaths'} result={data.deaths} />
          <Remark title={'Recovered'} result={data.recovered} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  alignCent: {
    alignItems: 'center',
  },
});

export default Home;

/**
 * 
 * 
          <Remark
            title={'Confirmed Cases'}
            result={data.confirmed.value}
            fetchData={fetchData}
          />
          <Remark
            title={'Deaths'}
            result={data.deaths.value}
            fetchData={fetchData}
          />
          <Remark
            title={'Recovered'}
            result={data.recovered.value}
            fetchData={fetchData}
          />
 */
