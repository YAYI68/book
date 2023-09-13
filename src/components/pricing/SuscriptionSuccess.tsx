"use client";
import { useDataFetcher } from "@/hooks";

type Props = {
  reference: string;
};

const SuscriptionSuccess = (props: Props) => {
  const { reference } = props;
  console.log({ clientRef: reference });
  const { data: subscription, isLoading } = useDataFetcher({
    key: "/api/success",
    path: `success?reference=${reference}`,
  });

  return (
    <section className="text-white">
      <p>Hi $customer_email</p>
      <p>You re currently on the $ subscription.plan.name plan</p>
      <p>Status: subscription.status</p>
      <p>Subscription Code: $subscription.subscription_code</p>
      <p>
        Card on file:$ subscription.authorization.brand card ending in $
        subscription.authorization.last4 expires on
        $subscription.authorization.exp_month/$
        subscription.authorization.exp_year
      </p>
      <p>Next payment date: new Date(subscription.next_payment_date)</p>
    </section>
  );
};

export default SuscriptionSuccess;
