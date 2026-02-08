"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path || pathname.startsWith(path + "/");

  return (
    <aside className="app-sidebar bg-body-secondary shadow" data-bs-theme="dark">
      {/* BRAND */}
      <div className="sidebar-brand">
        <Link href="/admin/dashboard" className="brand-link">
          <span className="brand-text fw-semibold">
            SDN Tunjung 02
          </span>
        </Link>
      </div>

      {/* SIDEBAR */}
      <div className="sidebar-wrapper">
        <nav>
          <ul
            className="nav sidebar-menu flex-column"
            data-lte-toggle="treeview"
            role="menu"
            data-accordion="false"
          >
            {/* DASHBOARD */}
            <li className="nav-item">
              <Link
                href="/admin/dashboard"
                className={`nav-link ${isActive("/admin/dashboard") ? "active" : ""}`}
              >
                <i className="nav-icon fas fa-home"></i>
                <p>Menu Utama</p>
              </Link>
            </li>

            {/* BERANDA MASTER */}
            <li className="nav-item">
              <Link
                href="/admin/master"
                className={`nav-link ${isActive("/admin/master") ? "active bg-danger text-white" : ""}`}
              >
                <i className="nav-icon fas fa-chart-line"></i>
                <p>Beranda</p>
              </Link>
            </li>

            {/* USERS */}
            <li className="nav-item">
              <Link
                href="/admin/master/users"
                className={`nav-link ${isActive("/admin/master/users") ? "active bg-danger text-white" : ""}`}
              >
                <i className="nav-icon fas fa-users"></i>
                <p>Pengguna</p>
              </Link>
            </li>



            {/* SURAT */}
            <li className="nav-item">
              <Link
                href="/admin/master/sekolah"
                className={`nav-link ${isActive("/admin/master/sekolah") ? "active bg-danger text-white" : ""}`}
              >
                <i className="nav-icon fas fa-school"></i>
                <p>Data Sekolah</p>
              </Link>
            </li>



            {/* LOGOUT */}
            <li className="nav-item mt-3">
              <Link href="/login" className="nav-link text-danger">
                <i className="nav-icon fas fa-sign-out-alt"></i>
                <p>Logout</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
