import { building } from '../styles/globals'
import { useState, useEffect } from 'react';
import useStore from '../comps/ZuState';
import TableRow from './TableRow';

export default function Table(props) {

  const mobile = useStore(state => state.mobile);
  const setMobile = useStore(state => state.setMobile);

  useEffect(() => {

    window.innerWidth <= 900 ? setMobile(true) : setMobile(false);

  })

  return (
    <>
      <div style={building.table}>

        <div style={building.headingRow}>
          <div style={building.box}>
            Id
          </div>
          <div style={building.box}>
            Name
          </div>
          <div style={building.box}>
            Area
          </div>
          {!mobile &&
            <>
              <div style={building.box}>
                Location
              </div>
              <div style={building.box}>
                Image
              </div>
            </>
          }
        </div>

        <TableRow />
      </div>
    </>
  )
}
