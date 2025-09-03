import { View, Text, StyleSheet, StatusBar, Animated } from "react-native";
import { useEffect, useRef } from "react";
import LottieView from 'lottie-react-native';
import { colors, spacing, borderRadius } from './theme';

export default function Welcome() {
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
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      
      {/* Running Dog Background */}
      <View style={styles.backgroundContainer}>
        <Animated.View style={{ opacity: dogFadeAnim }}>
          <LottieView
            source={require('../assets/animations/dog-run.json')}
            autoPlay
            loop
            style={styles.runningDog}
          />
        </Animated.View>
      </View>
      
      <Animated.View 
        style={[
          styles.content,
          {
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }]
          }
        ]}
      >
        <Text style={styles.title}>Welcome to [Name]</Text>
        <Text style={styles.subtitle}>Every Step Counts.</Text>
        
        {/* Simple Stats to Draw Users In */}
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
      </Animated.View>
      
      {/* CTA Button at Bottom */}
      <Animated.View 
        style={[
          styles.bottomCtaContainer,
          {
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }]
          }
        ]}
      >
        <View style={styles.ctaButton}>
          <Text style={styles.ctaEmoji}>🏃‍♂️</Text>
          <Text style={styles.ctaText}>Get Started</Text>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  runningDog: {
    width: 400,
    height: 400,
    opacity: colors.opacity.heavy,
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    position: 'absolute',
    top: '15%',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.text.primary,
    marginBottom: spacing.md,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: colors.text.secondary,
    textAlign: 'center',
    marginBottom: spacing.lg,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    maxWidth: 280,
    marginBottom: spacing.lg,
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
  bottomCtaContainer: {
    position: 'absolute',
    bottom: spacing.xl,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  ctaButton: {
    backgroundColor: colors.button.primary, 
    borderRadius: borderRadius.md,
    padding: spacing.md,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
    width: '90%',
    maxWidth: 400,
  },
  ctaEmoji: {
    fontSize: 24,
    marginBottom: spacing.xs,
  },
  ctaText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
});
