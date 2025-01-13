"use client";
import { alliance_member_table } from "@prisma/client";
import { House } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import MerchantTable from "./MerchantTable";
type Props = {
  teamMemberProfile: alliance_member_table;
};

const MerchantPage = ({ teamMemberProfile }: Props) => {
  const router = useRouter();

  return (
    <div className="mx-auto py-8 md:p-10">
      <div>
        <header className="mb-4">
          <h1 className="Title">Merchant Page</h1>
          <p className="text-gray-600 dark:text-white">
            View all the merchant that are currently in the system.
          </p>
        </header>

        {/* Table Section */}
        <section className=" rounded-lg">
          <MerchantTable teamMemberProfile={teamMemberProfile} />
        </section>
        <div className="flex items-start mt-20 justify-center">
          <Button
            onClick={() => router.push("/")}
            className="mx-auto flex items-center w-10 h-10 gap-2 cursor-pointer hover:bg-gray-200"
          >
            <House />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MerchantPage;
