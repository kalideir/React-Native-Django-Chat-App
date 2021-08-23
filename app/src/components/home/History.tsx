/* eslint-disable @typescript-eslint/no-unsafe-return */
import * as React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Record from './Record';


const History = () : JSX.Element => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[1, 2, 3, 4, 5, 6]}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => <Record />}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
})


export default History;