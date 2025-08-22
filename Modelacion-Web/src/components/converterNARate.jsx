import React from "react";
import { CalculateEA } from "../utils/Calcs";
import { useState } from "react";

function Card(){

  const [tasa, setTasa] = useState("");
  const [tipo, setTipo] = useState("0");
  const [periodos, setPeriodos] = useState("");
  const [resultado, setResultado] = useState(null);


  const handleCalcular = () => {
    const res = CalculateEA(tasa, periodos, tipo);
    setResultado(res);
  };



    
    return(

<div className="flex flex-col">
    <div className="flex flex-row p-5  bg-zinc-700 items-center justify-center">
       <label className="text-white m-2 p-2 font-medium">Tasa Nominal</label>
        <input 
            type="number" 
            className="bg-white rounded-full  m-2 p-2 text-center" 
            value={tasa}
            onChange={(e) => setTasa(e.target.value)}
            
            />
        <select 
            className="m-2 p-2 text-white font-medium"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            
            
            >
            <option value="0"> Anticipada</option>
            <option value="1"> Vencida</option>
        </select>
        <label className="text-white bg-zinc-800  p-2 font-medium"> N° Periodos</label>
        <input 
        type="number" 
        className="bg-white  rounded-full w-30  m-2 p-2 text-center"   
        value={periodos}
        onChange={(e) => setPeriodos(e.target.value)}
        
        />
        <button 
        
        onClick={handleCalcular}
        className="bg-blue-500 text-white font-bold px-4 py-2 rounded hover:bg-blue-600 "
        >Calcular
        </button>   
    </div>

        {resultado !== null && ( 
            
            <div className="text-white font-extralight text-xl  p-5 bg-zinc-600 flex justify-evenly"> 
                <label>Tasa efectiva: {resultado} </label>
                <label>Tasa periodica: {resultado} </label>
            
            </div>
            
            
            )}
</div>   

    
    
    )
}


export default  Card;



