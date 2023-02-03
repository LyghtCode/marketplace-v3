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
const About: NextPage = () => {
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
              src="/logo-main.png"
              width={270}
              height={270}
              alt="Restore Coral NFT Marketplace"
              quality={100}
              className={styles.heroAsset}
            />
          </div>
          <div className={styles.heroBodyContainer}>
            <div className={styles.heroBody}>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleGradient}>
                QUIÉNES SOMOS
                </span>
                
              </h1>
              <p className={styles.heroSubtitle}>
              Somos una organización trabajando para la restauración de los sistemas arrecifales en <b>Mexico</b>, empezando por el <i>Sistema Arrecifal Mesoamericano.</i> A través de la innovación social, el arte y el uso de tecnologias emergentes buscamos sensibilizar al público acerca de la importancia de la protección de los arrecifes de coral. Buscamos impulsar un modelo de <b>sustentabilidad</b> que proteja el medio marino, al mismo tiempo que permita desarrollar estrategias productivas responsables socialmente, las cuales involucren a las comunidades, como el ecoturismo.
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
