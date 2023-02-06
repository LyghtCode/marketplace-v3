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
             <Image
              src="/logo-main.png"
              width={270}
              height={270}
              alt="Restore Coral NFT Marketplace"
              quality={100}
              className={styles.heroAsset}
            />
            <div className={styles.heroBody}>
              <h1 className={styles.heroTitle}>
                QUIÉNES SOMOS
                
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
