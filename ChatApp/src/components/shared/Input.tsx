import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { TextInput, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { height } from '../../constants';
import globalStyles from '../../styles/global';
import { Description, Title } from '../typography';

interface IProps {
    placeholder: string,
    secure?: boolean,
    label: string,
    editable?: boolean,
    showLabel?: boolean
}


const Input = ({placeholder, secure=false, label, editable=true, showLabel=false} : IProps) : JSX.Element => {
  const [text, setText] = React.useState('');
  const theme = useTheme();
  const styles = makeStyles(theme.colors);

  const [focused, setFocused] = useState(false);
  return (
    <View style={styles.container}>
      {showLabel && (
        <View style={[styles.description, globalStyles.rcfs]}>
          <Description>{label}</Description> 
        </View>
      )}
      <TextInput
        placeholder={placeholder}
        value={text}
        secureTextEntry={secure}
        editable={editable}
        onChangeText={text => setText(text)}
        onFocus={() => setFocused(true)}
        onEndEditing={() => setFocused(false)}
        style={[styles.input, focused && {borderBottomColor: 'orange', borderBottomWidth: 2}]} 
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
    backgroundColor: colors.surface,
    height: height * 0.065,
    paddingLeft: 10,
    borderBottomWidth: 0.5,
    paddingVertical: 0,
    borderBottomColor: colors.backdrop,
  },
})

export default Input;