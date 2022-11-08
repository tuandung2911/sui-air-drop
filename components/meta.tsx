import * as React from "react";
import { NextSeo } from 'next-seo';
import Head from "next/head";

export default function MetaTag() {
    return (
<>
    <Head>
        <link
            rel="icon"
            href={`https://sui.io/favicon.png`}
            key="favicon"
        />
    </Head>
    <NextSeo
        title={'Sui Faucet! Tool airdrop SUI'}
        description={'Sui Faucet! Tool airdrop SUI'}
        openGraph={{
            title: 'Sui Blockchain - Build without boundaries',
            description: 'Sui is the first permissionless Layer 1 blockchain designed from the ground up to enable creators and developers to build experiences that cater to the next billion users in web3 - Sui is a decentralized platform to build rich and dynamic on-chain assets from gaming to finance. A STEP-FUNCTION CHANGE IN BLOCKCHAIN DESIGN. Horizontally scalable, instant finality, low fees.',
            url: 'https://sui.io/',
            locale: 'en',
            site_name: 'Sui Faucet',
            type: 'website',
            images: [
                {
                    url: 'https://external.fhan5-11.fna.fbcdn.net/emg1/v/t13/6480198641026166544?url=https%3A%2F%2Fsui.io%2Fimg%2Fsui-social.jpg&fb_obo=1&utld=sui.io&stp=c0.5000x0.5000f_dst-jpg_flffffff_p500x261_q75&ccb=13-1&oh=06_AbHa06CoIwFR29FaT9CtZdyYO7peG5QoCOAmO0Je6x8-Fw&oe=636B2CDF&_nc_sid=9eb09c',
                    width: 500,
                    height: 261,
                    alt: 'Banner Sui',
                },
            ],
        }}
    />
</>

  );
}
