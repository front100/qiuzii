import { Stack } from 'expo-router';
import { QuizProvaider } from '../../context/quizContext';
import { COLORS } from '../../constants';
import { StatusBar } from 'expo-status-bar';

export default function QuizMainLayout() {
  return (
    <>
      <StatusBar backgroundColor={COLORS.mainBlue} style="light" />
      <QuizProvaider>
        <Stack screenOptions={{}}>
          <Stack.Screen
            name="index"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="results"
            options={{
              title: 'Quiz Results',
              animation: 'slide_from_bottom',

              headerTitleAlign: 'center',
            }}
          />
        </Stack>
      </QuizProvaider>
    </>
  );
}
