import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from "react-native";
import {useSelector} from "react-redux";
import {RootState} from "../redux/reducers";
import {ProductInterface} from "../redux/types";
import Card from "../components/common/Card";
import MessageBox from "../components/MessageBox";

const ListProductsScreen: React.FC = ()=>{
    const products = useSelector((state: RootState) => state.products)

    const renderProductItem = ({ item }: { item: ProductInterface })=>{
        return <Card>
            <Text>Name: {item.name}</Text>
            <Text>Description: {item.description}</Text>
            <Text>Price: {item.price}</Text>
        </Card>
    }

    const renderEmptyProduct = ()=>{
        return <View style={styles.emptyViewContainer}>
            <MessageBox message={"Sorry, there is no products available."} />
        </View>
    }

    return <SafeAreaView style={styles.container}>
        <FlatList
            scrollEnabled={products.length > 0}
            data={products}
            renderItem={renderProductItem}
            keyExtractor={(item: ProductInterface, index) => 'product-'+index}
            ListEmptyComponent={renderEmptyProduct}
            contentContainerStyle={styles.viewWrapper}
        />
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    viewWrapper:{
        padding: 20,
        flexGrow: 1,
    },
    emptyViewContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default ListProductsScreen
