import SubscriptionPlan from "./SubscriptionPlan";
import SubscriptionHeader from "./SubscriptionHeader";
import { BASE_URL } from "@/config/env";

const getPlans = async () => {
  const response = await fetch(`${BASE_URL}/api/pricing`);
  const { data } = await response.json();
  return data;
};

type Props = {};

const SubscriptionSection = async (props: Props) => {
  const pricingPlans = await getPlans();
  const plagroundColor = (plan: any) => {
    if (plan.name === "free") return "bg-green-400";
    if (plan.name === "basic") return "bg-orange-400";
    if (plan.name === "pro") return "bg-red-500";
  };
  return (
    <section className="w-full">
      <div className=" w-full flex flex-col items-center py-[5rem] dark:bg-black">
        <div className="w-[90%] flex items-center md:items-start flex-col gap-4 ">
          <div className="w-full flex flex-col items-center ">
            <SubscriptionHeader />
            <div className="w-full flex flex-col items-center md:flex-row py-[2rem] md:justify-center gap-4">
              {pricingPlans.map((plan, i) => (
                <SubscriptionPlan
                  key={plan._id}
                  code={plan.code}
                  planBackground={plagroundColor(plan)}
                  planTitle={plan.name}
                  planPrice={plan.amount}
                  interval={plan.interval}
                  features={plan.features}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSection;
