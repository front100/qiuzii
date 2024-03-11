import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import LogoIcon from '../../components/logo/Logo';
import { IconFontAwesome } from '../../components/icons-fonts/IconFontAwesome';
import { COLORS } from '../../constants';
import { Link } from 'expo-router';
import { Pressable } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(drawer)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    DMRegular: require('../../assets/fonts/DMSans-Regular.ttf'),
    DMBold: require('../../assets/fonts/DMSans-Bold.ttf'),
    DMMedium: require('../../assets/fonts/DMSans-Medium.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <>
      <StatusBar style="light" />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaProvider>
          <Drawer
            screenOptions={{
              headerTintColor: 'white',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: COLORS.mainBlue,
              },
              drawerLabelStyle: { fontSize: 18 },
              headerTitle: () => <LogoIcon />,
            }}
          >
            <Drawer.Screen
              name="index"
              options={{
                drawerLabel: 'Home',
                headerRight: () => (
                  <Link href="settings" asChild>
                    <Pressable>
                      {({ pressed }) => (
                        <IconFontAwesome
                          name="gear"
                          size={25}
                          color="white"
                          styleParams={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                        />
                      )}
                    </Pressable>
                  </Link>
                ),
                drawerIcon: ({ focused, color, size }) => (
                  <IconFontAwesome name="home" color={color} size={size} />
                ),
              }}
            />
            <Drawer.Screen
              name="about"
              options={{
                drawerLabel: 'About',
                headerRight: () => (
                  <Link href="settings" asChild>
                    <Pressable>
                      {({ pressed }) => (
                        <IconFontAwesome
                          name="gear"
                          size={25}
                          color="white"
                          styleParams={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                        />
                      )}
                    </Pressable>
                  </Link>
                ),
                drawerIcon: ({ focused, color, size }) => (
                  <IconFontAwesome name="info-circle" color={color} size={size} />
                ),
              }}
            />
          </Drawer>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </>
  );
}
