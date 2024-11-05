import {ScrollView, View, StyleSheet} from 'react-native'
import { Avatar, Text, TextInput, Button} from 'react-native-paper';
import styles from '../styles/styles';
import React, { useState } from 'react';

const ResetPass = () => {
    const [text, setText] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [togglePassword, setTogglePassword] = useState(false);
    return (
        <View style={loginStyle.container}>
            <View style={{...loginStyle.section,...loginStyle.reglogoBox, marginBottom: 0}}>
                <Avatar.Image style={{ backgroundColor: 'transparent'}}source={require("../assets/avatar.jpg")}size={100}/>
                <Text variant='headlineMedium' style={{marginTop: 10, color: '#ffe5ec'}}>Butterfly App</Text>
                <Text variant='displaySmall' style={{marginTop: 10, color: '#ffe5ec'}}>Reset my Password</Text>
                <Text variant='titleSmall' style={{marginTop: 10, color: '#ffe5ec', width: 340, textAlign: 'center', marginBottom: 0}}>Enter your email below to receive a secure code to reset your password and regain account access.</Text>
            </View>
            <View style={loginStyle.section}>
            <TextInput
                textContentType='emailAddress'
                style ={{...loginStyle.inputBox, marginTop: 0}}
                label="Email"
                value={text}
                onChangeText={text => setText(text)}
                mode='outlined'
                left={<TextInput.Icon icon="email"/>}
            />
            <Button style={{...loginStyle.buttonBox, width: 300, marginTop: 10, backgroundColor: '#ffe5ec'}} icon="email-fast-outline" mode="contained-tonal" onPress={() => console.log('CODE-SENT')}>Email Code</Button>
            </View>
        </View>
    )
}

export default ResetPass

const loginStyle = StyleSheet.create(styles)