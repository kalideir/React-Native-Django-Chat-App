import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Surface } from 'react-native-paper';
import { height } from '../../constants';
import globalStyles from '../../styles/global';
import { HorizontalPadding, Input } from '../shared';
import { Description, Title } from '../typography';


const Info = () : JSX.Element => {
  return (
    <View style={styles.container}>
      <HorizontalPadding spacing={10}>
        <Surface style={[globalStyles.ccc, styles.top]}>
          <Avatar.Image source={{uri: 'https://robohash.org/praesentiumquivoluptatibus.png?size=50x50&set=set1'}} style={styles.avatar} size={100} />
          <Title>Ali H. Dulaimi</Title>
          <Description>@alihdulaimi</Description>
        </Surface>
        <Surface style={styles.form}>
          <Input label="First Name" placeholder="username" />
          <Input label="Last Name" placeholder="last name" />
          <Input label="User Name" placeholder="username" disabled={true} />
          <Input label="Email" placeholder="email" disabled={true} />
          <Input label="Password" placeholder="Password" secure={true} />
        </Surface>
      </HorizontalPadding>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  top: {
    marginTop: height * 0.005,
    paddingVertical: height * 0.01,
  },
  avatar: {
    marginBottom: height * 0.02,
  },
  form: {
    marginVertical: 10,
    padding: 10,
  }
})


export default Info;