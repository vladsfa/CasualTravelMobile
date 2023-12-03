import {Stack} from "expo-router";
import {COLORS} from "../../../../constants/theme";

export default function InterestsFormLayout(){
    return (
        <Stack
            screenOptions={{
                // Ваші налаштування заголовка тут
                headerBackTitleVisible: false,
                headerTransparent: true,
                headerStyle: {
                },
                headerShadowVisible: false,
                headerTintColor: COLORS.black,
                contentStyle: {
                    backgroundColor: COLORS.white
                },
                fullScreenGestureEnabled: true,
                headerShown: false
            }}
        >
            <Stack.Screen
                name="welcome"
                options={{
                    headerTitle: 'Привітання'
                }}
            />
            <Stack.Screen
                name="door1"
                options={{
                    headerTitle: '' // Порожній заголовок для сторінки "Login"
                }}
            />
        </Stack>
    )
}
