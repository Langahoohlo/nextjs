import Image from "next/image";
import { TypewriterEffect  } from "./components/ui/typewriter-effect";
// pages/index.tsx

export default function Home() {
  return (
    <div>
      <TypewriterEffect words={[{ text: 'Hello' }, { text: 'Langa Hoohlo' }]} />
    </div>
  );
}