import * as React from "react";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  const [inputAddress, setinputAddress] = React.useState<string>("");

  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setinputAddress(event.target.value);
  };

  const airdropFn = () => {};

  return (
    <div className="bg-[#e6effe] relative">
      <div className="h-screen flex flex-col justify-center items-center gap-5">
        <div className="text-center text-5xl font-bold">Sui Faucet</div>
        <div className="w-1/4">
          <input
            type="text"
            value={inputAddress}
            onChange={changeInput}
            placeholder="Enter Sui account network..."
            className="p-2 w-full"
          />
        </div>
        <button className="p-2 bg-green-500">Airdrop Devnet</button>
      </div>
      <div className="absolute bottom-2 left-2">
        Made by Dung Nghiem, Starbots Studio
      </div>
    </div>
  );
}
