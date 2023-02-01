import React, { useRef, useState, useEffect } from 'react'
import './App.css'

function App() {

  const video = useRef(null);
  const canvas = useRef(null);
  // const [barcode, setBarcode] = useState('');

  const openCam = () => {
    navigator.mediaDevices.getUserMedia({
      video: { width: 1280, height: 720 }
    })
      .then(stream => {
        video.current.srcObject = stream;
        video.current.play();

        // const canvas = canvas.current;
        const ctx = canvas.current.getContext("2d");
        // const barcode = new BarcodeDetector({
        //   formats: ["qr_code", "ean_13"]
        // });
        const barcode = barcodeDetector = new BarcodeDetector({ formats: ['code_39', "qr_code", "ean_13"] });
        const barcode = barcodeDetector = new BarcodeDetector({ formats: ['code_39', "qr_code", "ean_13"] });
        const barcode = barcodeDetector = new BarcodeDetector({ formats: ['code_39', "qr_code", "ean_13"] });
        const barcode = barcodeDetector = new BarcodeDetector({ formats: ['code_39', "qr_code", "ean_13"] });
        const barcode = barcodeDetector = new BarcodeDetector({ formats: ['code_39', "qr_code", "ean_13"] });

        setInterval(() => {
          canvas.current.width = video.current.videoWidth;
          canvas.current.height = video.current.videoHeight;
          ctx.drawImage(video.current, 0, 0, video.current.videoWidth, video.current.videoHeight);
          // 🔻 Burası da okuması aşaması
          // barcode
          //   .detect(canvas.current)
          //   .then(([data]) => console.log(data))
          //   .catch(err => console.log(err))
        }, 100)
      })
      .catch(err => console.log(err))
  }
  //  formats: ['aztec', 'code_128', 'code_39', 'code_93','codebar', 'data_matrix', 'ean_13', 'ean_8', 'itf', 'pdf417', 'qr_code', 'upc_a', 'upc_e']

  // useEffect(() => {

  // }, [])

  return (
    <>
      🍀 App.jsx
      <button onClick={openCam}>Kamerayı Aç</button>
      <div>
        <video ref={video} autoPlay muted hidden />
        <canvas ref={canvas} />
      </div>
    </>
  );
}

export default App
