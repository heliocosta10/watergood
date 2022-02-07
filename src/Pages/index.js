import * as C from "./style";
import React, { useState } from 'react';



function App() {

  const [result, setResult] = useState(0);
  const [garrafa, setGarrafa] = useState(0);
  const [copo, setCopo] = useState(0);



  
  return (
    <div className="App">
      <header className="App-header">
          
          {/* Area principal  */}
            <C.Container>


                {/* Cabeçalho da pagina  */}
                <C.Titulo>
                 Qual a quantidade de água que precisamos beber por dia?
                  <C.Titulo2>
                  Descubra como definir! 
                  </C.Titulo2>
                </C.Titulo>

                {/* Formulario do dados   */}
                <C.Formulario>

                  <C.Areaimagem>
                    
                     <img src="./img/tomar-agua.png" alt="watergood" />
           
                  </C.Areaimagem>

                  <C.Areadados>
                    
                    <form>

                    <C.Areatext>
                      <label>Informe seu pes:o
                        <C.Botaotexto  />
                        </label>
                        
                    </C.Areatext>


                    <C.Areabotao>
                        <C.BotaoInput>Calcular</C.BotaoInput>
                    </C.Areabotao>

                     
                    </form>


                  </C.Areadados>

                  
                  
                </C.Formulario>


                {/* Area de resultado   */}
                <C.Result>

                  <C.Areagarrafa>

                    garrafas {garrafa}

                  </C.Areagarrafa>

                  <C.Arearesult>

                    <h3>Seu consumo ideal é:</h3>
                    {result}
                    <h3>Litros de água por dia</h3>

                  </C.Arearesult>

                  <C.Areacopo>
                    copos {copo}
                  </C.Areacopo>


            
                </C.Result>

                 
                

            </C.Container>


      </header>
    </div>
  );
}

export default App;
