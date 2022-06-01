import React from 'react';
import Signup from './Signup' ;

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

export default function Login( {navigation}) {
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
                    <Input holder="Please enter your e-mail!" />
                    <Input holder="Please enter your password!" />
                    <Button title='Login' onPress = {() => 
                    navigation.navigate('MainTabs')} 
                    />
                    <Button title="Sign Up" onPress ={() => 
                       navigation.navigate('Signup')} 
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