import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { colors, spacing, fonts } from '../../theme';
import BottomHomeBar from '../../components/BottomHomeBar';

export default function ProfilePage() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Profile</Text>
        <Text style={styles.subtitle}>Manage your account and preferences</Text>
        
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Personal Information</Text>
          <Text style={styles.cardText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
        </View>
        
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Settings</Text>
          <Text style={styles.cardText}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
        </View>
        
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Privacy</Text>
          <Text style={styles.cardText}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</Text>
        </View>
      </View>
      
      {/* Bottom Floating Home Bar */}
      <BottomHomeBar activePage="profile" />
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
