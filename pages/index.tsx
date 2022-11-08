import * as React from "react";
import MetaTag from "../components/meta";
import ModalMessages from "../components/ModalMessages";

export default function Home() {
    const [inputAddress, setInputAddress] = React.useState<string>("");

    const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputAddress(event.target.value);
    };

    const airdropFn =async () => {
        try {
            const airdropSUi = await fetch('https://faucet.devnet.sui.io/gas', {
                method: 'POST',
                body: JSON.stringify({
                    FixedAmountRequest: {
                        recipient: inputAddress
                    }
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
        }catch (e){

        }
    };

    return (
        <div>
            <MetaTag/>
            <div className="bg-[#e6effe] relative font-mono">
                <div className="h-screen flex flex-col justify-center items-center gap-5">
                    <div className="text-5xl font-bold">Sui Faucet</div>
                    <div className="text-3xl font-bold text-red-500">This tool does *NOT* give real $SUI tokens.</div>
                    <div className="w-1/4">
                        <input
                            type="text"
                            value={inputAddress}
                            onChange={changeInput}
                            placeholder="Enter Sui account network..."
                            className="p-3 w-full rounded-lg"
                        />
                    </div>
                    <div className={'flex items-center justify-center gap-3'}>
                        <div >Airdrop <span className={'font-semibold'}>0.05</span> $SUI to</div>
                        <button className="p-3 bg-green-500 rounded-lg" onClick={airdropFn}>DevNet</button>
                    </div>
                </div>
                <div className="absolute bottom-2 left-2 text-sm font-semibold">
                    Made by <span className={'text-rose-500'}>Dung Nghiem</span>,
                    <span className={'text-purple-700 hover:underline'}>
                    <a href={'https://starbots.net/'} target={'_blank'} rel="noreferrer">
                        {' '}Starbots Studio
                    </a>
                </span>
                </div>
            </div>
            <ModalMessages/>
        </div>
    );
}
