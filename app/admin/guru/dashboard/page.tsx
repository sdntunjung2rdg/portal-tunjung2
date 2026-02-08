export default function UsersPage() {
  return (
    <main className="app-main">
      {/* Header */}
      <div className="app-content-header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-end">
                <li className="breadcrumb-item">
                  <a href="/admin/guru/dashboard">Dashboard</a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="app-content">
        <div className="container-fluid">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Selamat Datang!</h3>
            </div>

            <div className="card-body">
              <p>Halaman ini digunakan untuk mengelola data sekolah.</p>
             
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
