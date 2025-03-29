import { TopUpFormValues } from "@/components/DashboardPage/DashboardDepositRequest/DashboardDepositModal/DashboardDepositModalDeposit";

import { TopUpRequestData } from "@/utils/types";

export const getMemberTopUpRequest = async (params: {
  page: number;
  limit: number;
  search?: string;
  columnAccessor: string;
  isAscendingSort: boolean;
  teamMemberId?: string;
  userId?: string;
}) => {
  const response = await fetch(`/api/v1/deposit/history`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.error || "An error occurred while fetching the top-up history."
    );
  }

  return result as {
    data: TopUpRequestData[];
    totalCount: 0;
  };
};

export const updateTopUpStatus = async (params: {
  status: string;
  requestId: string;
}) => {
  const { requestId } = params;

  const response = await fetch(`/api/top-up/` + requestId, {
    method: "PUT",
    body: JSON.stringify(params),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.error || "An error occurred while creating the top-up request."
    );
  }

  return response;
};

export const handleDepositRequest = async (params: {
  TopUpFormValues: TopUpFormValues;
  file: File;
}) => {
  const formData = new FormData();
  formData.append("file", params.file);
  formData.append("accountName", params.TopUpFormValues.accountName);
  formData.append("amount", params.TopUpFormValues.amount);
  formData.append("topUpMode", params.TopUpFormValues.topUpMode);
  formData.append("accountNumber", params.TopUpFormValues.accountNumber);

  const response = await fetch(`/api/v1/deposit`, {
    method: "POST",
    body: formData,
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message);
  }

  return response;
};

export const verifyReference = async (params: { reference: string }) => {
  const response = await fetch(`/api/v1/deposit/reference`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.error || "An error occurred while verifying the reference."
    );
  }

  return result;
};
