import React, { useState } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView,
  ScrollView 
} from "react-native";

import { colors, spacing, borderRadius, fonts } from '../../theme';
import Button from '../../components/Button';

export default function OnboardingStep2() {
  const [isPermissionGranted, setIsPermissionGranted] = useState(false);

  const requestHealthPermission = () => {
    // TODO: Implement actual Apple Health permission request
    console.log('Requesting Apple Health permission...');
    setIsPermissionGranted(true);
  };

  const handleContinue = () => {
    if (isPermissionGranted) {
      // TODO: Navigate to step 3 or complete onboarding
      console.log('Continue to step 3');
    } else {
      requestHealthPermission();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          {/* Progress Indicator */}
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View style={styles.progressFill} />
            </View>
            <Text style={styles.progressText}>Step 2 of 3</Text>
          </View>

          {/* Header Section */}
          <View style={styles.header}>
            <Text style={styles.title}>Connect Your Health</Text>
            <Text style={styles.subtitle}>Track. Sync. Compete.</Text>
          </View>

          {/* Features Card */}
          <View style={styles.featuresCard}>
            <View style={styles.featureItem}>
              <Text style={styles.featureTitle}>Automatic Tracking</Text>
              <Text style={styles.featureDescription}>Steps sync automatically from Apple Health</Text>
            </View>
            
            <View style={styles.featureItem}>
              <Text style={styles.featureTitle}>Real-time Updates</Text>
              <Text style={styles.featureDescription}>See your progress update throughout the day</Text>
            </View>
            
            <View style={styles.featureItem}>
              <Text style={styles.featureTitle}>Privacy First</Text>
              <Text style={styles.featureDescription}>Your health data stays on your device</Text>
            </View>
          </View>

          {/* Permission Section */}
          <View style={styles.permissionSection}>
            <View style={styles.permissionHeader}>
              <Text style={styles.permissionTitle}>Allow Step Tracking</Text>
              <Text style={styles.permissionDescription}>
                We need access to your step count from Apple Health to track your progress and sync with challenges.
              </Text>
            </View>

            {!isPermissionGranted ? (
              <Button
                title="Grant Permission"
                backgroundColor={colors.button.primary}
                width="100%"
                height={56}
                onPress={requestHealthPermission}
              />
            ) : (
              <View style={styles.permissionGranted}>
                <Text style={styles.grantedText}>✓ Permission Granted</Text>
                <Text style={styles.grantedSubtext}>You're all set to start tracking!</Text>
              </View>
            )}

            <View style={styles.bottomActions}>
              <Button
                title={isPermissionGranted ? "Continue" : "Skip for now"}
                backgroundColor={
                  isPermissionGranted
                    ? colors.button.primary
                    : colors.button.secondary
                }
                width="100%"
                height={56}
                onPress={handleContinue}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  scrollContent: {
    flexGrow: 1,
    backgroundColor: colors.background.primary,
  },
  content: {
    flex: 1,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    justifyContent: 'space-between',
    minHeight: '100%',
  },
  
  // Progress Indicator
  progressContainer: {
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  progressBar: {
    width: 60,
    height: 4,
    backgroundColor: colors.text.light + '30',
    borderRadius: 2,
    marginBottom: spacing.sm,
    overflow: 'hidden',
  },
  progressFill: {
    width: '66%',
    height: '100%',
    backgroundColor: colors.accent.primary,
    borderRadius: 2,
  },
  progressText: {
    fontSize: fonts.size.sm,
    fontFamily: fonts.body.primary,
    color: colors.text.light,
    fontWeight: '500',
  },
  
  // Header
  header: {
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  title: {
    fontSize: fonts.size.xxl,
    fontFamily: fonts.heading.primary,
    color: colors.text.primary,
    textAlign: 'center',
    marginBottom: spacing.xs,
  },
  subtitle: {
    fontSize: fonts.size.md,
    fontFamily: fonts.heading.secondary,
    color: colors.text.secondary,
    textAlign: 'center',
    lineHeight: 20,
  },
  
  // Features Card
  featuresCard: {
    backgroundColor: colors.background.card,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  featureItem: {
    marginBottom: spacing.md,
    alignItems: 'center',
  },
  featureTitle: {
    fontSize: fonts.size.md,
    fontFamily: fonts.heading.primary,
    color: colors.text.primary,
    marginBottom: spacing.xs,
    textAlign: 'center',
  },
  featureDescription: {
    fontSize: fonts.size.sm,
    fontFamily: fonts.body.primary,
    color: colors.text.light,
    textAlign: 'center',
    lineHeight: 18,
  },
  
  // Permission Section
  permissionSection: {
    gap: spacing.lg, // pushes children closer together but still breathable
  },
  permissionHeader: {
    marginBottom: spacing.sm,
  },
  permissionTitle: {
    fontSize: fonts.size.lg,
    fontFamily: fonts.heading.primary,
    color: colors.text.primary,
    textAlign: 'center',
    marginBottom: spacing.md,
  },
  permissionDescription: {
    fontSize: fonts.size.sm,
    fontFamily: fonts.body.primary,
    color: colors.text.light,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: spacing.lg,
  },
  permissionGranted: {
    alignItems: 'center',
    padding: spacing.lg,
    backgroundColor: colors.accent.primary + '10',
    borderRadius: borderRadius.md,
    borderWidth: 1,
    borderColor: colors.accent.primary + '30',
  },
  grantedText: {
    fontSize: fonts.size.md,
    fontFamily: fonts.heading.primary,
    color: colors.accent.primary,
    marginBottom: spacing.xs,
  },
  grantedSubtext: {
    fontSize: fonts.size.sm,
    fontFamily: fonts.body.primary,
    color: colors.text.light,
    textAlign: 'center',
  },
  
  // Bottom Actions
  bottomActions: {
    width: '100%',
  },
});
