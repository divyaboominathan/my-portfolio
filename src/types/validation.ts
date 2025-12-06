export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp; // Use RegExp for custom checks like email/phone
  customCheck?: (value: any) => string | undefined; // For complex, custom validation logic
}

// The core input type for form fields
export interface FormField {
  value: any;
  error: string | undefined;
  isTouched: boolean;
}

// The type for the map of all form fields
export interface FormState {
  [key: string]: FormField;
}
