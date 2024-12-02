import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Appbar from "@/components/Appbar";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <RecoilRoot>
      <Appbar />
      <Component {...pageProps} />
    </RecoilRoot>
  </>
}
