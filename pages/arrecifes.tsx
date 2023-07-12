import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

/**
 * Landing page with a simple gradient background and a hero asset.
 * Free to customize as you see fit.
 */
const Arrecife: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.hero}>
          <div className={styles.heroBackground}>

            <div className={styles.heroBackgroundInner}>

            </div>
          </div>
          <div className={styles.heroAssetFrame}>

          </div>
          <h1 className={styles.heroTitle}>
            <span className={styles.heroTitleGradient}>
              {/* Restore Coral */}
            </span>
            <br />
            The Coral Reef Ecosystem
          </h1>
          <div className="map"><iframe style={{ overflow: 'hidden', width: '75vw', height: '600px' }} allow="geolocation *; camera *;" frameBorder='0' src="https://www.mapotic.com/restoration-corridor-mx/embed"></iframe></div>

          <div className={styles.heroBodyContainer}>
            <div className={styles.heroBody}>

              <p className={styles.heroSubtitle}>
                Healthy coral reefs provide the following:
                <br />
                <br />
                Habitat, food, and a spawning and breeding ground for over one million aquatic species, including commercially harvested fish species.
                <br />
                Food for the society living near coral reefs, especially in small islands.
                <br />
                Recreation and tourism opportunities, for example: fishing, snorkeling, and scuba diving, which contribute billions of dollars annually to local economies.
                <br />
                Protection of coastal infrastructure and prevention of loss of lives due to storms, tsunamis, flooding, and erosion.
                <br />
                Sources of new medicines that can be used to treat diseases and other health problems.
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

export default Arrecife;
