import * as React from "react";

interface ModalMessagesProps {
    title: string,
    color: string,
    isDisableBtn:boolean,
    onClickBtn: () => void
}

export default function ModalMessages(props: ModalMessagesProps) {
    return (
        <div className={'fixed flex justify-center items-center z-10 inset-0'}>
            <div className={'p-4 bg-orange-300 rounded w-64'}>
                <div className={`text-center text-2xl font-semibold ${props.color}`}>
                    {props.title}
                </div>
                <div className={'flex justify-center items-center'}>
                    <button className={'bg-green-500 px-6 py-2 rounded'} onClick={props.onClickBtn}>Okay !</button>
                </div>
            </div>
        </div>
    );
};
