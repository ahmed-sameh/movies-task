export interface Movie {
  id?: number;
  name?:string;
  image?: any;
  description?: string;
  category?: {
    id?: number;
    name?: string
  }
}