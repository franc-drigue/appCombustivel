import {Stack} from "expo-router"

export default function Layout() {
    return (
        <Stack
         screenOptions={{
            headerShown: false
         }} 
        >
            <Stack.Screen name="index" options={{statusBarBackgroundColor: "#000"}}/>
            <Stack.Screen name="result" options={{title: "Resultado"}}/>
        </Stack>
    );
}