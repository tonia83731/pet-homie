import ContactStep1 from "./ContactStep1";
import ContactStep2 from "./ContactStep2";
import ContactStep3 from "./ContactStep3";
import {
  useContactFormContext,
  FORM_STATE,
} from "@/context/ContactFormContext";

export default function ContactForm() {
  const { formState, setFormState } = useContactFormContext();
  const renderSteps = () => {
    switch (formState) {
      case FORM_STATE.PersonalInfo:
        return (
          <ContactStep1
            onNextPageClick={() => setFormState(FORM_STATE.LivingCondition)}
          />
        );
      case FORM_STATE.LivingCondition:
        return (
          <ContactStep2
            onPrevPageClick={() => setFormState(FORM_STATE.PersonalInfo)}
            onNextPageClick={() => setFormState(FORM_STATE.PetExperience)}
          />
        );
      case FORM_STATE.PetExperience:
        return <ContactStep3 />;
      default:
        return null;
    }
  };
  return (
    <div action="" className="">
      {renderSteps()}
    </div>
  );
}
