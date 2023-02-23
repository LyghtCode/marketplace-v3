import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { Player } from "@lottiefiles/react-lottie-player";

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
              src="https://assets10.lottiefiles.com/packages/lf20_nzypsmyf.json"
            // style={{ height: '100vh', width: '100vw' }}
            >
            </Player>
            <div className={styles.heroBackgroundInner}>

            </div>
          </div>
          <div className={styles.heroAssetFrame}>
            {/* replace with lottie */}

          </div>
          <div className={styles.heroBodyContainer}>

            {/* <Image
              src="/logo-main.png"
              width={270}
              height={270}
              alt="Restore Coral NFT Marketplace"
              quality={100}
              className={styles.heroAsset}
            /> */}
            <div className={styles.heroBody}>
              <Player
                autoplay
                loop
                src="https://assets10.lottiefiles.com/packages/lf20_dhKO1k.json"
                style={{ height: '60px', width: '60px' }}
              >
              </Player>
              <h1 className={styles.heroTitle}>
                {/* <span className={styles.heroTitleGradient}> */}
                Our Story
                {/* </span> */}
              </h1>
              <p className={styles.heroSubtitle}>
                We implement strategies that involve technology and art to raise awareness of the need to protect and restore our ecosystems. We aim to involve local communities by generating sustainable forms of ecotourism & sensitizing policy makers about the importance of coral reefs for the subsistence of numerous marine species.<br />
                • • •
                <br />
                Latest Projects:
                <br />
                VR Reality
                <br />
                Gallery Mural Project
                <br />
                Ocean World Participants 2020
                <br />
                Travel, Enjoy and Respect Challenge
                <br />
                Raving for The Corals
                <br />
                Ocean Day CDMX & Tulum 2018
                <br />
                Members of Open Explorer & National Geographic
                <br />
                Sustainable Ocean for All
              </p>

              <div className={styles.heroCtaContainer}>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
