import { Button } from "@/components/ui/button";
import { formatDateToYYYYMMDD, formatDay } from "@/utils/function";
import { adminWithdrawalTotalReportData } from "@/utils/types";
import { ColumnDef } from "@tanstack/react-table";

export const AdminWithdrawalReportColumn =
  (): ColumnDef<adminWithdrawalTotalReportData>[] => {
    return [
      {
        accessorKey: "interval_start",
        header: ({ column }) => (
          <Button
            variant="ghost"
            className="p-1"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Date Start
          </Button>
        ),
        cell: ({ row }) => {
          return (
            <div className="flex items-center gap-2 text-wrap ">
              {formatDay(row.original.interval_start)},{" "}
              {formatDateToYYYYMMDD(row.original.interval_start)}
            </div>
          );
        },
      },
      {
        accessorKey: "total_admin_approvals",
        header: ({ column }) => (
          <Button
            className="p-0"
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Total Admin Approvals
          </Button>
        ),
        cell: ({ row }) => (
          <div className="text-center">
            {row.getValue("total_admin_approvals")}
          </div>
        ),
      },
      {
        accessorKey: "total_admin_approved_amount",
        header: ({ column }) => (
          <Button
            className="p-1"
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Total Admin Approved Amount
          </Button>
        ),
        cell: ({ row }) => (
          <div className="text-center text-green-500">
            ₱
            {Number(row.getValue("total_admin_approved_amount")).toLocaleString(
              "en-US",
              {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }
            )}
          </div>
        ),
      },
      {
        accessorKey: "total_accounting_approvals",
        header: ({ column }) => (
          <Button
            className="p-1"
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Total Accounting Approvals
          </Button>
        ),
        cell: ({ row }) => (
          <div className="text-center">
            {row.getValue("total_accounting_approvals")}
          </div>
        ),
      },
      {
        accessorKey: "total_accounting_approved_amount",
        header: ({ column }) => (
          <Button
            className="p-1"
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Total Accounting Approved Amount
          </Button>
        ),
        cell: ({ row }) => (
          <div className="text-center text-green-500">
            ₱
            {Number(
              row.getValue("total_accounting_approved_amount")
            ).toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </div>
        ),
      },
      {
        accessorKey: "interval_end",
        header: ({ column }) => (
          <Button
            variant="ghost"
            className="p-1"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Date End
          </Button>
        ),
        cell: ({ row }) => {
          return (
            <div className="flex items-center gap-2 text-wrap ">
              {formatDay(row.getValue("interval_end"))},{" "}
              {formatDateToYYYYMMDD(row.getValue("interval_end"))}
            </div>
          );
        },
      },
      {
        accessorKey: "total_net_approved_amount",
        header: ({ column }) => (
          <Button
            variant="ghost"
            className="p-1"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Total Net Approved Amount
          </Button>
        ),
        cell: ({ row }) => {
          return (
            <div className="flex items-center gap-2 text-wrap text-green-500 ">
              ₱
              {Number(row.getValue("total_net_approved_amount")).toLocaleString(
                "en-US",
                {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }
              )}
            </div>
          );
        },
      },
    ];
  };
