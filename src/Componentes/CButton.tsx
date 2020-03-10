import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

 const CButton = (props) => {
    const { title = 'Enter', style = {}, textStyle = {}, disabled=false,onPress } = props;

    return (
        <TouchableOpacity onPress={onPress} disabled={disabled} style={[styles.button, style]}>
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        height: 36,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff9800',
        shadowColor: '#2AC062',
        shadowOpacity: 0.4,
        shadowOffset: { height: 10, width: 0 },
        shadowRadius: 20,
        paddingLeft:30,
        paddingRight:30
    },

    text: {
        fontSize: 18,
        textTransform: 'uppercase',
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
});

export default CButton;