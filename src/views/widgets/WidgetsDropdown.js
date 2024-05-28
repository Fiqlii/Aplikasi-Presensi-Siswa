import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import {
  CRow,
  CCol,
  CWidgetStatsC,
} from '@coreui/react'
import { getStyle } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cilPeople,
  cilLibraryBuilding,
} from '@coreui/icons' // Tambahkan impor cilChartPie

const WidgetsDropdown = (props) => {
  const widgetChartRef1 = useRef(null)
  const widgetChartRef2 = useRef(null)

  useEffect(() => {
    document.documentElement.addEventListener('ColorSchemeChange', () => {
      if (widgetChartRef1.current) {
        setTimeout(() => {
          widgetChartRef1.current.data.datasets[0].pointBackgroundColor = getStyle('--cui-primary')
          widgetChartRef1.current.update()
        })
      }

      if (widgetChartRef2.current) {
        setTimeout(() => {
          widgetChartRef2.current.data.datasets[0].pointBackgroundColor = getStyle('--cui-info')
          widgetChartRef2.current.update()
        })
      }
    })
  }, [widgetChartRef1, widgetChartRef2])

  return (
    <CRow className={props.className} xs={{ gutter: 2 }}>
      <CCol xs={4}>
      <CWidgetStatsC
        className="mb-3"
        icon={<CIcon icon={cilPeople} height={36} />}s
        color='info'
        inverse
        progress={{ color: 'info', value: 100 }}
        text="Widget helper text"
        title="Jumlah Guru"
        value="25 Orang"
      />
      </CCol>
      <CCol xs={4}>
      <CWidgetStatsC
        className="mb-3"
        icon={<CIcon icon={cilPeople} height={36} />}
        color="success"
        inverse
        progress={{ color: 'success', value: 100 }}
        text="Widget helper text"
        title="Jumlah Siswa"
        value="600 orang"
      />
      </CCol>
      <CCol xs={4}>
      <CWidgetStatsC
        className="mb-3"
        icon={<CIcon icon={cilLibraryBuilding} height={36} />}
        color="warning"
        inverse
        progress={{ color: 'warning', value: 100 }}
        text="Widget helper text"
        title="Jumlah Kelas"
        value="27 Kelas"
      />
      </CCol>
    </CRow>
  )
}

WidgetsDropdown.propTypes = {
  className: PropTypes.string,
  withCharts: PropTypes.bool,
}

export default WidgetsDropdown
