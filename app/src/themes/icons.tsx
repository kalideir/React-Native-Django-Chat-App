import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const ICON_TYPE = {
  ANT_ICON: 'ant',
  FONT_AWESOME: 'fontawesome',
  MATERIAL_ICONS: 'material',
  FEATHER_ICONS: 'feather',
  MATERIAL_COMMUNITY: 'materialcommunity'
};

type IStyle = {
  [style : string] : unknown
}


interface ICustomIcon {
  type: string,
  name: string,
  size: number,
  style?: IStyle,
  color: string,
}

const CustomIcon = ({ type, name, color, size, style } : ICustomIcon) : JSX.Element => {
  
  let Element = Feather;

  switch (type) {
    case ICON_TYPE.ANT_ICON:
      Element = AntDesign;
      break;


    case ICON_TYPE.MATERIAL_ICONS:
      Element = MaterialIcons;
      break;


    case ICON_TYPE.FONT_AWESOME:
      Element = FontAwesome;
      break;

    case ICON_TYPE.MATERIAL_COMMUNITY:
      Element = MaterialCommunityIcons;
      break;

  }

  return (
    <Element
      name={name}
      size={size}
      color={color}
      style={[style]}
    />
  );
};

export default CustomIcon;