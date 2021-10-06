import React from 'react';
import { StyleSheet, View, SectionList } from 'react-native';
import { Section } from '.';
import Friend from './Friend';
import contacts from './data';
import { width } from '../../constants';



const FriendsList = () : JSX.Element => (
  <View style={styles.container}> 
    <SectionList
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.content}
      sections={contacts}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <Friend item={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Section>{title}</Section>
      )}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
  },
  content: {
    marginHorizontal: 0,
    padding: 0,
    margin: 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
  },
  title: {
    fontSize: 24
  }
});

export default FriendsList;