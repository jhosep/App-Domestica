import React from 'react';
import {  StyleSheet, Text } from 'react-native';
 const CLabel = (props) => {
const {style= {}} = props;
    return (
            <Text style={[stext.text, style]}>{props.title}</Text>
    );
};

const stext = StyleSheet.create({
  

    text: {
        
        fontSize: 12,
        color: '#014A91',
        fontWeight: 'bold'
    },
});

export default CLabel;
