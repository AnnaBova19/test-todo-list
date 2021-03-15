export interface Todo {
  id: number;
  name: string;
  description: string;
  isCompleted: Boolean;
  isImportant: Boolean;
  expiryDate: Date;
}