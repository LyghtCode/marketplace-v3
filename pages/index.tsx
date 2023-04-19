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
            {/* <video autoPlay muted loop id="myVideo" src="https://www.canva.com/design/DAFR9o9eXJE/qmBqeG9mGlW-tg8yKgw9Qg/watch?utm_content=DAFR9o9eXJE&utm_campaign=share_your_design&utm_medium=link&utm_source=shareyourdesignpanel">
            </video> */}
            <Player
              autoplay
              loop
              src="https://assets10.lottiefiles.com/packages/lf20_nzypsmyf.json"
            // style={{ height: '100vh', width: '100vw' }}
            >
            </Player>
            <div className={styles.heroBackgroundInner}>
            
            </div>
          </div>
          <div className={styles.heroAssetFrame}>
            {/* boop */}
          </div>
          <div >
            <Image
              src="/logo-main.png"
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
                Regenerating Coastal & Marine Ecosystems, while reducing poverty and protecting ancestral wisdom with a combination of art, technology & social outreach programs.
              </p>
              {/* <p className={styles.heroSubtitle}>
              Implementamos innovación social, tecnologías emergentes y conocimientos tradicionales a favor de los océanos.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
