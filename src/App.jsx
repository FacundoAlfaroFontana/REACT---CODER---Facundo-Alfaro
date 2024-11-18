import React from "react";
import { ChakraProvider } from '@chakra-ui/react';
import { MainLayout } from '/src/layout/MainLayout';
import {Home} from "./pages";
import { MainRouter } from "./router";

const App = () => {

/*   const promesaAsincrona = new Promise((resolve, reject) => {
    console.log("Aqui comienza mi promesa...");
    setTimeout(() => {
      const exito = true;
      if (exito) {
        resolve("¡La promesa se ha resuelto exitosamente!");
      } else {
        reject("Hubo un problema al resolver la promesa.");
      }
    }, 3000);
  });

  promesaAsincrona
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.error(error);
    });

  console.log(promesaAsincrona);
  console.log("Otra tarea");
  console.log(2 + 2);
 */
  return (
    <ChakraProvider>
      <MainLayout>
        <MainRouter />
      </MainLayout>
    </ChakraProvider>
  );
};

export default App;
