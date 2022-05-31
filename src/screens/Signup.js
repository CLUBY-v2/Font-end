import React from 'react';
import login from './login';

import { SafeAreaView, 
         View, 
         Text, 
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
                        source={require('../../assets/smu-220221-1.png')}
                        style={styles.logoStyle} />
                    <Input holder="Name"/>
                    <Input holder=" e-mail" />
                    <Input holder=" password" />
                    <Button title='Signup' />
                    <Button title="login" onPress ={() => 
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
        tintColor: 'black',
        marginTop: 30,
        marginBottom: 30,
    },
})