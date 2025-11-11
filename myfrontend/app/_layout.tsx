import { Stack } from 'expo-router';
import React from 'react';
import { ThemeProvider } from '../src/context/ThemeContext';

const RootLayout = () => (
  <ThemeProvider>
    <Stack screenOptions={{ headerShown: true }} />
  </ThemeProvider>
);

export default RootLayout;