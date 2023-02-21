import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Player, Controls } from '@lottiefiles/react-lottie-player';

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
          <Player
                autoplay
                loop
                src="https://assets6.lottiefiles.com/packages/lf20_qsgqcwag.json"
                // style={{ height: '100vh', width: '100vw' }}
              >
              </Player>
            <div className={styles.heroBackgroundInner}>
            </div>
          </div>
          <div className={styles.heroAssetFrame}>
           
          </div>
          <div className={styles.heroBodyContainer}>
         
            <div className={styles.heroBody}>
            <Image
              src="/logo-main.png"
              width={280}
              height={250}
              alt="Restore Coral NFT Marketplace"
              quality={100}
              className={styles.heroAsset}
            />
              <h1 className={styles.heroTitle}>
                Who Are We?
              </h1>
              <p className={styles.heroSubtitle}>
              We are an organization working for the restoration of reef systems in Mexico, starting with the Mesoamerican Reef System. Through social innovation, art, and the use of emerging technologies, we seek to raise awareness among the public about the importance of protecting coral reefs. We aim to promote a sustainability model that protects the marine environment while also enabling socially responsible productive strategies that involve different communities, as well as ecotourism.
              </p>
              {/* <p className={styles.heroSubtitle}>
              Somos una organización trabajando para la restauración de los sistemas arrecifales en <b>México</b>, empezando por el <i>Sistema Arrecifal Mesoamericano</i>. A través de la innovación social, el arte y el uso de tecnologías emergentes buscamos sensibilizar al público acerca de la importancia de la protección de los arrecifes de coral. Buscamos impulsar un modelo de sustentabilidad que proteja al medio marino, al mismo tiempo que permita desarrollar estrategias productivas responsables socialmente, las cuales involucren a diferentes comunidades, así como el ecoturismo.
              </p> */}


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
