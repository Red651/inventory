import DashboardLayout from "./layout/dashboardlayout"

export default function Dashboard(){
    console.log("Dashboard")
    return(
        <DashboardLayout>
            <div className="flex flex-col items-center justify-center min-h-screen">
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <p className="mt-4">Selamat datang di dashboard!</p>
            </div>
        </DashboardLayout>
    )
}