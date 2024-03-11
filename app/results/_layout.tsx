import { Stack } from 'expo-router';

const ResultsLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: 'Results Page',
          headerTitleAlign: 'center',
          animation: 'slide_from_bottom',
        }}
      />
    </Stack>
  );
};
export default ResultsLayout;
