import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Player, Controls } from '@lottiefiles/react-lottie-player';

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
              src="/mdm.png"
              width={560}
              height={280}
              alt="Restore Coral NFT Marketplace"
              quality={100}
              className={styles.heroAsset}
            />
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
