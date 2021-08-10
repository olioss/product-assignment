import * as React from 'react';
import {StyleSheet, Text, TextInput, TextInputProps, View} from "react-native";
import Colors from "../../variables/Colors";
import Layouts from "../../variables/Layout";

interface FormInputProps extends TextInputProps {
    label: String,
    required: boolean
}

const FormInput: React.FC<FormInputProps> = ({  onChangeText,label, required, ...props }) => {
    return (
        <View style={styles.formControl}>
            <Text style={styles.label}>{label}{required && <Text style={styles.requiredText}>*</Text>}</Text>
            <TextInput autoCorrect={false} style={styles.input} onChangeText={onChangeText} {...props} />
        </View>
    );
};

const styles = StyleSheet.create({
    formControl:{
        marginBottom: Layouts.verticalSpacing
    },
    label:{
        marginBottom: 10
    },
    requiredText:{
        color: Colors.red
    },
    input:{
        borderColor: Colors.gray,
        borderWidth: 1,
        fontSize: Layouts.fontSizeBase,
        paddingHorizontal: Layouts.horizontalSpacing,
        paddingVertical: 10
    }
});

export default FormInput
