"use client"
import {useState} from "react"

export const ImcCalc = ()=>{

    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')
    const [result, setResult] = useState(0)
    const [showCalc, setShowCalc] = useState(false)

    const handleCalc = ()=>{
        if(weight === '' || height === ''){
            alert("Por favor, insira um número.")
        }else if(Number(weight) === 0 || Number(height) === 0){
            alert("Por favor, insira um valor maior que zero.")
        }else {
            setResult((Number(weight) / ((Number(height) / 100) * (Number(height) / 100))))    
        }
        resetInput()
    }

    const resetResult = ()=>{
        setResult(0)
    }

    const resetInput = ()=>{
        setWeight('')
        setHeight('')
    }

    const handleShowCalc =()=>{
        setShowCalc(!showCalc)
    }

    return (
        <div className="p-3 flex justify-center items-center bg-blue-200 w-full h-screen">
            <div className="bg-white p-2 rounded-md flex flex-col items-center min-w-80 w-1/3">
                <h1 className="text-4xl font-bold text-gray-800">Calculadora de IMC</h1>
                <div className="flex w-full">
                    <div className="py-2 w-50 flex flex-col gap-3">
                        <label>
                            <p>Peso</p>
                            <input 
                                type="number" 
                                className="w-40 border border-gray-400 text-black px-3 py-2 rounded-md" 
                                placeholder="Kg"
                                value={weight}
                                onChange={w => setWeight(w.target.value)}
                                />
                        </label>
                        <label>
                            <p>Altura</p>
                            <input 
                                type="number"
                                className="w-40 border border-gray-400 text-black px-3 py-2 rounded-md" 
                                placeholder="160 cm"
                                value={height}
                                onChange={h => setHeight(h.target.value)}
                                />
                        </label>
                        <div className="flex flex-row gap-2">
                            <button 
                                onClick={handleCalc} 
                                className="px-3 py-2 bg-green-600 text-white font-bold rounded-md hover:opacity-60 cursor-pointer">Calcular</button>
                            <button 
                                onClick={resetResult} 
                                className="px-3 py-2 bg-amber-800 text-white font-bold rounded-md hover:opacity-60 cursor-pointer">Limpar</button>
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center">
                        <p>Confira o seu resultado:</p>
                        <div className="flex flex-col justify-center items-center w-full h-full">
                            {result != 0 &&
                                <p>Seu IMC é <span className="font-bold">{result.toFixed(1)}</span></p>
                            }
                            {result > 0 && result < 18.5 &&
                                <p className="font-bold">Peso baixo</p>
                            }
                            {result > 18.5 && result < 24.9 &&
                                <p className="font-bold">Normal</p>
                            }
                            {result > 25 && result < 29.9 &&
                                <p className="font-bold">Sobrepeso</p>
                            }
                            {result > 30 && result < 34.9 &&
                                <p className="font-bold">Obesidade grau I</p>
                            }
                            {result > 35 && result < 39.9 &&
                                <p className="font-bold">Obesidade grau II</p>
                            }
                            {result > 40 &&
                                <p className="font-bold">Obesidade grau III</p>
                            }
                        </div>
                        <div className="px-3 text-sm flex gap-2">
                            <div onClick={handleShowCalc}>{!showCalc ? 
                                <button className="cursor-pointer hover:text-green-600">Mostrar cálculo</button> : 
                                <button className="cursor-pointer bg-red-500 px-2 py-1 text-center text-white font-bold rounded-full">X</button>
                                }
                                {showCalc &&
                                    <div className="p-2 bg-gray-200 rounded-md shadow">
                                    <p>O IMC é calculado dividindo o peso (em kg) pela altura ao quadrado (em m), de acordo com a seguinte fórmula: IMC = peso / (altura x altura).</p>
                                </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}