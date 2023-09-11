import { SubscriptionSection } from "@/components/pricing";
import { Main } from "@/components/ui";

type Props = {};

const page = async ({ searchParams }) => {
  const { reference } = searchParams;

  if (!reference) {
    return (
      <Main>
        <SubscriptionSection />
      </Main>
    );
  }

  return <h1>Hello</h1>;
};

export default page;
