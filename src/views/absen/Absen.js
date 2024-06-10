import React, { useState } from 'react'

import {
  CCard,
  CCardBody,
  CForm,
  CImage,
  CCardTitle,
} from '@coreui/react'

import FotoDatang from '../../assets/images/vue.jpg';
import FotoPulang from '../../assets/images/react.jpg';


const Absen = () => {
  return (
    <>
      <CCard className='py-5 px-5 mt-5'>
        <CCardBody>
          <CCardTitle className="d-flex justify-content-center p-3 mb-4"> <h4>INFORMASI ABSEN MASUK</h4> </CCardTitle>
          <CForm className='row g-3'>
            <div className="col-md-6 mb-3 p-4">
              <div className='d-flex-column gap-3 py-3 mt-5'>
                <table>
                  <tr>
                    <th style={{ padding: '10px 15px' }}>NIM</th>
                    <td style={{ padding: '10px 15px' }}> :  211511036 </td>
                  </tr>
                  <tr>
                    <th style={{ padding: '10px 15px' }}>Nama</th>
                    <td style={{ padding: '10px 15px' }}> :  Asep Sunandar</td>
                  </tr>
                  <tr>
                    <th style={{ padding: '10px 15px' }}>Keterangan</th>
                    <td style={{ padding: '10px 15px' }}> :  Hadir</td>
                  </tr>
                </table>
              </div>
            </div>
            <div className='col-lg-6 row g-3 mb-3'>
              <div className='text-center fs-4 fw-bold mb-3'>
                Info Siswa
              </div>
              <div className="col-md-6">
                <div className="image-container d-flex justify-content-center flex-column align-items-center">
                  <CImage rounded thumbnail src={FotoDatang} width={300} height={300} />
                  <div className="text-center mt-3">Hadir</div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="image-container d-flex justify-content-center flex-column align-items-center">
                  <CImage rounded thumbnail src={FotoPulang} width={300} height={300} />
                  <div className="text-center mt-3">Pulang</div>
                </div>
              </div>
            </div>

          </CForm>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Absen
