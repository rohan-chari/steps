import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { colors, spacing, fonts } from '../theme';
import BottomHomeBar from '../../components/BottomHomeBar';

export default function HomePage() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome Home</Text>
        <Text style={styles.subtitle}>Your daily steps journey begins here</Text>
        
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Today's Progress</Text>
          <Text style={styles.cardText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
        </View>
      </View>
      
      {/* Bottom Floating Home Bar */}
      <BottomHomeBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  content: {
    flex: 1,
    padding: spacing.lg,
    paddingTop: spacing.xl,
  },
  title: {
    fontSize: fonts.size.xxxl,
    fontFamily: fonts.heading.primary,
    color: colors.text.primary,
    marginBottom: spacing.sm,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: fonts.size.lg,
    fontFamily: fonts.heading.secondary,
    color: colors.text.secondary,
    textAlign: 'center',
    marginBottom: spacing.xl,
  },
  card: {
    backgroundColor: colors.background.card,
    padding: spacing.lg,
    borderRadius: 16,
    marginBottom: spacing.md,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: fonts.size.lg,
    fontFamily: fonts.heading.tertiary,
    color: colors.text.primary,
    marginBottom: spacing.sm,
  },
  cardText: {
    fontSize: fonts.size.md,
    fontFamily: fonts.body.primary,
    color: colors.text.light,
    lineHeight: 24,
  },
});
