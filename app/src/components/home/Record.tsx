/* eslint-disable @typescript-eslint/no-unsafe-return */
import moment from 'moment';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableRipple, useTheme } from 'react-native-paper';
import { Avatar } from 'react-native-paper';
import { height, width } from '../../constants';
import {navigate} from '../../navigation/navigation-serivce';
import globalStyles from '../../styles/global';
import { Divider } from '../shared';
import { Footer, Secondary, Title } from '../typography';

type IItem = {
  id: number,
  fullName: string,
  avatar: string,
  date: string,
  message: string
}

interface IProps {
  item: IItem
}


const Record = ({item} : IProps) : JSX.Element => {
  const theme = useTheme();
  const styles = makeStyles(theme.colors);
  return (
    <TouchableRipple onPress={() => navigate('Chat')}>
      <View style={[styles.container, globalStyles.rcfs]}>
        <View style={styles.left}>
          <Avatar.Image size={width * 0.10} source={{uri: item.avatar}} />
        </View>
        <View style={[styles.center]}>
          <View style={[styles.header, globalStyles.rcsb]}>
            <Title>{item.fullName}</Title>
            <Secondary>{moment(item.date).format('dddd HH:MM')}</Secondary>
          </View>
          <Divider />
          <View style={styles.message}>
            <Footer>{item.message.substring(0, 60)}</Footer>
          </View>
        </View>
      </View>
    </TouchableRipple>
  )
};

const makeStyles = (colors) => StyleSheet.create({
  container: {
    height: height * 0.1,
    paddingHorizontal: 10,
    width: '100%',
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
  },
  right: {

  },
  header: {
    
  },
  message: {
  
  }
})


export default Record;