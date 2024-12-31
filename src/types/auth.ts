export interface LoginFormData {
  phoneNumber: string;
  verificationCode: string;
  userType: 'customer' | 'engineer';
  agreesToTerms: boolean;
}