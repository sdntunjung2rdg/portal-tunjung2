export default function Footer() {
  return (
    <footer className="app-footer d-flex justify-content-between align-items-center px-3">
      {/* Kanan */}
      <div className="d-none d-sm-block text-muted">
        Anything you want
      </div>

      {/* Kiri */}
      <div className="text-muted">
        <strong>
          © 2014–2025{" "}
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            AdminLTE.io
          </a>
        </strong>
        . All rights reserved.
      </div>
    </footer>
  );
}
