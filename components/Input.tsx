import React, { useState } from 'react';
import { 
  TextInput, 
  View, 
  Text, 
  StyleSheet, 
  ViewStyle, 
  TextStyle,
  TextInputProps,
  DimensionValue
} from 'react-native';
import { colors, spacing, borderRadius, fonts } from '../theme';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  width?: DimensionValue;
  height?: number;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  placeholderTextColor?: string;
  style?: ViewStyle;
  inputStyle?: TextStyle;
  labelStyle?: TextStyle;
  errorStyle?: TextStyle;
  disabled?: boolean;
}

export default function Input({
  label,
  error,
  width = '100%',
  height = 56,
  backgroundColor = colors.background.card,
  borderColor = colors.text.light,
  textColor = colors.text.primary,
  placeholderTextColor = colors.text.light,
  style,
  inputStyle,
  labelStyle,
  errorStyle,
  disabled = false,
  ...textInputProps
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const dynamicBorderColor = error 
    ? colors.status.error 
    : isFocused 
      ? colors.accent.primary 
      : borderColor;

  return (
    <View style={[styles.container, { width }, style]}>
      {label && (
        <Text style={[styles.label, labelStyle]}>
          {label}
        </Text>
      )}
      
      <View
        style={[
          styles.inputContainer,
          {
            height,
            backgroundColor: disabled ? colors.text.light + '20' : backgroundColor,
            borderColor: dynamicBorderColor,
          },
        ]}
      >
        <TextInput
          style={[
            styles.input,
            {
              color: disabled ? colors.text.light : textColor,
            },
            inputStyle,
          ]}
          placeholderTextColor={placeholderTextColor}
          onFocus={handleFocus}
          onBlur={handleBlur}
          editable={!disabled}
          {...textInputProps}
        />
      </View>
      
      {error && (
        <Text style={[styles.errorText, errorStyle]}>
          {error}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.md,
  },
  label: {
    fontSize: fonts.size.sm,
    fontFamily: fonts.body.primary,
    color: colors.text.primary,
    marginBottom: spacing.xs,
    fontWeight: '500',
  },
  inputContainer: {
    borderWidth: 2,
    borderRadius: borderRadius.md,
    paddingHorizontal: spacing.md,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  input: {
    fontSize: fonts.size.md,
    fontFamily: fonts.body.primary,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  errorText: {
    fontSize: fonts.size.xs,
    fontFamily: fonts.body.primary,
    color: colors.status.error,
    marginTop: spacing.xs,
  },
});
