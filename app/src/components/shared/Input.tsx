import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { TextInput, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { height } from '../../constants';
import globalStyles from '../../styles/global';
import { Description } from '../typography';

interface IProps {
    placeholder: string,
    secure?: boolean,
    label: string,
    disabled?: boolean
}


const Input = ({placeholder, secure, label, disabled} : IProps) : JSX.Element => {
  const [text, setText] = React.useState('');
  const theme = useTheme();
  const styles = makeStyles(theme.colors);

  const [focused, setFocused] = useState(false);
  return (
    <View style={styles.container}>
      <View style={[styles.description, globalStyles.rcfs]}>
        <Description>{label}</Description>
      </View>
      <TextInput
        placeholder={placeholder}
        value={text}
        secureTextEntry={secure || false}
        editable={disabled || false}
        onChangeText={text => setText(text)}
        onFocus={() => setFocused(true)}
        onEndEditing={() => setFocused(false)}
        style={[styles.input, focused && {borderBottomColor: theme.colors.primary}]} 
      />
    </View>
  );
};

const makeStyles = (colors) => StyleSheet.create({
  container: {
    marginBottom: height * 0.02,
  },
  description: {
    height: height * 0.03,
    marginBottom: 5
  },
  input: {
    backgroundColor: colors.background,
    height: height * 0.065,
    paddingLeft: 10,
    borderBottomWidth: 1,
    paddingVertical: 0,
    borderBottomColor: colors.disabled
  },
})

export default Input;