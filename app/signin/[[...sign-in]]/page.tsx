import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return <SignIn path="/signin" forceRedirectUrl={"/dashboard"} />;
}
