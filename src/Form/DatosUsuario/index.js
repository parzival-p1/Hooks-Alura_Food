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
  return <>Contennido</>
}

const DatosUsuario = () => {
  const [email, setEmail] = useState({ 
    value: "paco@main.com", 
    valid: true });
  const [password, setPassword] = useState({ 
    value: "abc", 
    valid: true });

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
          console.log(email, password); 
        }}
      >
        <TextField
          label="Correo electrónico"
          variant="outlined"
          fullWidth
          margin="dense"
          type="email"
          error={false}
          helperText={false && "Ingresa un correo electrónico válido"}
          value={ email.value }
          onChange={ (input) => {
            const email = input.target.value

            //Definiendo las validaciones 1
            const valido = validarEmail(email)
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
