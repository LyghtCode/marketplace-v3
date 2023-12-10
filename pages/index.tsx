import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import ReactPlayer from 'react-player'

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
              src="https://assets10.lottiefiles.com/packages/lf20_nzypsmyf.json"
            >
            </Player>
            <div className={styles.heroBackgroundInner}>
            
            </div>
          </div>
          <div className={styles.heroAssetFrame}>
          </div>
          <div >

           
            <div className={styles.heroBody}>
            <Image
              src="/simbolo.png"
              width={330}
              height={280}
              alt="Restore Coral NFT Marketplace"
              quality={100}
              className={styles.heroAsset}
            />
            <br/>
              <h1 className={styles.heroTitle}>
                Our Mission
              </h1>
              <p className={styles.heroSubtitle}>
                Regenerating Coastal & Marine Ecosystems, while reducing poverty and protecting ancestral wisdom with a combination of art, technology & social outreach programs.
              </p>
              {/* <video width={100} height={50} autoPlay muted loop id="myVideo" src="https://www.youtube.com/watch?v=AYRgbwfjc7w" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
