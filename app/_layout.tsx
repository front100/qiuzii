import { Stack } from 'expo-router';

import { SettingsProvaider } from '../context/settingsContext';
import { StatusBar } from 'expo-status-bar';
import { QuizProvaider } from '../context/quizContext';

export default function RootLayout() {
  return (
    <>
      {/* <StatusBar style="light" /> */}
      <SettingsProvaider>
        <Stack
          screenOptions={{
            headerShown: false,
            // statusBarStyle: 'light',
          }}
        >
          <Stack.Screen name="(drawer)" />
          <Stack.Screen
            name="settings"
            options={{
              animation: 'slide_from_right',
              animationDuration: 1000,
            }}
          />
          <Stack.Screen name="quiz-page" options={{}} />
        </Stack>
      </SettingsProvaider>
    </>
  );
}
