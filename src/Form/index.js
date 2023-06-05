import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { LogoSpace, FormSpace, Img } from "./styles";
import DatosUsuario from "./DatosUsuario";
import DatosPersonales from "./DatosPersonales";
import DatosEntrega from "./DatosEntrega";
import Complete from "./Complete";
import Stepper from "../Stepper";

const Form = () => {
  const [step, setStep] = useState(2);

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

  //^Forma 3 con unn Object LA MEJOR
  const steps = {
    0: <DatosUsuario updateStep={updateStep}/>,
    1: <DatosPersonales updateStep={updateStep}/>,
    2: <DatosEntrega updateStep={updateStep}/>,
    3: <Complete updateStep={updateStep}/>
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
        {/* <DatosUsuario /> */}
{/*         <DatosPersonales />
        <DatosEntrega /> */}
        {steps[step]} {/* pos = step array */}
      </FormSpace>
    </Box>
  );
};

export default Form;
