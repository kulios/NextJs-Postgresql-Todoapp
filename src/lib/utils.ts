import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export function formatDate(from:Date){
  const localefadate = from.toLocaleString("en-US",{day:"2-digit", month:"2-digit", weekday:"long"})
  return localefadate
}