"use client";

import { SignedIn, SignOutButton, useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const ClientDashboard = () => {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  if (!isSignedIn) {
    router.push("/signin");
    return <div>Redirecting...</div>;
  }

  return <div>Welcome to your dashboard!</div>;
};

export default ClientDashboard;
