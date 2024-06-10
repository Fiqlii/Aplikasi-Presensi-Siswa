import React from 'react'
// import classNames from 'classnames'

import WidgetsDropdown from '../widgets/WidgetsDropdown'

import {
  CBreadcrumb,
  CBreadcrumbItem,
  CCol,
} from '@coreui/react'

import {
  UserGroupIcon,
  BuildingOfficeIcon,
} from '@heroicons/react/24/solid'

const Dashboard = () => {
  return (
    <>
      <div className='row g-5 mb-5'>
        <CCol className='col-lg-6'>
          <div className='card shadow-lg p-4'>
            <div className='d-flex gap-3'>
              <div className='d-flex flex-column text-center align-items-center justify-content-center gap-3'>
                <div className='card-title fs-1 fw-bold w-75'>
                  Jumlah Guru
                </div>
                <div>
                  <UserGroupIcon className="text-blue-500 size-lg" style={{ width: '62', height: '62' }}/>
                </div>
              </div>
              <div className='d-flex-column gap-3 py-5'>
                <div className='d-block'>
                  <p className='fs-5'>Laki - Laki :</p>
                  <h1 className='fs-4 fw-bold'>
                    25 Orang
                  </h1>
                </div>
                <div className='d-block'>
                  <p className='fs-5'>Perempuan :</p>
                  <h1 className='fs-4 fw-bold'>
                    20 Orang
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </CCol>
        <CCol className='col-lg-6'>
          <div className='card shadow-lg p-4'>
            <div className='d-flex gap-3'>
              <div className='d-flex flex-column text-center align-items-center justify-content-center gap-3'>
                <div className='card-title fs-1 fw-bold w-75'>
                  Jumlah Siswa
                </div>
                <div>
                  <UserGroupIcon className="text-blue-500 size-lg" style={{ width: '62', height: '62' }}/>
                </div>
              </div>
              <div className='d-flex-column gap-3 py-5'>
                <div className='d-block'>
                  <p className='fs-5'>Laki - Laki :</p>
                  <h1 className='fs-4 fw-bold'>
                    250 Orang
                  </h1>
                </div>
                <div className='d-block'>
                  <p className='fs-5'>Perempuan :</p>
                  <h1 className='fs-4 fw-bold'>
                    223 Orang
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </CCol>
      </div>
      <div className="row g-3 justify-content-md-center">
          <CCol className='col-lg-6'>
            <div className='card shadow-lg p-4'>
              <div className='d-flex gap-3'>
                <div className='d-flex flex-column text-center align-items-center justify-content-center gap-3'>
                  <div className='card-title fs-1 fw-bold w-75'>
                    Jumlah Kelas
                  </div>
                  <div>
                    <UserGroupIcon className="text-blue-500 size-lg" style={{ width: '62', height: '62' }}/>
                  </div>
                </div>
                <div className='d-flex-column gap-3 py-3'>
                  <div className='d-block'>
                    <p className='fs-5'>Kelas VII :</p>
                    <h1 className='fs-4 fw-bold'>
                      9 Kelas
                    </h1>
                  </div>
                  <div className='d-block'>
                    <p className='fs-5'>Kelas VIII :</p>
                    <h1 className='fs-4 fw-bold'>
                      9 Kelas
                    </h1>
                  </div>
                  <div className='d-block'>
                    <p className='fs-5'>Kelas IX :</p>
                    <h1 className='fs-4 fw-bold'>
                      9 kelas
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </CCol>
        </div>
    {/* <WidgetsDropdown className="mb-4" /> */}
    </>
  )
}

export default Dashboard
