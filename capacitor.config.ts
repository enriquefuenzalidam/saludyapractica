import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'saludyapractica',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000, // Duration in milliseconds to show the splash screen
      launchAutoHide: true,     // Automatically hide the splash screen after launchShowDuration
      backgroundColor: '#3171BA ', // Background color of the splash screen in hexadecimal ARGB format
      androidSplashResourceName: 'splash', // Custom splash screen name for Android
      androidScaleType: 'CENTER_CROP', // Scaling for the splash image on Android
      showSpinner: false, // Whether to show a spinner; applicable to Android only
    }
  }
};

export default config;
