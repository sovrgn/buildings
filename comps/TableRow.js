import Image from 'next/image';
import { building } from '../styles/globals'

import { useState, useEffect } from 'react';
import useStore from '../comps/ZuState';

import AddRow from './AddRow';
import ChangeToInput from './ChangeToInput';


export default function TableRow() {

  let semiUid = () => {
    return Math.floor(Math.random()*10000);
  }


  const [ edit, setEdit ] = useState(false);

  const [ editInfo, setEditInfo ] = useState({});

  const mobile = useStore(state => state.mobile);
  const setMobile = useStore(state => state.setMobile);

  const inputInfo = useStore(state => state.inputInfo);
  const setInputInfo = useStore(state => state.setInputInfo);

  const preview = useStore(state => state.preview);
  const setPreview = useStore(state => state.setPreview);

  const image = useStore(state => state.image);
  const setImage = useStore(state => state.setImage);

  const [ mockDb, setMockDb ] = useState(
    [
      {
        id: 1452,
        name: 'Windsor',
        area: 1500,
        location: 'Lorem Ipsum, 15 Str',
        imgsrc: '/avatar-png-icon-3.jpeg'
      },
      {
        id: 2365,
        name: 'Astoria',
        area: 5000,
        location: '',
        imgsrc: null
      }
    ]
  )


  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      }
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }

  }, [image, mockDb, inputInfo])



  function removeItem(id) {

    let newMock = [...mockDb];

    let index = newMock.findIndex(el => el.id === id);

    try {
      if (index !== -1) {
        newMock.splice(index, 1)
        setMockDb(newMock);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function addItem() {

    let newMock = [...mockDb];

    inputInfo.id = semiUid();
    inputInfo.imgsrc = preview;

    console.log(inputInfo);

    if (inputInfo.name.length >= 1 && inputInfo.area.length >= 1) {
      newMock.push(inputInfo);
      setMockDb(newMock);
      setInputInfo({name: '', area: '', location: '', imgsrc: undefined, id: null});
      setPreview(null);
      setImage(null);
    }
  }


  function updateInfo(value, itemId, field) {
    let newMock = [...mockDb];

    let index = newMock.findIndex(el => el.id === itemId);

    newMock[index][field] = value;

    setMockDb(newMock);
  }

  return (
    <>
      <AddRow
        addItem={() => addItem()}
      />

      {mockDb.map((item, index) =>
        <div key={index} onClick={() => setEdit(item.id)} style={{...building.row, background: item.id == edit ? 'rgba(98,124,241, 0.1)' : 'rgba(255,255,255, 0.8)'}}>

          <div
            onClick={() => removeItem(item.id)}
            style={building.leftButton}
          >
            Remove
          </div>

          <div style={building.box}>
            {item.id}
          </div>

          {item.id == edit ?
            <ChangeToInput
                type={'text'}
                value={item.name}
                el={'div'}
                update={(value)=> updateInfo(value, item.id, `name`)}
                inStyle={{...building.box, borderRadius: '5px', border: '1px solid teal', padding: '5px 1rem', fontSize: '16px', zIndex: 10}}
                viewStyle={building.box}
                placeholder={'Name'}
            />
            :
            <div style={building.box}>
              {item.name}
            </div>
          }

          {item.id == edit ?
            <ChangeToInput
                type={'text'}
                value={item.area}
                el={'div'}
                update={(value)=> updateInfo(value, item.id, `area`)}
                inStyle={{...building.box, borderRadius: '5px', border: '1px solid teal', padding: '5px 1rem', fontSize: '16px', zIndex: 10}}
                viewStyle={building.box}
                placeholder={'Area'}
            />
            :
            <div style={building.box}>
              {item.area}
            </div>
          }


          {!mobile &&
            <>
              {item.id == edit ?
                <ChangeToInput
                    type={'text'}
                    value={item.location}
                    el={'div'}
                    update={(value)=> updateInfo(value, item.id, `location`)}
                    inStyle={{...building.box, borderRadius: '5px', border: '1px solid teal', padding: '5px 1rem', fontSize: '16px', zIndex: 10}}
                    viewStyle={building.box}
                    placeholder={'insert location'}
                />
                :
                <div style={building.box}>
                  {item.location ? item.location : <span style={{color: 'gray'}}>no specified location</span>}
                </div>
              }

              <div style={building.box}>
                {item.imgsrc ?
                  <img src={item.imgsrc} alt='uploaded image' style={building.img}/>
                  :
                  <span style={{color: 'gray'}}>no image</span>
                }
              </div>
          </>
          }


          <div style={{...building.rightButton, color: 'gray'}}>
            Doubleclick on fields to edit them and press Enter when ready.
          </div>


        </div>
      )
      }

    </>
  )
}
