import { useEffect, useState } from "react";
import Web3 from "web3";
import axios from "axios";
import styles from '../styles/App.module.css';
import CollectionGrid from "../components/collection-grid/CollectionGrid";

const collectionWallet = "0x209327b591Aa003F4a7E3AE14D4e0e7198002c1a";

const App = () => {

    const [collections, setCollections] = useState([
        {
            name: "CryptoPunks",
            image: "https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s0",
            collectionSlug: "cryptopunks"
        },
        {
            name: "Bored Ape Yacht Club",
            image: "https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s168",
            collectionSlug: "boredapeyachtclub"
        }
    ]);

    useEffect(() => {
        // const Web3 = require('web3');
        // const web3 = new Web3('https://green-restless-snowflake.discover.quiknode.pro/ccc2329583cdc3ce7d208a11a7cd4598d6eda4bc/');
        // web3.eth.getBlock('latest').then((answer: any) => console.log(answer))
        // web3.eth.getBlockNumber().then((blockNum: any) => console.log(blockNum)) 

        // axios.get('https://api.opensea.io/api/v1/collections?asset_owner=0x209327b591Aa003F4a7E3AE14D4e0e7198002c1a&offset=0&limit=6').then(e => {
        //     console.log(e.data);
        // })

    }, [])

    return (
        <div className={styles.root}>
            <h1 className={styles.title}>Choose Collection</h1>
            <CollectionGrid collections={collections} />
        </div>
    )
}

export default App;