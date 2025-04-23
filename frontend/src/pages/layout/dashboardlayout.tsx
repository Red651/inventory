import { ReactNode } from "react";
import Sidebar from "./sidebar"
import Footer from "./footer";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"


interface PropsDashboard{
    children : ReactNode
}

export default function DashboardLayout( {children} : PropsDashboard){
    return(
        <div className="flex">
            <SidebarProvider>
                <Sidebar />
                <main className="p-0">
                    <SidebarTrigger />
                    {children}
                </main>
                <Footer/>
            </SidebarProvider>
            
        </div>
    )

}