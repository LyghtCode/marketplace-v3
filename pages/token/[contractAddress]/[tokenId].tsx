import {
  ThirdwebNftMedia,
  Web3Button,
} from "@thirdweb-dev/react";
import React from "react";
import Container from "../../../components/Container/Container";
import { GetStaticProps, GetStaticPaths } from "next";
import { NFT, ThirdwebSDK } from "@thirdweb-dev/sdk";
import {
  NFT_COLLECTION_ABI,
  NFT_COLLECTION_ADDRESS,
} from "../../../const/contractAddresses";
import styles from "../../../styles/Token.module.css";
import Link from "next/link";
import { useAddress } from "@thirdweb-dev/react";
import { CheckoutWithCard } from "@paperxyz/react-client-sdk";
import Image from "next/image";

type Props = {
  nft: NFT;
  contractMetadata: any;
};

export default function TokenPage({ nft, contractMetadata }: Props) {
  const address = useAddress();
  
  console.log("Price", nft);
  const contractArgs = { tokenId: nft.metadata.id }

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
              contractAddress={NFT_COLLECTION_ADDRESS || ""}
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
            </Web3Button>
          </div>
          {address ? (<CheckoutWithCard
            configs={{
              contractArgs,
              // Registered contract ID
              contractId: "b8051ec3-aa6d-451d-9dc0-bfadee791588",
              // tokenId: nft.metadata.id,
              // Buyer wallet address
              walletAddress: address as string,
              // Mint method (for custom contracts only)
              mintMethod: {
                name: "claim",
                args: {
                  _receiver: address as string,
                  _quantity: "1",
                  _tokenId: nft.metadata.id,

                },
                payment: {
                  value: "0.1",
                  currency: "MATIC"
                }
              }
            }}

            onPaymentSuccess={(result) => {
              console.log("Payment successful:", result);
            }}
          />) : (<div></div>)}

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
    NFT_COLLECTION_ADDRESS,
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
    NFT_COLLECTION_ADDRESS,
    NFT_COLLECTION_ABI
  );

  // TODO: Pagination?
  const nfts = await contract.erc1155.getAll();

  const paths = nfts.map((nft) => {
    return {
      params: {
        contractAddress: NFT_COLLECTION_ADDRESS,
        tokenId: nft.metadata.id,
      },
    };
  });

  return {
    paths,
    fallback: "blocking", // can also be true or 'blocking'
  };
};
