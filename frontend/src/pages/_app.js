"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  

 useEffect(() => {
   const token = localStorage.getItem("token");
   console.log("hi");
   console.log(token);
   if (
     !token &&
     (router.pathname !== "/auth/login" ||
       router.pathname !== "/auth/signup" ||
       router.pathname !== "/auth/forgot-password" ||
       router.pathname !== "/auth/reset-password/[id]")
   ) {
     router.push("/auth/login");
   }
   console.log(router);
 }, [router.pathname]);

  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
