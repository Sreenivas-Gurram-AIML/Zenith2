import { TypeAnimation } from "react-type-animation";

const TypingAnim = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed once, initially
        "Welcome To Zenith AI 🌟",
        1000,
        "Your Ultimate AI Assistant 🤖",
        2000,
        "Expert in Conversations 🗣️",
        1500,
        "Problem Solving 🧠 and",
        1500,
        "Financial Analysis 📈",
        2000,
      ]}
      speed={50}
      style={{
        fontSize: "60px",
        color: "white",
        display: "inline-block",
        textShadow: "1px 1px 20px #000",
      }}
      repeat={Infinity}
    />
  );
};

export default TypingAnim;
