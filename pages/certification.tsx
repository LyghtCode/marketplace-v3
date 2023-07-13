import { useContract, useNFTs } from "@thirdweb-dev/react";
import React from "react";
import Container from "../components/Container/Container";
import NFTGrid from "../components/NFT/NFTGrid";
import {
    NFT_COLLECTION_ABI,
    NFT_COLLECTION_ADDRESS2,
} from "../const/contractAddresses";
import styles from "../styles/Buy.module.css";

export default function Certifications() {
    // Load all of the NFTs from the NFT Collection
    const { contract } = useContract(NFT_COLLECTION_ADDRESS2, NFT_COLLECTION_ABI);
    const { data, isLoading } = useNFTs(contract);

    return (
        <div style={{ height: '100vh' }}>
            <Container maxWidth="lg">
                <h1 className={styles.title}>Certifications</h1>
                <NFTGrid data={data} isLoading={isLoading} />
            </Container>
        </div>
    );
}
