import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const SettingsLayout = () => {
  return (
    <>
      <StatusBar style="light" />
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerTitle: 'Settings',
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#74E291',
            },
          }}
        />
      </Stack>
    </>
  );
};
export default SettingsLayout;
