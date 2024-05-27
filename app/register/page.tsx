import { authOptions } from "@/auth";
import PricingCards from "@/components/PricingCards";
import { getServerSession } from "next-auth";

const Register = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className="isolate overflow-hidden bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">
            Register
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Let's Handle Your Membership {session?.user?.name?.split(" ")?.[0]}{" "}
            !
          </p>
        </div>
      </div>

      <div className="flow-root bg-white pb-24 sm:pb-32">
        <div className="-mt-80">
          <PricingCards redirect={false} />
        </div>
      </div>
    </div>
  );
};

export default Register;
