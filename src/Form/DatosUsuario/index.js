import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarPassword, validarEmail } from "./validaciones"

//^Estructura basica de una Clase
class ComponenteClase extends React.Component {
  render() {
    return <>Contenido</>
  }
}

//^Estructura basica de un Componente con arrow func
const ComponenteFuncion = () => {
  return <>Contenido</>
}

const DatosUsuario = ({ updateStep }) => {
  const [email, setEmail] = useState({ 
    value: "", 
    valid: null });
  const [password, setPassword] = useState({ 
    value: "", 
    valid: null });

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     email: {
  //       value: 'pacool@mail.com',
  //       valid: true
  //     },
  //     password: {
  //       value: 'abc',
  //       valid: true
  //     }
  //   }
  // }

    return (
      <Box
        component="form"
        autocomplete="off"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
        onSubmit={ (e) => {
          e.preventDefault();
          if (email.valid && password.valid) {
            console.log(email, password);
            console.log("Siguiente formulario");
            updateStep(1);
          } 
          else 
            console.log("No hagas nada!");
        }}
      >
        <TextField
          label="Correo electrónico"
          variant="outlined"
          fullWidth
          margin="dense"
          type="email"
          error={email.valid === false}
          helperText={
            email.valid === false && "Ingresa un correo electrónico válido"
          }
          value={ email.value }
          onChange={(input) => {
            const email = input.target.value
            const valido = validarEmail(email);
            //Definiendo las validaciones 1
            setEmail({ value: email, valid: valido })
          }
          }
        />
        <TextField
          label="Contraseña"
          variant="outlined"
          fullWidth
          margin="dense"
          type="password"
          error={password.valid === false}
          helperText={
            password.valid === false && "Ingresa un password válido, al menos 8 caracteres y máximo 20"
          }
          value={ password.value }
          onChange={(input) => {
              const password = input.target.value

              // Definiedo las validaciones 2
              setPassword({ value: password, valid: validarPassword(password) }) 
            }
          }
        />
        <Button variant="contained" type="submit">
          Siguiente
        </Button>
      </Box>
    );
}

export default DatosUsuario;
