// import React from 'react'
import React, { useState } from 'react'
import CIcon from '@coreui/icons-react'
// import classNames from 'classnames'

import {
  CCard,
  CCardTitle,
  CButton,
  CTable,
  CCardBody,
  CImage,
  CTableHead,
  CTableBody,
  CTableHeaderCell,
  CTableRow,
  CTableDataCell,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from '@coreui/react'


const Kelas = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CCard className='py-4 px-3'>
        <CCardBody>
          <CCardTitle className='p-2'>Kelas VII A</CCardTitle>
          <CTable className='px-5 mt-3'>
            <CTableHead color="primary">
              <CTableRow>
                <CTableHeaderCell scope="col">No</CTableHeaderCell>
                <CTableHeaderCell scope="col">NIM</CTableHeaderCell>
                <CTableHeaderCell scope="col">Nama</CTableHeaderCell>
                <CTableHeaderCell scope="col">No Orang Tua</CTableHeaderCell>
                <CTableHeaderCell scope="col">Datang</CTableHeaderCell>
                <CTableHeaderCell scope="col">Pulang</CTableHeaderCell>
                <CTableHeaderCell scope="col">Status</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow>
                <CTableHeaderCell scope="row">1</CTableHeaderCell>
                <CTableDataCell>211511038</CTableDataCell>
                <CTableDataCell>Asep Sunandar</CTableDataCell>
                <CTableDataCell>Dadang</CTableDataCell>
                <CTableDataCell>
                  <CImage rounded src="/images/vue.png" width={125} height={125} />
                </CTableDataCell>
                <CTableDataCell>
                  -
                </CTableDataCell>
                <CTableDataCell>
                  <CButton color="warning" shape="rounded-pill">Izin</CButton>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">2</CTableHeaderCell>
                <CTableDataCell>211511039</CTableDataCell>
                <CTableDataCell>Dang Iyun</CTableDataCell>
                <CTableDataCell>Deden</CTableDataCell>
                <CTableDataCell>
                  <CImage rounded src="/images/vue.png" width={125} height={125} />
                </CTableDataCell>
                <CTableDataCell>
                  <CImage rounded src="/images/vue.png" width={125} height={125} />
                </CTableDataCell>
                <CTableDataCell>
                  <CButton color="success" shape="rounded-pill">Hadir</CButton>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">3</CTableHeaderCell>
                <CTableDataCell>211511040</CTableDataCell>
                <CTableDataCell>Asep Aja</CTableDataCell>
                <CTableDataCell>Suratno</CTableDataCell>
                <CTableDataCell>
                  -
                </CTableDataCell>
                <CTableDataCell>
                  -
                </CTableDataCell>
                <CTableDataCell>
                  <CButton color="danger" shape="rounded-pill">Alpa</CButton>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">4</CTableHeaderCell>
                <CTableDataCell>211511041</CTableDataCell>
                <CTableDataCell>Endang Sukanti</CTableDataCell>
                <CTableDataCell>Dadang Kardus</CTableDataCell>
                <CTableDataCell>
                  <CImage rounded src="/images/vue.png" width={125} height={125} />
                </CTableDataCell>
                <CTableDataCell>
                  <CImage rounded src="/images/vue.png" width={125} height={125} />
                </CTableDataCell>
                <CTableDataCell>
                < CButton color="success" shape="rounded-pill" width={125} height={125}>Hadir</CButton>
                </CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
          <CButton color="primary" onClick={() => setVisible(!visible)}>
            Simpan
          </CButton>
          <CModal visible={visible} onClose={() => setVisible(false)}>
            <CModalHeader>
              <CModalTitle>Apaakah Data Yang Di Inputkan Sudah Benar?</CModalTitle>
            </CModalHeader>
            <CModalBody>Data yang sudah divalidasi akan dikirimkan kepada orang tua murid</CModalBody>
            <CModalFooter>
              <CButton color="secondary" onClick={() => setVisible(false)}>
                Close
              </CButton>
              <CButton color="primary">Data Tersebut Sudah Benar</CButton>
            </CModalFooter>
          </CModal>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Kelas
