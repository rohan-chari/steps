import React from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, borderRadius } from '../app/theme';

interface BottomHomeBarProps {
  // Add props as needed later
}

export default function BottomHomeBar({}: BottomHomeBarProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bar}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.navItem}>
            <View style={styles.iconContainer}>
              <View style={styles.activeIconBackground}>
                <Ionicons name="home" size={28} color={colors.text.primary} />
              </View>
            </View>
          </TouchableOpacity>
          
          {/* Placeholder for future navigation items */}
          <View style={styles.navItem}>
            <View style={styles.iconContainer}>
              <Ionicons name="flame" size={28} color={colors.text.secondary} />
            </View>
          </View>
          
          <View style={styles.navItem}>
            <View style={styles.iconContainer}>
              <Ionicons name="heart" size={28} color={colors.text.secondary} />
            </View>
          </View>
          
          <View style={styles.navItem}>
            <View style={styles.iconContainer}>
              <Ionicons name="notifications" size={28} color={colors.text.secondary} />
            </View>
          </View>
          
          <View style={styles.navItem}>
            <View style={styles.iconContainer}>
              <Ionicons name="person" size={28} color={colors.text.primary} />
            </View>
          </View>
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
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.xs,
  },
  selectedIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.accent.primary,
    position: 'absolute',
    bottom: -spacing.xs,
  },
});
