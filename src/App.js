import "./reset.css";
import "./styles.css";

import React from "react";
import { prizes } from "./prizes";

const placeholder = "151617, 484848, 101010";

export default function App() {
  const [userPrizes, setUserPrizes] = React.useState(undefined);

  function handleInput(e) {
    if (e.target.value.replaceAll(" ", "") === "") return;
    const userCodes = [
      ...new Set(e.target.value.replaceAll(" ", "").split(",")),
    ];
    const userPrizes = userCodes
      .filter((c) => prizes[c] !== undefined)
      .map((c) => {
        const prize = prizes[c];
        return { code: c, prize: prize };
      });
    setUserPrizes(userPrizes);
  }

  return (
    <div className="App">
      <img
        src="https://premiosdotixa.gg/uploads/settings/logo-tixa-site.png"
        alt=""
      />
      <h1 className="page-title">
        Verifique se ganhou um premio instantâneo do Tixa!
      </h1>
      <div>
        <h2>Copie os códigos da cota e cole no campo abaixo:</h2>
        <textarea
          rows={5}
          cols={50}
          onChange={handleInput}
          placeholder={placeholder}
        />
      </div>
      <div className="prize">
        {userPrizes &&
          userPrizes.length > 0 &&
          userPrizes.map((c) => {
            return (
              <div>
                <p key={c.code}>
                  <strong>{c.code}</strong> : {c.prize}
                </p>
                <img
                  style={{ width: "auto", height: "200px" }}
                  src="https://media2.giphy.com/media/g9582DNuQppxC/200.gif"
                />
              </div>
            );
          })}
        {userPrizes && userPrizes.length === 0 && (
          <div>
            <p className="rainbow" style={{ fontWeight: "bold" }}>
              Você não ganhou nada kkk
            </p>
            <img
              style={{ width: "auto", height: "100px" }}
              src="https://i.imgflip.com/8fo1d9.png"
            />
          </div>
        )}
      </div>
    </div>
  );
}
