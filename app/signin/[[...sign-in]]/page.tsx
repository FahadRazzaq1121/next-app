import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <SignIn
      path="/signin"
      forceRedirectUrl={`${process.env.NEXT_PUBLIC_API_URL}/dashboard`}
    />
  );
}
