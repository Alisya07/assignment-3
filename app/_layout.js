import { React } from 'react';
import { Stack } from 'expo-router';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const RootLayout = () => {
    return (
        <PaperProvider>
            <SafeAreaProvider>
                <Stack>
                    <Stack.Screen name='index' />
                    <Stack.Screen name='register' />
                    <Stack.Screen name='passwordreset' />
                    <Stack.Screen name="dashboard" />
                </Stack>
            </SafeAreaProvider>
        </PaperProvider>
    );
}

export default RootLayout