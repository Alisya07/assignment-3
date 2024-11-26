import {ScrollView, View, StyleSheet} from 'react-native'
import { Avatar, Text, TextInput, Button} from 'react-native-paper';
import styles from '../styles/styles';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';


const Login = () => {
    const router = useRouter();
    const [text, setText] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [togglePassword, setTogglePassword] = useState(false);
    return (
        <View style={loginStyle.container}>
            <View style={{...loginStyle.section,...loginStyle.logoBox}}>
                <Avatar.Image style={{ backgroundColor: 'transparent'}}source={require("../assets/avatar.jpg")}size={100}/>
                <Text variant='headlineLarge' style={{marginTop: 10, color: '#ffe5ec'}}>Butterfly App</Text>
            </View>
            <View style={loginStyle.section}>
            <TextInput
                textContentType='emailAddress'
                style ={{...loginStyle.inputBox, marginTop: 45}}
                label="Email"
                value={text}
                onChangeText={text => setText(text)}
                mode='outlined'
                left={<TextInput.Icon icon="email"/>}
            />
            <TextInput
                style ={{...loginStyle.inputBox, marginBottom: 20}}
                textContentType='password'
                label="Password"
                value={password}
                onChangeText={password => setPassword(password)}
                mode='outlined'
                left={<TextInput.Icon icon="key"/>}
                right={<TextInput.Icon onPress={() => setTogglePassword(!togglePassword)}
                icon={togglePassword ? "eye" : "eye-off"} size={18}/>}
                secureTextEntry={!togglePassword}
            />
            </View>
            <View style={loginStyle.section}> 
                <Button style={{...loginStyle.buttonBox, width: 300, backgroundColor: '#ffe5ec'}} icon="login" mode="contained-tonal" onPress={() => router.replace("dashboard")}>Login</Button>
                <Button style={{...loginStyle.buttonBox, marginTop: 0, width: 300}}  textColor="#ffe5ec" mode="text" onPress={() => router.push("register")}>Don't have an account yet?</Button>
                <Button style={{...loginStyle.buttonBox, marginTop: 0, width: 300}}  textColor="#ffe5ec" mode="text" onPress={() => router.push("passwordreset")}>Forgot Password</Button>
            </View>
            
        </View>
    )
}

export default Login

const loginStyle = StyleSheet.create(styles)