import React from "react";
import { useFormValidator } from "../hooks/useFormValidator";

// 1. Define initial state and validation schema
const initialFormState = {
  username: { value: "", error: undefined, isTouched: false },
  email: { value: "", error: undefined, isTouched: false },
};

const validationSchema = {
  username: {
    required: true,
    minLength: 5,
  },
  email: {
    required: true,
    pattern: /^\S+@\S+\.\S+$/, // Simple regex check
    customCheck: (value: string) =>
      value.includes("admin") ? 'Email cannot contain "admin"' : undefined,
  },
};

const FormDemo: React.FC = () => {
  // 2. Use the custom hook
  const { formState, handleChange, handleBlur, isFormValid } = useFormValidator(
    initialFormState,
    validationSchema
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      console.log("Form Submitted Successfully!", formState);
    } else {
      console.log("Form has errors.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Dynamic Form Validation Demo</h3>

      {/* Input for Username */}
      <input
        type="text"
        placeholder="Username"
        value={formState.username.value}
        onChange={(e) => handleChange("username", e.target.value)}
        onBlur={() => handleBlur("username")}
      />
      {formState.username.error && <span>{formState.username.error}</span>}

      {/* Input for Email */}
      <input
        type="email"
        placeholder="Email"
        value={formState.email.value}
        onChange={(e) => handleChange("email", e.target.value)}
        onBlur={() => handleBlur("email")}
      />
      {formState.email.error && <span>{formState.email.error}</span>}

      <button type="submit" disabled={!isFormValid}>
        Submit
      </button>
    </form>
  );
};

export default FormDemo;
