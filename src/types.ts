export interface Patient {
  id?: number;
  name: string;
  age: number;
  gender: string;
  admission_date?: string;
  history: string;
  contact: string;
}

export interface Message {
  role: "user" | "model";
  text: string;
}
