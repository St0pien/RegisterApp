import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { colors } from '../constants';
import userIco from '../img/user.png'

const Details = ({ route }) => {
    const { login, password, timestamp } = route.params;
    return (
        <View style={styles.container}>
            <Image style={styles.ico} source={userIco} />
            <Text style={styles.txt}><Text>login: </Text><Text style={styles.value}>{login}</Text></Text>
            <Text style={styles.txt}><Text>password: </Text><Text style={styles.value}>{password}</Text></Text>
            <Text style={styles.txt}><Text>registered: </Text><Text style={styles.value}>{new Date(timestamp).toLocaleString()}</Text></Text>
        </View>
    )
}

export default Details

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: '30%',
    },
    ico: {
        width: 250,
        height: 250
    },
    txt: {
        fontSize: 22,
        marginVertical: 5,
    },
    value: {
        color: colors.primaryDark,
        fontWeight: 'bold'
    }
})
