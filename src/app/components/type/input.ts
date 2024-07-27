export interface inputBox {
  type?: string;
  placeholder?: string;
  value: string;
  setState: (value: string) => void;
  required?: boolean;
}
