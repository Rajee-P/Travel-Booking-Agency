export const validateEmail = (email) => {
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation regex
   return emailRegex.test(email);
 };
 
 export const validatePassword = (password) => {
   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
   // Explanation:
   // - At least 8 characters
   // - At least one uppercase letter
   // - At least one lowercase letter
   // - At least one number
   // - At least one special character
   return passwordRegex.test(password);
 };