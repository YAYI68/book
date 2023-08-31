import { Main } from "@/components/ui";
import DashboardSideNav from "@/components/header/DashboardSideNav";
import { getCurrentSession } from "@/utils";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Studee",
  description: "Generated by create next app",
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getCurrentSession();
  if (!session) {
    redirect("/login");
  }
  if (session && session.role !== "admin") {
    redirect("/account/profile");
  } else {
    return (
      <Main>
        <section className=" w-full  lg:pt-[3rem] pb-[2rem]">
          <div className="w-full h-full  flex flex-col items-center">
            <DashboardSideNav />
            <div className="w-[90%] flex flex-col items-end ">
              <aside className="w-full h-full lg:w-[90%] rounded bg-gray-200 dark:bg-gray-800 p-4">
                {children}
              </aside>
            </div>
          </div>
        </section>
      </Main>
    );
  }
}
