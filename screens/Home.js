import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

/* Components */
import Header from '../components/Header';
import Remark from '../components/Remark';

const Home = () => {
  const [data, setData] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('https://corona.lmao.ninja/v2/all')
      .then(response => response.json())
      .then(json => setData(json));
  };

  return (
    <View>
      <Header lastUpdated={data.todayCases} />
      <ScrollView>
        <View style={styles.alignCent}>
          <Remark
            title={'Confirmed Cases'}
            result={data.cases}
            fetchData={fetchData}
            styles={{color: '#136a8a'}}
          />
          <Remark
            title={'Deaths'}
            result={data.deaths}
            fetchData={fetchData}
            styles={{color: '#8a1313'}}
          />
          <Remark
            title={'Recovered'}
            result={data.recovered}
            fetchData={fetchData}
            styles={{color: '#138a49'}}
          />
          <Remark
            title={'Active'}
            result={data.active}
            fetchData={fetchData}
            styles={{color: '#138a49'}}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  alignCent: {
    paddingTop: '5%',
    alignItems: 'center',
  },
});

export default Home;
