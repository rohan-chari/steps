import { View, Text, StyleSheet, StatusBar, Animated, SafeAreaView } from "react-native";
import { useEffect, useRef } from "react";
import { useRouter } from "expo-router";
import LottieView from 'lottie-react-native';
import { colors, spacing, borderRadius, fonts } from '../theme';
import Button from '../components/Button';

export default function Welcome() {
  const router = useRouter();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;
  const dogFadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(dogFadeAnim, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      
      {/* Dog Animation - Absolutely positioned background */}
      <View style={styles.dogBackground}>
        <Animated.View style={{ opacity: dogFadeAnim }}>
          <LottieView
            source={require('../assets/animations/dog-run.json')}
            autoPlay
            loop
            style={styles.runningDog}
          />
        </Animated.View>
      </View>
      
      {/* Main Content Container */}
      <Animated.View 
        style={[
          styles.mainContent,
          {
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }]
          }
        ]}
      >
        {/* Top Section - Title and Stats */}
        <View style={styles.topSection}>
          <Text style={styles.title}>Welcome to [Name]</Text>
          <Text style={styles.subtitle}>Every Step Counts.</Text>
          
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>2.4M*+</Text>
              <Text style={styles.statLabel}>Steps Today</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>156*</Text>
              <Text style={styles.statLabel}>Active Battles</Text>
            </View>
          </View>
        </View>
        
        {/* Bottom Section - Buttons */}
        <View style={{alignItems: 'center'}}>
          <Button
            title="Get Started"
            backgroundColor={colors.button.primary}
            width="90%"
            height={56}
            onPress={() => router.push('/onboarding')}
          />
          <View style={styles.buttonSpacing} />
          <Button
            title="Learn More"
            backgroundColor={colors.button.secondary}
            width="90%"
            height={56}
            onPress={() => console.log('Learn More pressed')}
          />
        </View>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  mainContent: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: spacing.xl,
    paddingHorizontal: spacing.md,
  },
  title: {
    fontSize: fonts.size.xxxl,
    fontFamily: fonts.heading.primary,
    color: colors.text.primary,
    marginBottom: spacing.md,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: fonts.size.lg,
    fontFamily: fonts.heading.secondary,
    color: colors.text.secondary,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    maxWidth: 280,
    marginBottom: spacing.sm,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.accent.primary,
    marginBottom: spacing.xs,
  },
  statLabel: {
    fontSize: 12,
    color: colors.text.light,
    textAlign: 'center',
  },
  runningDog: {
    width: '100%',
    height: undefined,
    aspectRatio: 1, // keeps it square
    opacity: colors.opacity.heavy,
  },
  bottomCtaContainer: {
    width: '100%',
    alignItems: 'center',
  },
  buttonSpacing: {
    height: spacing.md,
  },
  dogBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1, // Ensure it's behind other content
    backgroundColor: colors.background.primary, // Or any other background color
    alignItems: 'center',
    justifyContent: 'center',
  },
  topSection: {
    alignItems: 'center',
    marginBottom: spacing.sm,
  },


});
