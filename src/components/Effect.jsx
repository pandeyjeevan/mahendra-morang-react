import { useEffect, useState } from "react";

function Effect() {
  const [count, setCount] = useState(0);
  console.log(count);

  useEffect(() => {
    const titleIntervan = setInterval(() => {
      document.title = count;
    }, 1000);
    //call pai
  }, [count]);

  //dependency array

  //no dependency array

  //empty dependency array []

  //dependency value [count]
  //   return (
  //     <>
  //       <h1>UseEffect</h1>

  //       <h2>Count:{count}</h2>
  //       <button onClick={() => setCount(count + 1)}>Increase</button>
  //     </>
  //   );
}

export default Effect;
