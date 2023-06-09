import { useState, useEffect } from "react"
import "./styles/reset.css"
import "./styles/global.css"

import "boxicons"

function App() {
  const [encryptSelected, setEncryptSelected] = useState(true)
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [copy, setCopy] = useState(false)
  const [color, setColor] = useState("#4281A4")

  useEffect(() => {
    if (encryptSelected) {
      encrypt()
    } else {
      decrypt()
    }
  }, [input])

  const handleInput = e => {
    setInput(e.target.value)
  }

  const encrypt = e => {
    let result = input.replace(/[eEéÉ]/g, "enter")
    result = result.replace(/[iIíÍ]/g, "imes")
    result = result.replace(/[aAáÁ]/g, "ai")
    result = result.replace(/[oOóÓ]/g, "ober")
    result = result.replace(/[uUúÚ]/g, "ufat")
    setOutput(result)
  }

  const decrypt = e => {
    let result = input.replace(/enter/g, "e")
    result = result.replace(/imes/g, "i")
    result = result.replace(/ai/g, "a")
    result = result.replace(/ober/g, "o")
    result = result.replace(/ufat/g, "u")
    setOutput(result)
  }

  const root = document.querySelector(":root")
  root.style.setProperty("--main", color)

  return (
    <div className='App'>
      <div className='container'>
        <div className='input-container'>
          <h1>Encriptador de texto</h1>
          <textarea
            onChange={handleInput}
            className='textArea'
            name='text'
            id='text'
            placeholder={`Ingrese el texto a ${
              encryptSelected ? "encriptar" : "desencriptar"
            }`}></textarea>
          <div className='switch'>
            <button
              onClick={() => {
                setEncryptSelected(true)
                encrypt()
                setColor("#4281A4")
              }}
              className='switch-option'
              encrypt={encryptSelected + ""}>
              Encriptar
            </button>
            <button
              onClick={() => {
                setEncryptSelected(false)
                decrypt()
                setColor("#4DA167")
              }}
              className='switch-option'
              encrypt={!encryptSelected + ""}>
              Desencriptar
            </button>
          </div>
        </div>
        <div className='output-container'>
          {output ? (
            <div className='output'>
              <div>
                <h2>Resultado</h2>
                <p>{output}</p>
              </div>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(output)
                  setCopy(true)
                  setTimeout(() => {
                    setCopy(false)
                  }, 1500)
                }}
                className='copy-btn'>
                {copy ? "¡Copiado!" : "Copiar"}
              </button>
            </div>
          ) : (
            <div className='output'>
              <div className='output-placeholder'>
                <p>{`El texto ${
                  encryptSelected ? "encriptado" : "desencriptado"
                } aparecerá aquí.`}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <footer>
        <div className='author'>Andrés Piñón | Kino</div>
        <div className='social'>
          <a href='https://github.com/XsKino'>
            <box-icon color='#fff' type='logo' name='github'></box-icon>
          </a>
          <a href='https://www.linkedin.com/in/andresprza/'>
            <box-icon name='linkedin-square' type='logo' color='#ffffff'></box-icon>
          </a>
          <a href='https://xskino.vercel.app/'>
            <box-icon name='world' color='#ffffff'></box-icon>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
