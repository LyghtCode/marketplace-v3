import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import NextNProgress from "nextjs-progressbar";
import { NETWORK_ID } from "../const/contractAddresses";
import "@fontsource/genos";
import "../styles/globals.css";
import {
  NextUIProvider,
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import { ConnectWallet} from "@thirdweb-dev/react";
import React from "react";
import '@fontsource/quando';
import { Polygon } from "@thirdweb-dev/chains";

function MyApp({ Component, pageProps }: AppProps) {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Adopt",
    "Adopt-Reef",
    "Certification",
    "About",
    "Arrecifes",
    "Historia",
  ];

  return (
    <ThirdwebProvider activeChain={Polygon}
    clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}
    >
      {/* Progress bar when navigating between pages */}
      <NextNProgress
        color="var(--color-tertiary)"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <NextUIProvider>
        <Navbar
          isBordered
          isMenuOpen={isMenuOpen}
          onMenuOpenChange={setIsMenuOpen}
        >
          <NavbarContent className="sm:hidden" justify="start">
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            />
          </NavbarContent>

          <NavbarContent className="pr-3 sm:hidden" justify="center">
            <NavbarBrand>
              <Link href="/">
                <Image
                  src="/simbolo.png"
                  width={48}
                  height={48}
                  alt="Restore coral NFT Marketplace"
                />
              </Link>
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent className="hidden gap-4 sm:flex" justify="center">
            <NavbarBrand>
              <Link href="/">
                <Image
                  src="/simbolo.png"
                  width={48}
                  height={48}
                  alt="Restore coral NFT Marketplace"
                />
              </Link>
            </NavbarBrand>
            <NavbarItem>
              <Link color="foreground" href="/adopt">
                Adopt
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="/certification" aria-current="page">
                Certification
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="/adopt-reef">
                Adopt a Reef
              </Link>
            </NavbarItem>
          </NavbarContent>

          <NavbarContent justify="end">
            <NavbarItem>
              <ConnectWallet />
            </NavbarItem>
          </NavbarContent>

          <NavbarMenu>
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  className="w-full"
                  color={
                    index === 2
                      ? "warning"
                      : index === menuItems.length - 1
                      ? "danger"
                      : "foreground"
                  }
                  href="#"
                  size="lg"
                >
                  {item}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar>
        <Component {...pageProps} />
      </NextUIProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
