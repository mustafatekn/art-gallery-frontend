export function useValidate(messageContent, setErrors) {
  const errors = {};

  if (!messageContent.name.trim()) errors.name = "Name is required";
  if (!messageContent.email.trim()) errors.email = "Email is required";
  if (!messageContent.phone.trim()) errors.phone = "Phone is required";
  if (!messageContent.subject.trim()) errors.subject = "Subject is required";
  if (!messageContent.message.trim()) errors.message = "Message is required";

  const emailRegExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if (!emailRegExp.test(messageContent.email))
    errors.email = errors.email
      ? errors.email
      : "Email must be in email format";
  setErrors(errors);
  return errors;
}

export function useValidateOnBlur(messageContent, setErrors, submitted) {
    if(!submitted) return;

    const errors = {};
  
    if (!messageContent.name.trim()) errors.name = "Name is required";
    if (!messageContent.email.trim()) errors.email = "Email is required";
    if (!messageContent.phone.trim()) errors.phone = "Phone is required";
    if (!messageContent.subject.trim()) errors.subject = "Subject is required";
    if (!messageContent.message.trim()) errors.message = "Message is required";
  
    const emailRegExp =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!emailRegExp.test(messageContent.email))
      errors.email = errors.email
        ? errors.email
        : "Email must be in email format";
    return setErrors(errors);
  }
