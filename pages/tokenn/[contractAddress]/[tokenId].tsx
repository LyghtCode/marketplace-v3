import {
  ThirdwebNftMedia,
  Web3Button,
} from "@thirdweb-dev/react";
import React from "react";
import Container from "../../../components/Container/Container";
import { GetStaticProps, GetStaticPaths } from "next";
import { NFT, ThirdwebSDK } from "@thirdweb-dev/sdk";
import {
  NETWORK_ID,
  NFT_COLLECTION_ABI,
  NFT_COLLECTION_ADDRESS2,
} from "../../../const/contractAddresses";
import styles from "../../../styles/Token.module.css";
import Link from "next/link";
import Image from "next/image";


type Props = {
  nft: NFT;
  contractMetadata: any;
};

export default function TokenPage({ nft, contractMetadata }: Props) {

  // const { contract: marketplace, isLoading: loadingContract } = useContract(
  //   MARKETPLACE_ADDRESS,
  //   "marketplace-v3"
  // );

  // // Connect to NFT Collection smart contract
  // const { contract: nftCollection } = useContract(
  //   NFT_COLLECTION_ADDRESS2,
  //   NFT_COLLECTION_ABI
  // );

  // const { data: directListing, isLoading: loadingDirect } =
  //   useValidDirectListings(marketplace, {
  //     tokenContract: NFT_COLLECTION_ADDRESS2,
  //     tokenId: nft.metadata.id,
  //   });

  // // 2. Load if the NFT is for auction
  // const { data: auctionListing, isLoading: loadingAuction } =
  //   useValidEnglishAuctions(marketplace, {
  //     tokenContract: NFT_COLLECTION_ADDRESS2,
  //     tokenId: nft.metadata.id,
  //   });

  // // Load historical transfer events
  // const { data: transferEvents, isLoading: loadingTransferEvents } =
  //   useContractEvents(nftCollection, "Transfer", {
  //     queryFilter: {
  //       filters: {
  //         tokenId: nft.metadata.id,
  //       },
  //     },
  //   });

  // console.log("transferEvents", transferEvents);

  console.log("Price", nft);

  return (
    <Container maxWidth="lg">
      <div className={styles.container}>
        <div className={styles.metadataContainer}>
          <ThirdwebNftMedia metadata={nft.metadata} width={'50vw'} height={'50vh'} className={styles.image} />

          <div className={styles.descriptionContainer}>
            <h3 className={styles.descriptionTitle}>Description</h3>
            <p className={styles.description}>{nft.metadata.description}</p>
          </div>
        </div>

        <div className={styles.listingContainer}>
          <div className={styles.contractMetadataContainer}>
          <Image
              src="/logo.png"
              width={165}
              height={140}
              alt="Restore Coral NFT Marketplace"
              quality={100}
              className={styles.heroAsset}
            />
            {/* <p className={styles.collectionName}>{contractMetadata.name}</p> */}
          </div>
          <h1 className={styles.title}>{nft.metadata.name}</h1>
          <p className={styles.collectionName}>Token ID #{nft.metadata.id}</p>

          <Link
            href={`/profile/${nft.owner}`}
            className={styles.nftOwnerContainer}
          >
            {/* Random linear gradient circle shape */}
            {/* <div className={styles.nftOwnerImage} /> */}
            <div className={styles.nftOwnerInfo}>
              <p className={styles.label}># Sold</p>
              <p className={styles.title}>
                {/* {nft.owner.slice(0, 8)}...{nft.owner.slice(-4)} */}
                {nft.supply}
              </p>
            </div>
          </Link>
          <div className={styles.pricingContainer}>
            {/* Pricing information */}
            <div className={styles.pricingInfo}>{nft.metadata.id === '3' ? 250 : 50} USDC</div>
            <Web3Button
              contractAddress={NFT_COLLECTION_ADDRESS2 || ""}
              action={(cntr) => cntr.erc1155.claim(nft.metadata.id, 1)}
              // isDisabled={!canClaim || buttonLoading}
              onError={(err) => {
                console.error(err);
                alert("Error claiming NFTs");
              }}
              onSuccess={() => {
                // setQuantity(1);
                alert("Successfully claimed NFTs");
              }}
            >
              Restore Now
              {/* {buttonLoading ? "Loading..." : buttonText} */}
            </Web3Button>
            {/* {address && <CrossmintPayButton
              clientId="cc19f12c-0355-4c82-9cae-7b8451c57702"
              style={{content: 'Pay with Card'}}
              // mintTo={address}
              mintConfig={{ "type": "erc-1155", "totalPrice": "50", "_tokenId": `${nft.metadata.id}`, "_quantity": "1", "_currency": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", "_pricePerToken": "50000000000000000000", "_allowlistProof": { "proof": ["0x0000000000000000000000000000000000000000000000000000000000000000"], "maxQuantityInAllowlist": 0 }, "_data": "0x00" }}
            />} */}
          </div>

          {/* 1. Item is not for sale? */}

          {/* 2. Item is for sale, direct listing */}

          {/* 3. Item is for sale, auction listing */}
        </div>
      </div>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const tokenId = context.params?.tokenId as string;

  const sdk = new ThirdwebSDK(137);

  const contract = await sdk.getContractFromAbi(
    NFT_COLLECTION_ADDRESS2,
    NFT_COLLECTION_ABI
  );

  const nft = await contract.erc1155.get(tokenId);
  const contractMetadata = await contract.metadata.get();

  return {
    props: {
      nft,
      contractMetadata,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const sdk = new ThirdwebSDK(137);

  const contract = await sdk.getContractFromAbi(
    NFT_COLLECTION_ADDRESS2,
    NFT_COLLECTION_ABI
  );

  // TODO: Pagination?
  const nfts = await contract.erc1155.getAll();

  const paths = nfts.map((nft) => {
    return {
      params: {
        contractAddress: NFT_COLLECTION_ADDRESS2,
        tokenId: nft.metadata.id,
      },
    };
  });

  return {
    paths,
    fallback: "blocking", // can also be true or 'blocking'
  };
};
