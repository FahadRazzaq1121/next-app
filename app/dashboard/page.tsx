"use client";

import Navbar from "@/component/Navbar";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  useAuth,
} from "@clerk/nextjs";
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

  return <Navbar />;
};

export default ClientDashboard;
