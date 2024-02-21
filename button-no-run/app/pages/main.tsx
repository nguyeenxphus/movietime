"use client";

import Image from "next/image";
import { useState } from "react";
import AppButton from "../components/button";

export default function Main() {
  const yesText: string = "Phim hay, đồng ý đi ngay!";
  const noText: string = "Không, không thích!!";

  const textSizeDiff = 4;
  const heightDiff = 16;
  const widthDiff = 40;
  const paddingDiff = 1;
  const [question, setQuestion] = useState(
    "Lúc 17h00 thứ 7 ngày 24/2 đi xem phim này nhé!!"
  );
  const [secondText, setSecondText] = useState("Đừng ấn nữa nó biến mất đấy!");
  const [count, setCount] = useState(0);
  const [agree, setAgree] = useState(false);
  const [position, setPosition] = useState({ x: "50%", y: "50%" });
  const [visible1, setVisible1] = useState(true);
  const [visible2, setVisible2] = useState(false);
  const [buttonSize, setButtonSize] = useState({
    textSize: 20,
    height: 80,
    width: 200,
    padding: 8,
  });
  const iconHooray = "🥳🥳🥳";

  const onClickYes = () => {
    setAgree(true);
    setQuestion("Được rồi đi thôi!!! ");
  };

  const onClickNo = (buttonNumber: number) => {
    if (!visible1 && buttonNumber == 1) {
      return;
    }
    setCount((prevState) => prevState + 1);
    console.log("current count: " + count);
    setVisible1(false);
    if (count == 5) {
      setSecondText("Bảo rồi mà.");
    } else if (count > 6) {
      setVisible2(false);
      setTimeout(() => {
        alert(secondText);
      }, 1000);
    } else {
      setVisible2(true);
    }
    if (count == 3) alert(secondText);
    const maxWidth = window.innerWidth - 200;
    const maxHeight = window.innerHeight - 80;
    const newLeft = Math.floor(Math.random() * maxWidth);
    const newTop = Math.floor(Math.random() * maxHeight);
    setPosition({ x: `${newLeft}px`, y: `${newTop}px` });
    setButtonSize((prevState) => ({
      textSize: prevState.textSize - textSizeDiff,
      height: prevState.height - heightDiff,
      width: prevState.width - widthDiff,
      padding: prevState.padding - paddingDiff,
    }));
  };

  return (
    <div className="relative flex flex-col p-20 w-full max-h-screen items-center justify-center">
      <Image
        src={agree ? "/assets/letsgo.gif" : "/assets/dao.jpg"}
        alt="picture of the movie"
        width={300}
        height={500}
      />
      <p className="p-2" style={{ fontSize: agree ? 40 : 20 }}>
        <span className={agree ? "letsgo" : ""}>{question}</span>
        {agree && iconHooray}
      </p>
      {agree && <audio id="audio" autoPlay src="/assets/happy_song_cut.mp3" />}
      <div
        className="relative flex justify-center w-full"
        id="buttonRow"
        style={{ opacity: agree ? 0 : 1 }}
      >
        <AppButton text={yesText} color="#77cf38" onClick={onClickYes} />
        <AppButton
          text={noText}
          color="#e04a52"
          onClick={() => onClickNo(1)}
          opacity={visible1 ? 1 : 0}
        />
      </div>
      <AppButton
        text={noText}
        color="#e04a52"
        position="absolute"
        onClick={() => onClickNo(2)}
        opacity={visible2 ? 1 : 0}
        left={position.x}
        top={position.y}
        textSize={buttonSize.textSize}
        width={buttonSize.width}
        height={buttonSize.height}
        padding={buttonSize.padding}
      />
    </div>
  );
}
