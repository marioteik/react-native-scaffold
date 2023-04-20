export interface ErrorData {
  errors: {
    [key: string]: string[];
  };
  status: number;
  title: string;
  type: string;
}
