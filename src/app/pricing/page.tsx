import { SubscriptionSection, SuscriptionSuccess } from "@/components/pricing";
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

  return (
    <Main>
      <SuscriptionSuccess reference={reference} />
    </Main>
  );
};

export default page;
