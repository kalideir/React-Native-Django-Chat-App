/* eslint-disable @typescript-eslint/no-unsafe-return */
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import { goBack } from '../../navigation/navigation-serivce';

interface IProps {
  title: string,
  subtitle?: string,
}

const Header = ({title, subtitle} : IProps) : JSX.Element => {

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');
  return (
    <Appbar.Header style={styles.container}>
      <Appbar.Action icon="chevron-left" onPress={goBack} />
      <Appbar.Content title={title} subtitle={subtitle || ''} />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 0,
    shadowOpacity: 0,
  }
})


export default Header;