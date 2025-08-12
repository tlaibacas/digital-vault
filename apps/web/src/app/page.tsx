import Image from "next/image";
import Header from "@/components/header";

export default function Home() {
  return (
    <>
    <Header />
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to Digital Vault</h1>
      <p className="mt-4 text-lg">
        Your secure placeses for digital assets.
      </p>
      <Image
        src="/logo.png"
        alt="Digital Vault Logo"
        width={150}
        height={150}
        className="mt-8"
      />
    </main>
    </>
  );  
    
}
