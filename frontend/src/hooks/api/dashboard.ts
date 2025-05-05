import { DashboardBarangResponse } from "@/api/entities";
import { createGetQueryHook } from "@/api/helpers";

export const useGetBarang = createGetQueryHook({
  endpoint: 'dashboard/read',
  responseSchema: DashboardBarangResponse,
  rQueryParams: { queryKey: ['getBarang'] },
});