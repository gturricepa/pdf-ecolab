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
  "Module 1 comments": string;
  "Module 2 comments": string;
  "Module 3_1 comments": string;
  "Module 3_2 comments": string;
  "Module 3_3 comments": string;
  "Module 3_4 comments": string;
  "Module 3_5 comments": string;
  "Module 3_6 comments": string;
  "Module 4 comments": string;
  "Module 5 comments": string;
  "Module 6 comments": string;
};
