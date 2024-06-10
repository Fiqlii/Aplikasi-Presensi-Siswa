import React from 'react'

//pages
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const DaftarKelas = React.lazy(() => import('./views/daftarKelas/DaftarKelas'))
const Kelas = React.lazy(() => import('./views/daftarKelas/Kelas'))
const DaftarSiswa = React.lazy(() => import('./views/daftarKelas/DaftarSiswa'))
const InputDataSiswa = React.lazy(() => import('./views/daftarKelas/InputDataSiswa'))
const EditDataSiswa = React.lazy(() => import('./views/daftarKelas/EditDataSiswa'))
const DaftarGuru = React.lazy(() => import('./views/daftarGuru/DaftarGuru'))
const InputDataGuru = React.lazy(() => import('./views/daftarGuru/InputDataGuru'))
const EditDataGuru = React.lazy(() => import('./views/daftarGuru/EditDataGuru'))
const Absen = React.lazy(() => import('./views/absen/Absen'))
const RekapAbsen = React.lazy(() => import('./views/rekapAbsen/RekapAbsen'))
const UploadSuratSakit = React.lazy(() => import('./views/uploadSuratSakit/UploadSuratSakit'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/daftarKelas', name: 'Daftar Kelas', element: DaftarKelas },
  { path: '/Kelas', name: 'Kelas', element: Kelas },
  { path: '/daftarGuru', name: 'Daftar Guru', element: DaftarGuru },
  { path: '/inputDataGuru', name: 'Input Data Guru', element: InputDataGuru },
  { path: '/EditDataGuru', name: 'Edit Data Guru', element: EditDataGuru },
  { path: '/rekapAbsen', name: 'Rekap Absen', element: RekapAbsen },
  { path: '/absen', name: 'Absensi', element: Absen },
  { path: '/daftarSiswa', name: 'Daftar Siswa', element: DaftarSiswa },
  { path: '/inputDataSiswa', name: 'Input Data Siswa', element: InputDataSiswa },
  { path: '/editDataSiswa', name: 'Edit Data Siswa', element: EditDataSiswa },
  { path: '/uploadSuratSakit', name: 'Upload Surat Sakit', element: UploadSuratSakit },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes
