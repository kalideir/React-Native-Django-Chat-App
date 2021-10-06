import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

interface IProps {
  title: string,
  subtitle?: string,
}

const Header = ({title, subtitle} : IProps) : JSX.Element => {

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');
  return (
    <Appbar.Header style={styles.container}>
      <Appbar.Content title={title} subtitle={subtitle || ''} />
      <Appbar.Action icon="dots-horizontal" onPress={_handleMore} />
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