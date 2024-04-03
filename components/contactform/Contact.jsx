"use client";
import ContactForm from "./ContactForm";
import { ContactFormContextProvider } from "@/context/ContactFormContext";

export default function Contact() {
  return (
    <ContactFormContextProvider>
      <ContactForm />
    </ContactFormContextProvider>
  );
}
