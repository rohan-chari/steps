import React from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { colors, spacing, borderRadius } from '../theme';

interface BottomHomeBarProps {
  activePage?: 'home' | 'profile';
}

export default function BottomHomeBar({ activePage = 'home' }: BottomHomeBarProps) {
  const router = useRouter();
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bar}>
        <View style={styles.content}>
          <TouchableOpacity 
            style={styles.navItem}
            onPress={() => router.replace('/home')}
          >
            <View style={styles.iconContainer}>
              {activePage === 'home' ? (
                <View style={styles.activeIconBackground}>
                  <Ionicons name="home" size={28} color={colors.text.primary} />
                </View>
              ) : (
                <Ionicons name="home" size={28} color={colors.background.card} />
              )}
            </View>
          </TouchableOpacity>
          
          {/* Placeholder for future navigation items */}
          
          <TouchableOpacity 
            style={styles.navItem}
            onPress={() => router.replace('/profile')}
          >
            <View style={styles.iconContainer}>
              {activePage === 'profile' ? (
                <View style={styles.activeIconBackground}>
                  <Ionicons name="person" size={28} color={colors.text.primary} />
                </View>
              ) : (
                <Ionicons name="person" size={28} color={colors.background.card} />
              )}
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: '5%',
    zIndex: 1000,
    width: '90%',
  },
  bar: {
    backgroundColor: colors.background.secondary,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: spacing.sm,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    minHeight: 40,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  activeIconBackground: {
    backgroundColor: colors.background.primary,
    borderRadius: 25,
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.xs,
  },
});
