import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useContract } from "@thirdweb-dev/react";
import { MARKETPLACE_ADDRESS } from "../const/contractAddresses";
import { Player } from "@lottiefiles/react-lottie-player";

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
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleGradient}>
                  {/* Restore Coral */}
                </span>
                <br />
                Arrecifes
              </h1>
              <p className={styles.heroSubtitle}>
              Los arrecifes de coral sanos brindan lo siguiente:
              <br/>
    • hábitat, alimentación y lugar de desove y cría para más de un millón de especies acuáticas, que incluyen especies de peces de recolección comercial;
    <br/>
    • alimentos para las personas que viven cerca de los arrecifes de coral, especialmente, en islas pequeñas;
    <br/>
    • oportunidades de recreación y turismo, por ejemplo, pesca, buceo con esnórkel y buceo con equipo de submarinismo, que aportan miles de millones de dólares a las economías locales;
    <br/>
    • protección de la infraestructura costera y prevención de la pérdida de vidas a causa de tormentas, tsunamis, inundaciones y erosión;
    <br/>
    • fuentes de nuevos medicamentos que pueden usarse para tratar enfermedades y otros problemas de salud.
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
