import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [includeNumber, setIncludeNumber] = useState(false);
  const [includeChar, setIncludeChar] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIGKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    includeNumber ? (str += "0123456789") : (str += "");
    includeChar ? (str += "!@#$%^&*(){}[]~`") : (str += "");

    for (let i = 0; i < length; i++) {
      pass += str[Math.floor(Math.random() * str.length)];
    }

    setPassword(pass);

  }, [length, includeChar, includeChar, setPassword]);

  const copyPassword = useCallback(()=>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,password.length);
    window.navigator.clipboard.writeText(password);
  },[password]);

  useEffect(()=>{
    passwordGenerator();
  },[length, includeChar, includeNumber, passwordGenerator])

  return (
    <>
      <div id="main" className="w-full max-w-lg mx-auto  shadow-md rounded-md px-7 my-64 text-orange-500 py-4 bg-gray-700">
        <h1 className="text-white text-center my-4">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button className="outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0
          "
          onClick={copyPassword}>
            copy
          </button>
        </div>
        <div className="flex items-center gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setlength(e.target.value)}
            />
            <label>length : {length}</label>
          </div>
          <div className=" flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={includeNumber}
              id="numberInput"
              onChange={() => {
                setIncludeNumber((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
            <input
              type="checkbox"
              defaultChecked={includeChar}
              id="charInput"
              onChange={() => {
                setIncludeChar((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Special Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
