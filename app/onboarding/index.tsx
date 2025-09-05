import React, { useState } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TouchableWithoutFeedback, 
  Keyboard, 
  KeyboardAvoidingView, 
  ScrollView, 
  Platform 
} from "react-native";
import { useRouter } from "expo-router";
import { colors, spacing, borderRadius, fonts } from '../../theme';
import Button from '../../components/Button';
import Input from '../../components/Input';

export default function OnboardingWelcome() {
  const [username, setUsername] = useState('');
  const router = useRouter();

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? -60 : 20}
      >
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
          <ScrollView 
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
            automaticallyAdjustKeyboardInsets={true}
          >
            <View style={styles.content}>
              {/* Progress Indicator */}
              <View style={styles.progressContainer}>
                <View style={styles.progressBar}>
                  <View style={styles.progressFill} />
                </View>
                <Text style={styles.progressText}>Step 1 of 3</Text>
              </View>

              {/* Header Section */}
              <View style={styles.header}>
                <Text style={styles.title}>Let's Get Stepping!</Text>
                <Text style={styles.subtitle}>Compete. Track. Have fun.</Text>
              </View>

              {/* Features Card */}
              <View style={styles.featuresCard}>
                <View style={styles.featureItem}>
                  <Text style={styles.featureTitle}>Weekly Challenges</Text>
                  <Text style={styles.featureDescription}>Compete with friends in step battles</Text>
                </View>
                
                <View style={styles.featureItem}>
                  <Text style={styles.featureTitle}>Auto Tracking</Text>
                  <Text style={styles.featureDescription}>Syncs with Apple Health automatically</Text>
                </View>
                
                <View style={styles.featureItem}>
                  <Text style={styles.featureTitle}>Fun Consequences</Text>
                  <Text style={styles.featureDescription}>Loser does a fun task you choose</Text>
                </View>
              </View>

              {/* Username Section */}
              <View style={styles.usernameSection}>
                <Text style={styles.usernameTitle}>What should we call you?</Text>
                <Input
                  label=""
                  placeholder="Pick your username"
                  value={username}
                  onChangeText={setUsername}
                  width="100%"
                  style={styles.usernameInput}
                />
                <Text style={styles.helperText}>This is how friends will find you</Text>
              </View>

              {/* Bottom Actions */}
              <View style={styles.bottomActions}>
                <Button
                  title="Continue"
                  backgroundColor={colors.button.primary}
                  width="100%"
                  height={56}
                  onPress={() => router.push('/onboarding/step2')}
                />
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  keyboardAvoidingView: {
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
    justifyContent: 'space-around',
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
    width: '33%',
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
  
  // Username Section
  usernameSection: {
    marginBottom: spacing.md,
  },
  usernameTitle: {
    fontSize: fonts.size.lg,
    fontFamily: fonts.heading.primary,
    color: colors.text.primary,
    textAlign: 'center',
    marginBottom: spacing.md,
  },
  usernameInput: {
    marginBottom: spacing.xs,
  },
  helperText: {
    fontSize: fonts.size.sm,
    fontFamily: fonts.body.primary,
    color: colors.text.light,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  
  // Bottom Actions
  bottomActions: {
    width: '100%',
    paddingTop: spacing.sm,
  },
});
