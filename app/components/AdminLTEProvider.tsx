"use client";

import { useEffect } from "react";

export default function AdminLTEProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
    import("admin-lte/dist/js/adminlte.min.js");
  }, []);

  return <>{children}</>;
}
