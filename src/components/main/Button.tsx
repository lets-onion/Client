import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, ViewStyle, TextStyle } from 'react-native';

interface Props {
    children: React.ReactNode;
    disabled?: boolean;
    onPress?: () => void;
}

const Button = ({ children, disabled, onPress, ...props }: Props) => {
    return (
        <TouchableOpacity
            style={[styles.button, disabled && styles.disabled]}
            onPress={disabled ? undefined : onPress}
            {...props}
        >
            <Text style={styles.buttonText}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        padding: 15,
        margin: 5,
        backgroundColor: '#cad3ff',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: 170
    } as ViewStyle,
    disabled: {
        opacity: 0.5,
    } as ViewStyle,
    buttonText: {
        fontSize: 18,
        textAlign: 'center',
        fontFamily: '온글잎 류류체'
    } as TextStyle,
});

export default Button;
