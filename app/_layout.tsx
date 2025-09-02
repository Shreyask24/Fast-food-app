import useAuthStore from '@/store/auth.store';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from 'react';
import './globals.css';

export default function RootLayout() {
  const { isLoading, fetchAuthenticatedUser } = useAuthStore();

  const [fontLoaded, error] = useFonts({
    "Quicksand-Bold": require('../assets/fonts/Quicksand-Bold.ttf'),
    "Quicksand-Medium": require('../assets/fonts/Quicksand-Medium.ttf'),
    "Quicksand-SemiBold": require('../assets/fonts/Quicksand-SemiBold.ttf'),
    "Quicksand-Regular": require('../assets/fonts/Quicksand-Regular.ttf'),
    "Quicksand-Light": require('../assets/fonts/Quicksand-Light.ttf'),
  });

  useEffect(() => {
    if (error) throw error
    if (fontLoaded) SplashScreen.hideAsync()
  }, [fontLoaded, error])

  useEffect(() => {
    fetchAuthenticatedUser()
  }, [])

  if (!fontLoaded || isLoading) return null
  return <Stack screenOptions={{ headerShown: false }} />;
}
