import * as React from 'react';
import { NavigationContainerRef } from '@react-navigation/native';

// NavigationContainer is referred here - Check NavigationStack
export const navigationRef = React.createRef<NavigationContainerRef>();

interface Iparams {
    [key : string] : [value : unknown]
}

function navigate(name: string, params?: Iparams) : void {
  navigationRef.current?.navigate(name, params);
}

function goBack() : void{
  navigationRef.current?.goBack();
}

export default {
  navigate,
  goBack,
};
