import Navbar from "@/app/admin/components/Navbar"
import Sidebar from "@/app/admin/components/Sidebar-master"
import Footer from "@/app/admin/components/Footer"

export default function MasterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Sidebar />

      <div className="app-main">
        {children}
      </div>

      <Footer />
    </div>
  )
}
