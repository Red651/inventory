
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import { useGetBarang } from "@/hooks/api/dashboard"



export default function Dashboard(){
    const {data, refetch} = useGetBarang();
    return(
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <SectionCards />
        <div className="px-4 lg:px-6">
            <ChartAreaInteractive />
        </div>
        {data && (
                <div className="px-4 lg:px-6">
                    <DataTable data={data.data} refetch={refetch}/>
                </div>
            )}
        </div>
    )
}