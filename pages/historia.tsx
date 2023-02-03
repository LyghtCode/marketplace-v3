import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useContract } from "@thirdweb-dev/react";
import { MARKETPLACE_ADDRESS } from "../const/contractAddresses";

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
            <div className={styles.heroBackgroundInner}>
              <Image
                src="/agua.gif"
                width={1500}
                height={1500}
                alt="Background gradient from red to blue"
                quality={100}
                className={styles.gradient}
              />
            </div>
          </div>
          <div className={styles.heroAssetFrame}>
            {/* replace with lottie */}
            <Image
              src="/logo-main.png"
              width={270}
              height={430}
              alt="Restore Coral NFT Marketplace"
              quality={100}
              className={styles.heroAsset}
            />
          </div>
          <div className={styles.heroBodyContainer}>
            <div className={styles.heroBody}>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleGradient}>
                NUESTRA HISTORIA
                </span>
                
              </h1>
              <p className={styles.heroSubtitle}>
              Implentamos estrategias que involucran la tecnología y el arte para despertar la conciencia de la necesidad de proteger y restaurar nuestros ecosistemas marinos. Involucrar comunidades locales generando formas sustentables de ecoturismo que empleen a poblaciones marginadas.
Sensibilizar a los encargados de formular políticas públicas de la importancia de los arrecifes de coral para la subsistencia de numerosas especies marinas, así como para las actividades humanas. Buscar alianzas con actores gubernamentales y asociaciones internacionales.
<br />
-VR reality
<br />
-Galería mural Project
<br />
-PARTICIPANTES UN OCEAN WORLD 2020
<br />
-Desafío viaja disfruta y respeta
<br />
-Raving for the corals
<br />
-Día de los océanos en CDMX y Tulum 2018
<br />
-Récord corales, planetario Cozumel
<br />
-Members of open explorer y national geographic
<br />
-Océano sostenible para todos
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
