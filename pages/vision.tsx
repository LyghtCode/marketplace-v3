import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Player, Controls } from '@lottiefiles/react-lottie-player';

/**
 * Landing page with a simple gradient background and a hero asset.
 * Free to customize as you see fit.
 */
const Vision: NextPage = () => {
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
                Vision
              </h1>
              <p className={styles.heroSubtitle}>
                We implement social innovation, emerging technologies & traditional knowlodge in favor of the oceans. Programs:
                <br />
                • Immersive Education Campaings
                <br />
                • Inclusive Coral Restoration Programs
                <br />
                • Supporting R&D
                <br />
                • Capacity Building
                <br />
                • Lobby
                <br />
                • ARTivism
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
