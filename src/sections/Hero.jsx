import { useMediaQuery } from "react-responsive";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const text = `Computer Science (AI) student building software, machine learning and IoT experiences that turn curious ideas into practical solutions.`;

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center"
    >
      <div className="w-full mt-4 flex flex-col items-center z-30">
        <AnimatedHeaderSection
          subTitle={"Where logic meets imagination, creation starts."}
          title={"Abdul Khadar I"}
          text={text}
          textColor={"text-black"}
        />
      </div>
    </section>
  );
};

export default Hero;
