/* eslint-disable @typescript-eslint/no-unsafe-return */
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableRipple, useTheme } from 'react-native-paper';
import { Avatar } from 'react-native-paper';
import { height, width } from '../../constants';
import globalStyles from '../../styles/global';
import Icon from '../../themes/icons';
import { HorizontalPadding } from '../shared';
import { Title } from '../typography';


type IItem = {
  id: number,
  username: string,
  first_name: string,
  last_name: string,
  email: string,
  avatar: string
}

interface IProps {
  item: IItem
}

const Friend = ({item} : IProps) : JSX.Element => {
  const theme = useTheme();
  const styles = makeStyles(theme.colors);
  return (
    <HorizontalPadding spacing={10}>
      <View style={[styles.container, globalStyles.rcfs]}>
        <View style={styles.left}>
          <Avatar.Image size={width * 0.10} source={{uri: item.avatar}} />
        </View>
        <View style={[styles.center, globalStyles.rcsb]}>
          <Title>{`${item.first_name} ${item.last_name}`}</Title>
        </View>
        <View style={styles.right}>
          <TouchableRipple onPress={() => {}}>
            <Icon color={theme.colors.primary} size={24} type="feather" name="more-horizontal" />
          </TouchableRipple>
        </View>
      </View>
    </HorizontalPadding>
  )
};

const makeStyles = (colors) => StyleSheet.create({
  container: {
    height: height * 0.085,
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
    paddingRight: 10
  },
  right: {

  }
})


export default Friend;