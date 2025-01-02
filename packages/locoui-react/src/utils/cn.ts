import { twMerge } from "tailwind-merge";

export function cn(...inputs: string[]) {
  console.log(">>> In cn  [ ", inputs, " ]");
  return twMerge(inputs);
}
