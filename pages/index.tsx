import { Inter } from "next/font/google";
import Head from "next/head";
import LoginPage from "./login";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
			className={`${inter.className}`}
		>
			<Head>
          <title>Login</title>
          {/* <link rel="icon" href="/daycohost/logo-daycohost-fondos-blancos.png" /> */}
          <meta name="build-date" content="12/08/2025" />
          <meta name="version" content="V1.0.0" />
      </Head>
			<LoginPage/>
		</main>
  );
}
