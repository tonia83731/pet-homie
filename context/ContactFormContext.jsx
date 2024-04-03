import { createContext, useContext, useState } from "react";
const ContactFormContext = createContext(null);

export const useContactFormContext = () => {
  const formContext = useContext(ContactFormContext);
  return formContext;
};

export const FORM_STATE = {
  PersonalInfo: "PersonalInfo",
  LivingCondition: "LivingCondition",
  PetExperience: "PetExperience",
};
export const ContactFormContextProvider = (props) => {
  const { children } = props;
  const [formData, setFormData] = useState({
    petsid: "",
    personal: {
      name: "",
      gender: "",
      age: 20,
      address: {
        city: "",
        district: "",
        street: "",
      },
      email: "",
      phone: "",
      occupation: "",
      income: "",
      change: "",
    },
    living: {
      livingtype: "",
      livingarea: "",
      activityarea: "",
      outdoor: "",
      familynum: 1,
      familyagreement: null,
      allergic: null,
    },
    pet: {
      otherpet: 0,
      skill: null,
      guide: null,
      alongtime: 0,
      reason: "",
      question: "",
    },
  });
  const [formState, setFormState] = useState(FORM_STATE.PersonalInfo);

  return (
    <ContactFormContext.Provider
      value={{ formData, setFormData, formState, setFormState }}
    >
      {children}
    </ContactFormContext.Provider>
  );
};
