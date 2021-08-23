/* eslint-disable @typescript-eslint/no-unsafe-return */
import moment from 'moment';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableRipple, useTheme } from 'react-native-paper';
import { Avatar } from 'react-native-paper';
import { height, width } from '../../constants';
import globalStyles from '../../styles/global';
import { Divider, HorizontalPadding } from '../shared';
import { Footer, Secondary, Title } from '../typography';


const Record = () : JSX.Element => {
  const theme = useTheme();
  const styles = makeStyles(theme.colors);
  return (
    <TouchableRipple onPress={() => {}}>
      <HorizontalPadding spacing={10}>
        <View style={[styles.container, globalStyles.rcfs]}>
          <View style={styles.left}>
            <Avatar.Image size={width * 0.10} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgSljH79mLE4arfUoYGRWV23SGYA6JjrmcVQ&usqp=CAU'}} />
          </View>
          <View style={[styles.center]}>
            <View style={[styles.header, globalStyles.rcsb]}>
              <Title>Full name</Title>
              <Secondary>{moment().format('dddd HH:MM')}</Secondary>
            </View>
            <Divider />
            <View style={styles.message}>
              <Footer>{'lorem ipsum message which is highly readable'}</Footer>
            </View>
          </View>
        </View>
      </HorizontalPadding>
    </TouchableRipple>
  )
};

const makeStyles = (colors) => StyleSheet.create({
  container: {
    height: height * 0.1,
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
  },
  right: {

  },
  header: {
    
  },
  message: {
  
  }
})


export default Record;