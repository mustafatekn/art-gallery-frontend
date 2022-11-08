import { useState } from "react";

export const useInputs = (params) => {
  const [inputs, setInputs] = useState(params);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const clearInputs = () => {
    setInputs({ ...params });
  };

  return [inputs, handleChange, clearInputs];
};
