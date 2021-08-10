import React, {useState} from 'react';
import {Keyboard, SafeAreaView, StyleSheet, TouchableWithoutFeedback, View} from "react-native";
import Colors from "../variables/Colors";
import Card from "../components/common/Card";
import FormInput from "../components/common/FormInput";
import PrimaryButton from "../components/common/PrimaryButton";
import {useDispatch} from "react-redux";
import {addProduct} from "../redux/actions";

const AddProductScreen: React.FC = ()=>{

    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const onSubmit = ()=> {
        dispatch(addProduct({
            name,
            description,
            price: parseFloat(price) >=0 ? parseFloat(price) : 0
        }))
        clearForms();
    }

    const clearForms = ()=>{
        setName('');
        setDescription('');
        setPrice('');
        Keyboard.dismiss();
    }

    return <SafeAreaView style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{backgroundColor: 'red'}}>
            <View style={styles.viewWrapper}>
                <Card>
                    <FormInput
                        value={name}
                        onChangeText={setName}
                        label={'Name'}
                        required={true}
                    />
                    <FormInput
                        value={description}
                        onChangeText={setDescription}
                        label={'Description'}
                        required={true}
                        multiline
                        numberOfLines={4}
                    />
                    <FormInput
                        value={price}
                        onChangeText={setPrice}
                        required={true}
                        label={'Price'}
                        keyboardType={"numeric"}
                    />
                    <PrimaryButton title={"Add"} onPress={onSubmit} disabled={name.length === 0 || description.length === 0 || price.length === 0} />
                </Card>
            </View>
        </TouchableWithoutFeedback>


    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    viewWrapper:{
        padding: 20,
        flex: 1,
    },
    boxContainer:{
        backgroundColor: Colors.white
    }
});

export default AddProductScreen
