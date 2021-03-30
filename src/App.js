import './styles/App.css';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import React, { useState } from 'react';
import BitmapInput from './components/BitmapInput';
import MainAlert from './components/MainAlert'

function App() {
  const [input, setInput] = useState({bitmap: [], status: false})
  const [alert, setAlert] = useState({text:"", status: false, variant: "primary"})

  const handleClick = () => {
    console.log(input)
    if(input.status){
      setAlert({status: true, text:`${input.bitmap}`, variant: "primary"})
    }else{
      setAlert({status: false})
    }
    console.log(alert);
  }

  const handleOnChange = (event) => {
    let bitmap = event.target.value.trim().split(' ')
    if(bitmap.length == 8){
      let nBitmap = bitmap.filter((el,i) => {if(i<8) return el})
      console.log(nBitmap)
      setInput({
        bitmap:nBitmap,
        status: true
      })
    }else{
      setInput({
        bitmap:[],
        status: false
      })
    }
  }

  return (
    <div>
      <Container className="p-3 bg-dark text-white">
        <h1 className="header">Calculadora ISO8583</h1>
        <h5>Ingrese 8 bytes separados por espacios y expresados en hexadecimal</h5>
        <BitmapInput handleOnChange={handleOnChange} handleClick={handleClick} />
      </Container>
      <main className="container pt-3">
        <MainAlert status={alert.status} text={alert.text} variant={alert.variant}/>
      </main>
    </div>
  );
}

export default App;
