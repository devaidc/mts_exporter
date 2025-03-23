export type UserType = "Mine Owner" | "Mineral Trader" | "Logistic Company";
export type IDType = "ID Card" | "Passport";

export interface SignupData {
  // User Information step
  idType: IDType;
  idNumber: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  idCardPhoto?: File;
  agreeToTerms: boolean;
  
  // User Type step
  userType?: UserType;
  
  // Business ID step
  businessID?: string;
}

export interface StepProps {
  initialData: Partial<SignupData>;
  onNext: (data: Partial<SignupData>) => void;
}