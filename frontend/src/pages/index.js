import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Button } from "@chakra-ui/react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1>Home</h1>
      <div>
        <Link href="/auth/login">
          <p className="btn">Login</p>
        </Link>
        <Link href="/auth/signup">
          <p className="btn">Signup</p>
        </Link>



 <Button colorScheme="teal">Button</Button>;

      </div>
    </main>
  )
}
