import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Button, Surface } from 'react-native-paper';
import { height } from '../../constants';
import globalStyles from '../../styles/global';
import { Input } from '../shared';
import { Description, Title } from '../typography';


const Info = () : JSX.Element => {
  return (
    <View style={styles.container}>
      <Surface style={[globalStyles.ccc, styles.top]}>
        <Avatar.Image source={{uri: 'https://robohash.org/praesentiumquivoluptatibus.png?size=50x50&set=set1'}} style={styles.avatar} size={100} />
        <Title>Ali H. Dulaimi</Title>
        <Description>@alihdulaimi</Description>
      </Surface>
      <Surface style={styles.form}>
        <Input label="First Name" placeholder="username" />
        <Input label="Last Name" placeholder="last name" />
        <Input label="User Name" placeholder="username" editable={true} />
        <Input label="Email" placeholder="email" editable={true} />
        <Input label="Password" placeholder="Password" secure={true} />
        <Button>Save</Button>
      </Surface>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    paddingVertical: height * 0.01,
    marginBottom: height * 0.001,
  },
  avatar: {
    marginBottom: height * 0.02,
  },
  form: {
    padding: 10,
    paddingBottom: height * 0.25
  }
})


export default Info;