// /src/hooks/useFormValidator.ts

import { useState, useCallback } from "react";
import { FormState, FormField, ValidationRule } from "../types/validation";

// Utility function (can be extracted to a separate file)
const runValidation = (
  value: any,
  rules: ValidationRule
): string | undefined => {
  if (rules.required && !value) {
    return "This field is required.";
  }
  if (rules.minLength && value.length < rules.minLength) {
    return `Minimum length is ${rules.minLength} characters.`;
  }
  // Add other checks (maxLength, pattern, etc.)

  if (rules.customCheck) {
    return rules.customCheck(value);
  }

  return undefined; // No error
};

// --- THE CUSTOM HOOK ---

export const useFormValidator = (
  initialState: FormState,
  validationSchema: { [key: string]: ValidationRule }
) => {
  const [formState, setFormState] = useState<FormState>(initialState);

  // Function to handle changes in any input field
  const handleChange = useCallback(
    (fieldName: keyof FormState, value: any) => {
      setFormState((prev) => {
        const field = prev[fieldName];

        // Run validation immediately for cleaner code
        const error = runValidation(value, validationSchema[fieldName]);

        return {
          ...prev,
          [fieldName]: {
            ...field,
            value,
            error: field.isTouched ? error : undefined, // Only show error if touched
          },
        };
      });
    },
    [validationSchema]
  );

  // Function to set field as 'touched' (e.g., onBlur event)
  const handleBlur = useCallback(
    (fieldName: keyof FormState) => {
      setFormState((prev) => {
        const value = prev[fieldName].value;
        const error = runValidation(value, validationSchema[fieldName]);

        return {
          ...prev,
          [fieldName]: {
            ...prev[fieldName],
            isTouched: true,
            error, // Show error immediately when touched
          },
        };
      });
    },
    [validationSchema]
  );

  // Checks if the entire form is valid
  const isFormValid = Object.keys(formState).every(
    (fieldName) => !formState[fieldName].error
  );

  return { formState, handleChange, handleBlur, isFormValid, setFormState };
};
