export const Validate = (FullName, EmailId, Password) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;
  const namePattern = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;

  if (!emailPattern.test(EmailId)) {
    return "Email is not valid";
  }

  if (!passwordPattern.test(Password)) {
    return "Password must be at least 6 characters and include at least one letter and one number.";
  }

  if (!namePattern.test(FullName)) {
    return "Full name must only contain letters and spaces.";
  }

  if (FullName.length > 50) {
    return "Name is too long";
  }

  return null; // All valid
};





