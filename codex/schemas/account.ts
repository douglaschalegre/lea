export interface IAccount {
    id: string;
    cpf: string;
    first_name: string;
    last_name: string;
    created_at: string;
    updated_at: string | undefined;
    auth_id: string;
    filled_registration: boolean;
  }
  