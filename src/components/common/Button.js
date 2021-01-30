import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children, style, labelStyle }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={[buttonStyle, style]}>
      <Text style={[textStyle, labelStyle]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};


const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    paddingTop: 7,
    paddingBottom: 7
  },
  buttonStyle: {
    width: 120,
    alignSelf: 'center',
    backgroundColor: '#36456a',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'white',
    marginLeft: 25,
    marginRight: 25
  }
};


export { Button };
