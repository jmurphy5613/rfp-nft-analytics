import { useEffect } from "react";
import Web3 from "web3";
import axios from "axios";
import styles from '../styles/App.module.css';

const collectionWallet = "0x209327b591Aa003F4a7E3AE14D4e0e7198002c1a";

const App = () => {

    useEffect(() => {
        // const Web3 = require('web3');
        // const web3 = new Web3('https://green-restless-snowflake.discover.quiknode.pro/ccc2329583cdc3ce7d208a11a7cd4598d6eda4bc/');
        // web3.eth.getBlock('latest').then((answer: any) => console.log(answer))
        // web3.eth.getBlockNumber().then((blockNum: any) => console.log(blockNum)) 

        axios.get('https://api.opensea.io/api/v1/collections?asset_owner=0x209327b591Aa003F4a7E3AE14D4e0e7198002c1a&offset=0&limit=6').then(e => {
            console.log(e.data);
        })

    }, [])

    return (
        <div className={styles.root}>
            <h1 className={styles.title}>Choose Collection</h1>
        </div>
    )
}

export default App;