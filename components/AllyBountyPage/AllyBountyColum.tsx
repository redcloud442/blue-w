import { user_table } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

export const AllyBountyColumn = (): ColumnDef<
  user_table & { total_bounty_earnings: string }
>[] => {
  return [
    {
      // Index column
      id: "index",
      header: () => <div className="text-center text-lg font-bold"></div>,
      cell: ({ row }) => <div className="text-center">{row.index + 1}.</div>,
    },
    {
      accessorKey: "user_username",
      header: () => (
        <div className="text-center text-lg font-bold">Username</div>
      ),
      cell: ({ row }) => (
        <div className="text-wrap">{row.getValue("user_username")}</div>
      ),
    },
    {
      accessorKey: "total_bounty_earnings",
      header: () => <div className="text-center text-lg font-bold">Amount</div>,
      cell: ({ row }) => (
        <div className="text-wrap">
          ₱{" "}
          {Number(row.getValue("total_bounty_earnings")).toLocaleString(
            "en-US",
            {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }
          )}
        </div>
      ),
    },
  ];
};
