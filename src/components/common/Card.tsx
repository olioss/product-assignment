import * as React from 'react';
import {StyleSheet, View} from "react-native";
import Colors from "../../variables/Colors";
import Layouts from "../../variables/Layout";

const Card: React.FC = ({ children }) => {
    return (
        <View style={styles.boxContainer}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    boxContainer:{
        backgroundColor: Colors.white,
        padding: 20,
        marginBottom: Layouts.verticalSpacing,
        borderRadius: 5
    }
});

export default Card
