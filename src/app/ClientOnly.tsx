"use client";

import dynamic from "next/dynamic";

const HomeClient = dynamic(() => import("@/features/home/HomeClient"), {
  ssr: false,
  loading: () => null,
});

export default function ClientOnly() {
  return <HomeClient />;
}
