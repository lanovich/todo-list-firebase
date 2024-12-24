import { useState } from "react";

export const useSanitizedInput = (sanitizeRegex = /[<>/"'&]/g) => {
  const [value, setValue] = useState('');

  const sanitize = (inputValue) => inputValue.replace(sanitizeRegex, '');

  const handleChange = (e) => {
    const sanitizedValue = sanitize(e.target.value);
    setValue(sanitizedValue);
  };

  const reset = () => setValue('');

  return { value, handleChange, reset };
};