import "./App.css";
import { useState } from "react";
import { data } from "./assets/Data/data.jsx";
import image1 from "./assets/img/image1.png";

function App() {
  const [yesScale, setYesScale] = useState(1);
  const [noScale, setNoScale] = useState(1);
  const [isAgreed, setIsAgreed] = useState(false);
  const [step, setStep] = useState(0); // quan trọng

  const handleNo = () => {
    setYesScale((prev) => prev + 0.5);
    setNoScale((prev) => Math.max(prev - 0.3, 0.3));

    // Bấm NO thì chuyển sang bước gif
    setStep((prev) => Math.min(prev + 1, data.length));
  };

  const handleYes = () => {
    setIsAgreed(true);
  };

  return (
    <div className="container">
      <h1>Làm người yêu anh nha 🥺</h1>

      {!isAgreed ? (
        <>
          {/* CHỈ hiện khi mới vào */}
          {step === 0 && (
            <img
              src={image1}
              alt="start"
              style={{ maxWidth: "250px", marginBottom: "20px" }}
            />
          )}

          {/* SAU khi bấm NO thì hiện gif */}
          {step > 0 && (
            <>
              <img
                src={data[step - 1].gif}
                alt="moment"
                style={{
                  maxWidth: "300px",
                  borderRadius: "10px",
                  marginBottom: "12px",
                }}
              />
              <h2>{data[step - 1].title}</h2>
            </>
          )}

          <div className="buttons-container">
            <button
              onClick={handleYes}
              style={{ fontSize: `${yesScale * 16}px` }}
            >
              Yes 💕
            </button>

            {step < data.length && (
              <button
                onClick={handleNo}
                style={{ fontSize: `${noScale * 16}px` }}
              >
                No 💔
              </button>
            )}
          </div>
        </>
      ) : (
        <>
          <h1>Đồng ý 💕</h1>
          <img
            src="https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif"
            alt="celebrate"
            style={{ maxWidth: "300px", borderRadius: "10px" }}
          />
        </>
      )}
    </div>
  );
}

export default App;
