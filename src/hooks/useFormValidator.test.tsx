import { act, renderHook } from "@testing-library/react";
import { FormState } from "../types/validation";
import { useFormValidator } from "./useFormValidator";

// 1. Define the initial state and validation schema used in the tests
const initialState: FormState = {
  name: { value: "", error: undefined, isTouched: false },
  age: { value: 0, error: undefined, isTouched: false },
};

const validationSchema = {
  name: {
    required: true,
    minLength: 5,
  },
  age: {
    required: true,
    customCheck: (value: number) =>
      value < 18 ? "Must be 18 or older." : undefined,
  },
};

describe("useFormValidator", () => {
  // Test Case 1: Initial state check
  test("should initialize form state correctly", () => {
    // renderHook simulates mounting a component and using the hook inside it
    const { result } = renderHook(() =>
      useFormValidator(initialState, validationSchema)
    );

    // Assert that the initial form state matches expectations
    expect(result.current.formState.name.value).toBe("");
    expect(result.current.isFormValid).toBe(false); // Should be false since required fields are empty
  });

  // Test Case 2: Handling input changes
  test("should update form state value on handleChange", () => {
    const { result } = renderHook(() =>
      useFormValidator(initialState, validationSchema)
    );

    // act ensures updates triggered inside are processed before assertions
    act(() => {
      result.current.handleChange("name", "Divya");
    });

    expect(result.current.formState.name.value).toBe("Divya");
    expect(result.current.formState.name.error).toBeUndefined(); // Error should not show before blur
  });

  // Test Case 3: Required field validation (Proving basic error reduction logic)
  test("should set an error if a required field is blurred while empty", () => {
    const { result } = renderHook(() =>
      useFormValidator(initialState, validationSchema)
    );

    act(() => {
      // Simulate the user touching the field and moving away
      result.current.handleBlur("name");
    });

    expect(result.current.formState.name.error).toBe("This field is required.");
    expect(result.current.formState.name.isTouched).toBe(true);
    expect(result.current.isFormValid).toBe(false);
  });

  // Test Case 4: MinLength validation
  test("should set minLength error if input is too short", () => {
    const { result } = renderHook(() =>
      useFormValidator(initialState, validationSchema)
    );

    act(() => {
      result.current.handleChange("name", "Sam"); // Value is 3 chars (min is 5)
      result.current.handleBlur("name");
    });

    expect(result.current.formState.name.error).toBe(
      "Minimum length is 5 characters."
    );
    expect(result.current.isFormValid).toBe(false);
  });

  // Test Case 5: Custom validation logic check
  test("should set custom error if age is under 18", () => {
    const { result } = renderHook(() =>
      useFormValidator(initialState, validationSchema)
    );

    act(() => {
      result.current.handleChange("age", 16);
      result.current.handleBlur("age");
    });

    expect(result.current.formState.age.error).toBe("Must be 18 or older.");
  });

  // Test Case 6: Successful validation (The happy path)
  test("should be valid when all inputs meet criteria", () => {
    const { result } = renderHook(() =>
      useFormValidator(initialState, validationSchema)
    );

    act(() => {
      // Fill Name correctly
      result.current.handleChange("name", "DivyaBoominathan");
      result.current.handleBlur("name");
      // Fill Age correctly
      result.current.handleChange("age", 30);
      result.current.handleBlur("age");
    });

    // Assert all errors are cleared and the form is valid
    expect(result.current.formState.name.error).toBeUndefined();
    expect(result.current.formState.age.error).toBeUndefined();
    expect(result.current.isFormValid).toBe(true);
  });
});

// 2. FIXED TS1208 ERROR: Tells TypeScript this is a module
export { };

