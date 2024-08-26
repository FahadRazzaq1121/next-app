import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <SignUp
      path="/signup"
      forceRedirectUrl={`${process.env.NEXT_PUBLIC_API_URL}/dashboard`}
    />
  );
}
