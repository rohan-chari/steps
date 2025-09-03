import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { colors, spacing, borderRadius, fonts } from '../app/theme';

interface ButtonProps {
  title: string;
  onPress?: () => void;
  backgroundColor?: string;
  textColor?: string;
  width?: number | string;
  height?: number;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export default function Button({
  title,
  onPress,
  backgroundColor = colors.accent.primary,
  textColor = 'white',
  width = 'auto',
  height = 48,
  disabled = false,
  style,
  textStyle,
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: disabled ? colors.text.light : backgroundColor,
          width: width as any,
          height,
        },
        style,
      ]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <Text
        style={[
          styles.buttonText,
          {
            color: disabled ? colors.background.card : textColor,
          },
          textStyle,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: borderRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    minHeight: 48,
  },
  buttonText: {
    fontSize: fonts.size.md,
    fontFamily: fonts.button.primary,
    textAlign: 'center',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
});
