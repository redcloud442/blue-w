import WithdrawalPage from "@/components/WithdrawalPage/WithdrawalPage";
import { protectionAccountingUser } from "@/utils/serversideProtection";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Withdrawal Records",
  description: "List of Withdrawal Records",
  openGraph: {
    url: "/withdrawal",
  },
};

const Page = async () => {
  const { teamMemberProfile } = await protectionAccountingUser();

  if (!teamMemberProfile) return redirect("/500");

  return <WithdrawalPage />;
};

export default Page;
