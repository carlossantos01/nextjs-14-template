export interface UserAccount {
  id?: number;
  login?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  activated?: boolean;
  authorities?: string[];
}
