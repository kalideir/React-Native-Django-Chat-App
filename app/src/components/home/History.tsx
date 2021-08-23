/* eslint-disable @typescript-eslint/no-unsafe-return */
import * as React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Record from './Record';
import history from './data';


const History = () : JSX.Element => {
  return (
    <View style={styles.container}>
      <FlatList
        data={history}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => <Record item={item} />}
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