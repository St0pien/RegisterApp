import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native'
import Button from '../components/Button';
import { colors, API } from '../constants';


const Home = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onPress = async () => {
        const res = await fetch(API, {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        });
        const data = await res.json();
        if (data.ok) {
            props.navigation.navigate("Admin");
            setUsername('');
            setPassword('');
        } else {
            alert(`Message from server:\n${data.message}`);
        }
    }

    return (
        <KeyboardAvoidingView style={styles.screen}>
            <View style={styles.jumbo}>
                <Text style={styles.jumboTxt}>Register App Node</Text>
            </View>
            <View style={styles.inputs}>
                <Text style={styles.label}>username</Text>
                <TextInput onChangeText={txt => setUsername(txt)} value={username} style={styles.input} />

                <Text style={styles.label}>password</Text>
                <TextInput onChangeText={txt => setPassword(txt)} value={password} style={styles.input} />

                <Button onPress={onPress}>
                    <Text>Register</Text>
                </Button>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Home;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    jumbo: {
        backgroundColor: colors.primary,
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    jumboTxt: {
        color: 'white',
        fontSize: 52,
        textAlign: 'center'
    },
    inputs: {
        flex: 3,
        padding: 15
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    input: {
        fontSize: 20,
        color: colors.primaryDark,
        borderBottomWidth: 2,
        borderBottomColor: colors.primary,
        marginBottom: 15
    }
})
