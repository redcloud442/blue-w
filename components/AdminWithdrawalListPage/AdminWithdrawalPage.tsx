import AdminWithdrawalHistoryTable from "./AdminWithdrawalTable";

const AdminWithdrawalHistoryPage = () => {
  return (
    <div className="mx-auto md:p-10">
      <div>
        <header className="mb-4">
          <h1 className="Title">Withdrawal History List Page</h1>
          <p className="text-gray-600 dark:text-white">
            View all the withdrawal history that are currently in the system.
          </p>
        </header>

        {/* Table Section */}
        <section className=" rounded-lg ">
          <AdminWithdrawalHistoryTable />
        </section>
      </div>
    </div>
  );
};

export default AdminWithdrawalHistoryPage;
