import propTypes from 'prop-types';
import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import userIco from '../img/user.png';
import Button from './Button';

const User = ({ onDelete, navigation, user }) => {
    return (
        <View style={styles.container}>
            <View style={styles.info}>
                <Image style={styles.ico} source={userIco} />
                <Text style={styles.txt}>{user.id}: {user.login} {user.password}</Text>
            </View>
            <View style={styles.buttons}>

                <Button onPress={() => navigation.navigate("User", user)} fontSize={18}>
                    Details
                </Button>
                <Button onPress={() => onDelete(user.id)} fontSize={18}>
                    Delete
                </Button>
            </View>
        </View>
    )
}

export default User

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
    },
    info: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttons: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    ico: {
        width: 80,
        height: 80,
        marginRight: 15
    },
    txt: {
        flex: 1,
        fontWeight: 'bold',
        color: 'gray',
        fontSize: 16
    }
})

User.propTypes = {
    user: propTypes.object.isRequired
}
