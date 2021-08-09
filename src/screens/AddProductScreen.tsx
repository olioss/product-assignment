import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from "react-native";

const AddProductScreen: React.FC = ()=>{
    return <SafeAreaView style={styles.container}>
        <Text>Add product</Text>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

export default AddProductScreen
