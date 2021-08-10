import React from "react";
import Card from "./common/Card";
import {StyleSheet, Text} from "react-native";
import Layouts from "../variables/Layout";

interface MessageBoxProps {
    message: String
}
const MessageBox: React.FC<MessageBoxProps> = ({message})=>{
    return <Card>
        <Text style={styles.messageText}>{message}</Text>
    </Card>
}

const styles = StyleSheet.create({
    messageText:{
        fontSize: Layouts.fontSizeBase
    }
});

export default MessageBox
