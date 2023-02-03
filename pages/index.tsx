import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useContract } from "@thirdweb-dev/react";
import { MARKETPLACE_ADDRESS } from "../const/contractAddresses";

/**
 * Landing page with a simple gradient background and a hero asset.
 * Free to customize as you see fit.
 */
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.hero}>
          <div className={styles.heroBackground}>
            <div className={styles.heroBackgroundInner}>
              <Image
                src="/agua.gif"
                width={1500}
                height={1500}
                alt="Background gradient from red to blue"
                quality={100}
                className={styles.gradient}
              />
            </div>
          </div>
          <div className={styles.heroAssetFrame}>

            <Image
              src="/mdm.png"
              width={560}
              height={280}
              alt="Restore Coral NFT Marketplace"
              quality={100}
              className={styles.heroAsset}
            />
          </div>
          <div className={styles.heroBodyContainer}>
            <div className={styles.heroBody}>
              <h1 className={styles.heroTitle}>
                Nuestro Misión
              </h1>
              <p className={styles.heroSubtitle}>
              En las últimas décadas el arrecife mesoamericano ha experimentado una pérdida de densidad del 75%, poniendo en <b>peligro</b> a cientos de especies marinas, además de a las comunidades que se dedican a la pesca. Es por ello que en <i>Restore Coral</i> buscamos propiciar la colaboración entre actores privados, gubernamentales, así como la sociedad civil y la academia, para darle voz a uno de los ecosistemas más importantes y amenazados a nivel mundial, los arrecifes de coral.
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
