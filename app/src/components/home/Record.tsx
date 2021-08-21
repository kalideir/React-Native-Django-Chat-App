/* eslint-disable @typescript-eslint/no-unsafe-return */
import moment from 'moment';
import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useTheme } from 'react-native-paper';
import { Avatar } from 'react-native-paper';
import { height, width } from '../../constants';
import globalStyles from '../../styles/global';


const Record = () : JSX.Element => {
  const theme = useTheme();
  const styles = makeStyles(theme.colors);
  return (
    <View style={[styles.container, globalStyles.rcfs]}>
      <View style={styles.left}>
        <Avatar.Image size={width * 0.10} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgSljH79mLE4arfUoYGRWV23SGYA6JjrmcVQ&usqp=CAU'}} />
      </View>
      <View style={[styles.center, globalStyles.rcsb]}>
        <Text>Full name</Text>
        <Text>{moment().format('YYYY/MM/DD')}</Text>
      </View>
      <View style={styles.right}>
        <Avatar.Icon size={24} icon="dots-horizontal" />
      </View>
    </View>
  )
};

const makeStyles = (colors) => StyleSheet.create({
  container: {
    height: height * 0.085,
    width: '100%',
    marginBottom: height * 0.004,
    backgroundColor: colors.surface,
    borderBottomColor: colors.disabled,
    borderBottomWidth: 1
  },
  left: {
    width: width * 0.10,
    marginRight: width * 0.025
  }, 
  center: {
    flex: 1,
    paddingRight: 10
  },
  right: {

  }
})


export default Record;