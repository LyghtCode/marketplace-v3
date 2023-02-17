import type { NextPage } from "next";
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
            {/* boop */}
          </div>
          <div className={styles.heroBodyContainer}>
            <Image
              src="/logo-blanco.png"
              width={330}
              height={280}
              alt="Restore Coral NFT Marketplace"
              quality={100}
              className={styles.heroAsset}
            />
            <div className={styles.heroBody}>
              <h1 className={styles.heroTitle}>
                Our Mission
              </h1>
              <p className={styles.heroSubtitle}>
                Regenerating Coastal & Marine Ecosystems, while reducing poverty and protecting ancestral wisdom.
              </p>
              <p className={styles.heroSubtitle}>
              Implementamos innovación social, tecnologías emergentes y conocimientos tradicionales a favor de los océanos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
