import * as C from "./style";
import React, { useState } from 'react';



function App() {

  const [peso, setPeso] = useState('');
  const [result, setResult] = useState(0);
  const [garrafa, setGarrafa] = useState(0);
  const [copo, setCopo] = useState(0);



  function Calcular(e){

    // Variável peso com parseInt para formatar em numero float
    var  p =  parseFloat(peso);

    // Variável valor ml
    var  cal = 35.00;

    //Calculando peso em ml
    var qtd = (p * cal);

    // Formatando para string
    var contagem = qtd.toString();


    // Variável string
    var texto = '';


    // Variável invertendo a string para formatar no for
    var textoinvertido  = contagem.split("").reverse();


    // Alterando o valor para float 
      for (let index = contagem.length; index > 0; index--) {


// Variável alteracaoQuantidade é para diminuir a quantidade do valor do for, para obter o mesmo valor do texto 
var alteracaoQuantidae = (index - 1);


// Formatar valor final para float
      if (index === 3) {

        // Adicionando um ponto no valor
        texto = texto + "." + textoinvertido[alteracaoQuantidae];
       
        
      }else{

        // Adicionando valor total
        texto = texto + textoinvertido[alteracaoQuantidae];

      }


      

    }




//Cálculo total
 var ResultadoTotal = parseFloat(texto);


      //Numero formatado
    var numeroFormatado = texto.split("");

  // Alterar para duas casas decimais
  var valorResultado = '';
 for (let index = 0; index < 4; index++) {
  valorResultado += numeroFormatado[index];
   
 }



 // Calculando a quantidade de garrafas pelo o resultado
 var calcGarrafas = ( Math.floor( (qtd / 500)));


  // Calculando a quantidade de copos pelo o resultado
  var calcCopos = ( Math.round( (qtd / 310)));
 
 
 
    
    // Add o valor final no front-end 'area resultado'
    setResult( valorResultado );

    // Add a quantidades de Garrafas'
    setGarrafa( calcGarrafas );


 // Add a quantidades de Copos'
    setCopo( calcCopos );



    // Cancelar o submit do formulario
    e.preventDefault();
    

  }



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
                    
                    <form onSubmit={(e)=>{Calcular(e) }}>

                    <C.Areatext>
                      <label>Informe seu peso:
                        <C.Botaotexto type="number" onChange={(v)=>{setPeso(v.target.value)}} min={10} max={130} 
                        placeholder="Peso (10 kg a 130 kg"/> KG
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

                    <C.ImgArea>

                  <img src="./img/garrafa.png" alt="watergood" />

                    </C.ImgArea>


                   {!garrafa ? '0' : garrafa} garrafinhas de 500ml

                  </C.Areagarrafa>

                  <C.Arearesult>

                    <h3>Seu consumo ideal é:</h3>

                    
                    <h1>{isNaN(result) ? '0': result}</h1>
                    <h3>Litros de água por dia</h3>

                  </C.Arearesult>

                  <C.Areacopo>

                    <C.ImgArea>

                  <img src="./img/copo.png" alt="watergood" />

                    </C.ImgArea>


                   {!copo ? '0' : copo}  copos de 310ml
                  </C.Areacopo>
            
                </C.Result>
            </C.Container>
      </header>
    </div>
  );
}

export default App;
