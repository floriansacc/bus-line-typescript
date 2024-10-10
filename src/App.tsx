import { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const test: number[] = [0];

    function testt(name: string) {
      return `Hi ${name}`;
    }

    const test2 = (name: string[], optional?: number): void => {
      // return `Hi ${name}`;
      console.log(`${name}: ${optional ?? 0}`);
    };

    test2(["dd", "dddd"], 2);

    interface Model1 {
      data1: number;
      data2: string[];
      data3?: number[];
    }

    const myModel: Model1 = {
      data1: 1,
      data2: ["a", "b"],
      data3: [],
    };
  }, []);

  return (
    <div>
      <div>test</div>
    </div>
  );
}
