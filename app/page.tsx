"use client";
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";

export default function Index() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "center",
        flex: 1,
        width: "100%",
      }}
    >
      <nav
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
          height: "4rem",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            padding: "12px",
            fontSize: "0.875rem",
          }}
        >
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <SignOutButton />
          </SignedIn>
        </div>
      </nav>
    </div>
  );
}
