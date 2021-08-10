import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, TouchableOpacityProps} from "react-native";
import Colors from "../../variables/Colors";
import Layouts from "../../variables/Layout";

interface FormInputProps extends TouchableOpacityProps {
    title: String,
}

const PrimaryButton: React.FC<FormInputProps> = ({  title, onPress,disabled }) => {
    return (
        <TouchableOpacity style={[styles.button, disabled && styles.disabled]} onPress={onPress} disabled={disabled}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.primary,
        borderRadius: Layouts.borderRadius,
        paddingVertical: 10
    },
    title:{
        color: Colors.white,
        fontSize: Layouts.fontSizeBase,
    },
    disabled:{
        opacity: 0.5
    }
});

export default PrimaryButton
