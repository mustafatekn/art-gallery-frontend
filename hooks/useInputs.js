import { useState } from "react";

export const useInputs = (params) => {
  const [inputs, setInputs] = useState(params);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const clearState = () => {
    setInputs({...params});
  }

  return [inputs, handleChange, clearState];
};
