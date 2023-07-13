import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
// import { Navbar } from "../components/Navbar/Navbar";
import NextNProgress from "nextjs-progressbar";
import { NETWORK_ID } from "../const/contractAddresses";
import "@fontsource/genos";
import "../styles/globals.css";
import { NextUIProvider, Navbar, Link, Text, Avatar, Dropdown } from '@nextui-org/react';
import Image from "next/image";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";

function MyApp({ Component, pageProps }: AppProps) {
  const address = useAddress();
  console.log(address);

  return (
    <ThirdwebProvider desiredChainId={NETWORK_ID}>
      {/* Progress bar when navigating between pages */}
      <NextNProgress
        color="var(--color-tertiary)"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <NextUIProvider>
        <Navbar isBordered variant="floating">
          <Navbar.Toggle showIn="xs" />
          <Navbar.Brand
            css={{
              "@xs": {
                w: "12%",
              },
            }}

          >
            <Link href="/">
              <Image
                src="/simbolo.png"
                width={48}
                height={48}
                alt="Restore coral NFT Marketplace"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Content
            enableCursorHighlight
            activeColor="secondary"
            hideIn="xs"
            variant="highlight-rounded"
          >
            <Navbar.Link href="/adopt">Adopt-a-Coral</Navbar.Link>
            <Navbar.Link href="/adopt-reef">Adopt-a-Reef</Navbar.Link>
            <Navbar.Link href="/certification">Certifications</Navbar.Link>
            <Navbar.Link href="/about">
              About
            </Navbar.Link>
            <Navbar.Link href="/arrecifes">Reefs</Navbar.Link>
            <Navbar.Link href="/historia">Our Story</Navbar.Link>
          </Navbar.Content>
          <Navbar.Content
            css={{
              "@xs": {
                w: "12%",
                jc: "flex-end",
              },
            }}
          >
            <ConnectWallet />
            {/* <Dropdown placement="bottom-right">
              <Navbar.Item>
                <Dropdown.Trigger>
                  <Image
                    src="/user-icon.png"
                    width={42}
                    height={42}
                    alt="Profile"
                  />
                </Dropdown.Trigger>
              </Navbar.Item>
              <Dropdown.Menu
                aria-label="User menu actions"
                color="secondary"
                onAction={(actionKey) => console.log({ actionKey })}
              >
                <Dropdown.Item key="profile" css={{ height: "$18" }}>
                  <Text b color="inherit" css={{ d: "flex" }}>
                    Signed in as
                  </Text>
                  {address && (<Text b color="inherit" css={{ d: "flex" }}>
                    {address as string}
                  </Text>)}

                </Dropdown.Item>
                <Dropdown.Item key="settings" >
                  {address && (<Link color="inherit" href={"/profile/" + `${address as string}`}>
                  </Link>
                  )}
                </Dropdown.Item>
                <Dropdown.Item key="connect" withDivider css={{ height: "$18" }}>
                  <ConnectWallet />
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}
          </Navbar.Content>
          <Navbar.Collapse>
            <Navbar.CollapseItem
              key={1}
              activeColor="secondary"
            >
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="/buy"
              >
                Adopt-a-Coral
              </Link>
            </Navbar.CollapseItem>
            <Navbar.CollapseItem
              key={2}
              activeColor="secondary"
            >
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="/about"
              >
                About
              </Link>
            </Navbar.CollapseItem>
            <Navbar.CollapseItem
              key={3}
              activeColor="secondary"
            >
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="/arrecifes"
              >
                Reefs
              </Link>
            </Navbar.CollapseItem>
            <Navbar.CollapseItem
              key={4}
              activeColor="secondary"
            >
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="/historia"
              >
                Our Story
              </Link>
            </Navbar.CollapseItem>
          </Navbar.Collapse>
        </Navbar>
        <Component {...pageProps} />
      </NextUIProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
