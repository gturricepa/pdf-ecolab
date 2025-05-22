export type XlsxDriverData = {
  "Course ID": string;
  "Unique driver ID": string;
  Name: string;
  "Last name": string;
  Company: string;
  "Application date": string;
  "Date of birth": string;
  "License expiration": string;
  "Years of experience": string;
  Country: string;
  Transmission: string;
  Average: string;
  Rating: string;
  "General comments": string;
  [key: number]: string | number | "NA"; // Colunas dinâmicas de 1 até 53
};
