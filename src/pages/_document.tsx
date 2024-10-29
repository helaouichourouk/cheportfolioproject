import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-background text-zinc-950 antialiased selection:bg-cyan-500    selection:text-background">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
