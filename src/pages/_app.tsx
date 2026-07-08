import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Plus_Jakarta_Sans } from "next/font/google";
import { AuthProvider } from "@/context/AuthContext";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <main
        className={`${plusJakartaSans.className} ${plusJakartaSans.variable}`}
      >
        <Component {...pageProps} />
      </main>
    </AuthProvider>
  );
}
