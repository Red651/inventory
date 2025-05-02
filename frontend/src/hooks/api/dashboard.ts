import { DashboardBarang } from "@/api/entities";
import { createGetQueryHook } from "@/api/helpers";

export const useGetBarang = createGetQueryHook({
  endpoint: 'dashboard/read',
  responseSchema: DashboardBarang,
  rQueryParams: { queryKey: ['getBarang'] },
});