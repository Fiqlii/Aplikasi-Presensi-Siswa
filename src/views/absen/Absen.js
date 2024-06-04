import React, { useState } from 'react'

import {
  CCard,
  CCardBody,
  CPagination,
  CPaginationItem,
} from '@coreui/react'


const Absen = () => {

  // const [entries, setEntries] = useState(5);

  return (
    <>
      <CCard className='py-4 px-3'>
        <CCardBody>
          <CPagination align="end" aria-label="Page navigation example" className="mt-4">
            <CPaginationItem disabled>Previous</CPaginationItem>
            <CPaginationItem>1</CPaginationItem>
            <CPaginationItem>2</CPaginationItem>
            <CPaginationItem>3</CPaginationItem>
            <CPaginationItem>Next</CPaginationItem>
          </CPagination>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Absen
