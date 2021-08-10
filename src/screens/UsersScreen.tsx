import React, {useEffect, useState} from 'react';
import {FlatList, Image, RefreshControl, SafeAreaView, StyleSheet, Switch, Text, View} from "react-native";
import {UserInterface, UsersInterface} from "../redux/types";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/reducers";
import Card from "../components/common/Card";
import MessageBox from "../components/MessageBox";
import {fetchUsers, setUserActivationStatus} from "../redux/actions";
import Layouts from "../variables/Layout";

const UsersScreen: React.FC = ()=>{
    const dispatch = useDispatch();
    const users: UsersInterface = useSelector((state: RootState) => state.users)
    const [refreshing, setRefreshing] = useState(false);
    const [loadEnded, setLoadEnded] = useState(false);

    useEffect(()=>{
        reloadUsers();
    },[])

    useEffect(()=>{
        setRefreshing(false)
    },[users])

    const reloadUsers = ()=>{
        dispatch(fetchUsers(0))
        setLoadEnded(false)
    }

    const onRefresh = () => {
        setRefreshing(true);
        reloadUsers();
    };

    const onLoadMore = ()=>{
        if(!users.loading && !loadEnded && users.data.length<users.total){
            dispatch(fetchUsers(users.page + 1))
        }else{
            setLoadEnded(true)
        }
    }

    const onUserToggle = ({value,userId}: { value: boolean; userId: string; })=>{
        dispatch(setUserActivationStatus({value, userId}))
    }

    const renderUserItem = ({ item }: { item: UserInterface })=>{
        return <Card>
            <View style={styles.userCardRow}>
                <Image style={styles.userImage} source={{uri:item.picture}} />
                <View style={styles.userDetail}>
                    <Text>Name: {item.firstName} {item.lastName}</Text>
                    <Text>Email: {item.email}</Text>
                    <Text>Active:</Text>
                    <Switch
                        onValueChange={value => onUserToggle({value, userId: item.id})}
                        value={item.isActive}
                    />
                </View>
            </View>


        </Card>
    }

    return <SafeAreaView style={styles.container}>
        <FlatList
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            scrollEnabled={users.data.length > 0}
            data={users.data}
            renderItem={renderUserItem}
            keyExtractor={(item: UserInterface) => 'user-'+item.id}
            contentContainerStyle={styles.viewWrapper}
            onEndReached={onLoadMore}
            removeClippedSubviews
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
    },
    userCardRow:{
        flexDirection: "row"
    },
    userCardColumn:{
        flexDirection: "column"
    },
    userImage:{
        width: 80,
        height: 80,
        marginRight: Layouts.horizontalSpacing
    },
    userDetail:{
        flex: 1
    }
});

export default UsersScreen
