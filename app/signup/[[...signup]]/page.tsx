import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return <SignUp path="/signup" forceRedirectUrl={"/dashboard"} />;
}
