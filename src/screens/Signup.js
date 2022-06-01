import React from 'react';
import login from './login';

import { SafeAreaView,  
         Image, 
         StyleSheet, 
         Dimensions, 
         ScrollView,
        KeyboardAvoidingView,
        Platform, 
        Button
        } from 'react-native';

import { Input } from '../components/utils';

export default function Signup( {navigation}) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#b2dfdb' }}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS == 'android' ? null : "padding"}
            >
                <ScrollView style={{ flex: 1 }}
                >
                    <Image
                        source={require('../../assets/expo-bg1.png')}
                        style={styles.logoStyle} />
                    <Input holder="Firstname"/>
                    <Input holder=" Lastname" />
                    <Input holder=" e-mail" />
                    <Input holder=" Password" />
                    <Button title="Sign Up" onPress ={() => 
                       navigation.navigate('login')} 
                    />
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}




const styles = StyleSheet.create({
    logoStyle: {
        resizeMode: 'contain',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * .3,
       
        marginTop: 30,
        marginBottom: 50,
    },
})