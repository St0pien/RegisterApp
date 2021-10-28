import React, { useEffect, useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import { API } from '../constants';
import Button from '../components/Button';
import User from '../components/User';

const Admin = (props) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await fetch(API);
            setUsers(await res.json());
        })();
    }, []);

    const onDelete = async (id) => {
        const res = await fetch(`${API}?id=${id}`, {
            method: "DELETE"
        });
        setUsers(await res.json());
    }

    return (
        <View>
            <Button onPress={() => props.navigation.navigate("Home")}>
                <Text>Back to login page</Text>
            </Button>
            <FlatList contentContainerStyle={{ paddingBottom: 100 }} data={users} keyExtractor={(item) => item.id.toString()} renderItem={({ item }) => <User onDelete={onDelete} navigation={props.navigation} user={item} />} />
        </View>
    )
}

export default Admin;
