export interface Todo {
  id: number;
  name: string;
  description: string;
  isCompleted: Boolean;
  isFavourite: Boolean;
  expiryDate: Date;
}