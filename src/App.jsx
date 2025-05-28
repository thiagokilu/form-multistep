import { useState } from "react";
import "./App.css";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Useform from "./components/Useform";
import Reviewform from "./components/Reviewform";
import Thanks from "./components/Thanks";
import Steps from "./components/Steps";

import { Useformhook } from "./hooks/Useform";
import { FiSend } from "react-icons/fi";

const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: "",
};

function App() {
  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const [data, setData] = useState(formTemplate);

  const formComponents = [
    <Useform data={data} updateFieldHandler={updateFieldHandler} />,
    <Reviewform data={data} updateFieldHandler={updateFieldHandler} />,
    <Thanks data={data} />,
  ];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } =
    Useformhook(formComponents);

  return (
    <div>
      <div className="app">
        <div className="header">
          <h2>Deixe sua avaliação</h2>
          <p>
            Ficamos felizes com a sua compra, utilize o formulário abaixo para
            avaliar o produto
          </p>
        </div>
        <div className="form-container">
          <p>
            <Steps currentStep={currentStep} />
          </p>
          <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
            <div className="inputs-container">{currentComponent}</div>
            <div className="actions">
              {!isFirstStep && (
                <button
                  type="button"
                  onClick={() => changeStep(currentStep - 1)}
                >
                  <GrFormPrevious />
                  <span>Voltar</span>
                </button>
              )}
              {!isLastStep ? (
                <button type="submit">
                  <span>Avançar</span>
                  <GrFormNext />
                </button>
              ) : (
                <button type="button">
                  <span>Enviar</span>
                  <FiSend />
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
