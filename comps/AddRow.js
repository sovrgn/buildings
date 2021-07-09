import Image from 'next/image';
import styles from '../styles/Home.module.css';

import { building } from '../styles/globals'
import { useState, useEffect } from 'react';
import useStore from '../comps/ZuState';


export default function AddRow(props) {

  const preview = useStore(state => state.preview);
  const setPreview = useStore(state => state.setPreview);

  const image = useStore(state => state.image);
  const setImage = useStore(state => state.setImage);

  const inputInfo = useStore(state => state.inputInfo);
  const setInputInfo = useStore(state => state.setInputInfo);

  const mobile = useStore(state => state.mobile);
  const setMobile = useStore(state => state.setMobile);

  return (
    <div style={{...building.row, border: '1px dashed rgba(98,124,241, 0.5)'}}>

      {preview &&
        <div style={{position: 'absolute', width: "100%", height: '100%', top: 0, left: 0, filter: "brightness(50%) invert(1)"}}>
          <Image src={preview} layout='fill' objectFit="cover" />
        </div>
      }


      <input
        style={{...building.box, borderRadius: '5px', border: '1px solid rgba(98,124,241, 0.5)', padding: '5px 1rem', fontSize: '16px', zIndex: 10}}
        type='text'
        value={inputInfo.name}
        placeholder='Name *'
        required
        onChange={(e) => setInputInfo({...inputInfo, name: e.target.value})}
        onFocus={e => e.target.style.width = mobile ? '100%' : '20%'}
        onBlur={e => e.target.style.width = '20%'}
      />


      <input
        style={{...building.box, borderRadius: '5px', border: '1px solid rgba(98,124,241, 0.5)', padding: '5px 1rem', fontSize: '16px', zIndex: 10}}
        type='text'
        required
        value={inputInfo.area}
        placeholder='Area *'
        onChange={(e) => setInputInfo({...inputInfo, area: e.target.value})}
        onFocus={e => e.target.style.width = mobile ? '100%' : '20%'}
        onBlur={e => e.target.style.width = '20%'}
      />

      {!mobile &&
        <input
          style={{...building.box, borderRadius: '5px', border: '1px solid rgba(98,124,241, 0.5)', padding: '5px 1rem', fontSize: '16px', zIndex: 10}}
          type='text'
          placeholder='Location'
          value={inputInfo.location}
          onChange={(e) => setInputInfo({...inputInfo, location: e.target.value})}
          onFocus={e => e.target.style.width = mobile ? '100%' : '20%'}
          onBlur={e => e.target.style.width = '20%'}
        />
      }

      {!mobile &&
        <>
          <label htmlFor='fileIn' style={{...building.box, borderRadius: '5px', border: '1px solid rgba(98,124,241, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', position: 'relative', background: 'rgba(255,255,255, 0.9)', padding: '.3rem 0', fontSize: '16px'}}>
            add image
          </label>
          <input
            id='fileIn'
            type='file'
            style={{display: 'none'}}
            onChange={e => {
                  const file = e.target.files[0];
                  if (file && file.type.substr(0,5) == 'image') {
                    setImage(file);
                  } else {
                    setImage(null);
                  }
                }}
            multiple
          />
        </>
      }

      <div className={styles.links} onClick={props.addItem} style={{...building.rightButton, cursor: 'pointer', boxShadow: '0 .1rem 1rem -.6rem black'}}>
        Save building
      </div>

    </div>
  )
}
