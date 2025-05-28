import { useState } from "react";
import { FaBullseye } from "react-icons/fa";

export function Useformhook(steps) {
  const [currentStep, setcurrentStep] = useState(0);

  function changeStep(i, e) {
    if (e) e.preventDefault();

    if (i < 0 || i >= steps.length) {
      return; // evita alterar o currentStep se for inválido
    }

    setcurrentStep(i);
  }

  return {
    currentStep,
    currentComponent: steps[currentStep],
    changeStep,
    isLastStep: currentStep + 1 === steps.length ? true : false,
    isFirstStep: currentStep === 0 ? true : false,
  };
}
