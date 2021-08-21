import React from 'react';
import { Appbar } from 'react-native-paper';

interface IProps {
    icon: string,
    action?: () => any
}


const HeaderAction = ({icon, action} : IProps) : JSX.Element =>  {

  return (
    <Appbar.Action icon={icon} onPress={() => {}} />
  );
}


export default HeaderAction;