import React, { useState, useEffect } from "react";
import { Box, Typography, easing } from "@mui/material";
import { LogoSpace, FormSpace, Img } from "./styles";
import DatosUsuario from "./DatosUsuario";
import DatosPersonales from "./DatosPersonales";
import DatosEntrega from "./DatosEntrega";
import Complete from "./Complete";
import Stepper from "../Stepper";
import Step from "./Step"

//* Validaciones
import { validarEmail, validarPassword } from "./DatosUsuario/validaciones";

const Form = () => {
  const [step, setStep] = useState(0);
  const [pasos, setPasos] = useState({});

  useEffect(() => {
    console.log("UseEffect");
  });

  //^ LLama a una func desps un array
  useEffect(() => {
    console.log("Se ha actualizado el step: ", step);
  }, [step])

  //^ Funcion asincrona
  useEffect(async () => {
    
      try {
        const data =  await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await data.json();
        console.log(posts);
      } catch(e){
        console.log(e);
      }
  });

      //^ Flux steps
     // step = 0 --> <DatosUsuario />
    // step = 1 --> <DatosPersonales />
   // step = 2 --> <DatosEntrega />
  // step = 3 --> <Complete />

  const updateStep = (step) => {
    console.log("Actualizar paso", step);
    setStep(step);
  }

  //^forma 1 con Switch 
/*   const selectStep = () => {
    switch (paso)
    {
        case 0: return <DatosUsuario />; break;
        case 1: return <DatosPersonales />; break;
        case 2: return <DatosEntrega />; break;
      default: return <Complete />; break;
    }
  } */

  //^forma 2 con Array
  const steps1 = [
    <DatosUsuario />,
    <DatosPersonales />,
    <DatosEntrega />,
    <Complete />
  ]

  //^Forma 3 con un Object LA MEJOR
  const steps = {
    0: <DatosUsuario updateStep={updateStep}/>,
    1: <DatosPersonales updateStep={updateStep}/>,
    2: <DatosEntrega updateStep={updateStep}/>,
    3: <Complete updateStep={updateStep}/>
  };

  console.log("FORM COMPONENT");

  const onSubmit = (e) => {
    e.preventDefault();
    let newStep = step + 1;
    setStep(newStep);
    console.log("New Step: ", newStep);
    console.log(step);
  };

  const handleChange = (element, position, currentStep, validate) => {
    const value = element.target.value;
    const valid = validate(value);
    console.log(value);
    console.log(valid);
    console.log("currentStep: ", currentStep);
    console.log("positioon: ", position);
    console.log("validator: ", validate);

    stepsFlow[0].inputs[0].label = "Nombre";
    console.log(stepsFlow);
  }

  //^Obj para los input
  const stepsFlow = {
    0: {
      inputs: [ //^arr de inputs
        {
          label: "Correo electrónico",
          type: "email",
          value: "",
          valid: null,
          onChange: handleChange,
          HelperText: "Ingresar un correo válido",
          validator: validarEmail,
        },
        {
          label: "Contraseña",
          type: "password",
          value: "",
          valid: null,
          onChange: handleChange,
          HelperText: "Ingresar una contraseña válida",
          validator: validarPassword,
        },
      ],
      buttonText: "Siguiente",
      onSubmit,
    },

    1: {
      inputs: [ //^arr de inputs
        {
          label: "Correo electrónico",
          type: "email",
          value: "",
          valid: null,
          onChange: handleChange,
          HelperText: "Ingresar un correo válido",
          validator: validarEmail,
        },
        {
          label: "Contraseña",
          type: "password",
          value: "",
          valid: null,
          onChange: handleChange,
          HelperText: "Ingresar una contraseña válida",
          validator: validarPassword,
        },
      ],
      buttonText: "Siguiente",
      onSubmit,
    },
  };


  return (
    <Box
      sx={{
        padding: "30px",
        display: "flexbox",
        flexDirection: "column",
      }}
    >
      <LogoSpace>
        <Img src={"/favicon.png"} />
        <Typography variant="h3">AluraFood</Typography>
      </LogoSpace>
      <FormSpace>
        {step < 3 && <Stepper step={step} />}
        {/* {steps[step]} */} {/* pos = step array */}
        <Step data={ stepsFlow[step] } step={step}/>
      </FormSpace>
    </Box>
  );
};

export default Form;
