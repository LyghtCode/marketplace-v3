import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

/**
 * Navigation bar that shows up on all pages.
 * Rendered in _app.tsx file above the page content.
 */
export function Navbar() {
  const address = useAddress();

  return (
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          <Link href="/" className={`${styles.homeLink} ${styles.navLeft}`}>
            <Image
              src="/logo-main.png"
              width={48}
              height={48}
              alt="Restore coral NFT Marketplace"
            />
          </Link>

          <div className={styles.navMiddle}>
            <Link href="/buy" className={styles.link}>
            <Image
              src="/icons/exp.png"
              width={36}
              height={36}
              alt="Restore coral NFT Marketplace"
            />
              EXPERIENCIAS
            </Link>
            {/* <Link href="/sell" className={styles.link}>
            <Image
              src="/icons/coral.png"
              width={36}
              height={36}
              alt="Restore coral NFT Marketplace"
            />
              MIS NFTs
            </Link> */}
            <Link href="/about" className={styles.link}>
            <Image
              src="/icons/dolphins.png"
              width={36}
              height={36}
              alt="Restore coral NFT Marketplace"
            />
            QUIÉNES SOMOS
            </Link>
            
            <Link href="/arrecifes" className={styles.link}>
            <Image
              src="/icons/coral.png"
              width={36}
              height={36}
              alt="Restore coral NFT Marketplace"
            />
              ARRECIFES
            </Link>
            <Link href="/historia" className={styles.link}>
            <Image
              src="/icons/dolphins.png"
              width={36}
              height={36}
              alt="Restore coral NFT Marketplace"
            />
              HISTORIA
            </Link>
          </div>
        </div>

        <div className={styles.navRight}>
          <ConnectWallet />
          {address && (
            <Link className={styles.link} href={`/profile/${address}`}>
              <Image
                className={styles.profileImage}
                src="/user-icon.png"
                width={42}
                height={42}
                alt="Profile"
              />
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}
