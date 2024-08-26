"use client";

import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const ClientDashboard = () => {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  if (!isSignedIn) {
    router.push("/signin");
    return <div>Redirecting...</div>;
  } else {
    router.push("/dashboard");
  }

  return <div>Welcome to your dashboard!</div>;
};

export default ClientDashboard;
