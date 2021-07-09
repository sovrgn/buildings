import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { header } from '../styles/globals';

import { useEffect } from 'react';




export default function Header () {


  return (
    <nav style={header.header}>
      <div style={header.halfFlex}>
        <h3>Welcome</h3>
      </div>

      <div style={{display: 'flex', width: '5rem', height: '100%'}}>
        <Image src='/avatar-png-icon-3.jpeg' width='50px' height='1px' objectFit='contain'/>
      </div>
    </nav>
  )
}
