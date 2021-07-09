
import { useState, useEffect, useRef } from 'react';

export default function ChangeToInput(props) {

  const [ inputting, setInputting ] = useState(false);

  const [ value, setValue ] = useState();

  const [ maxLengthError, setMaxLengthError ] = useState(false);
  const [ maxLength, setMaxLength ] = useState(200);


  const textAreaRef = useRef(null);

  const [ mobile, setMobile ] = useState();


  useEffect(() => {
    setValue(props.value);


    window.innerWidth <= 900 ? setMobile(true) : setMobile(false);


  },[props.value]);


  function resizeTextareaToContent() {
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = (textAreaRef.current.scrollHeight) + "px";
  }

  function taOnChange(ev){
    if(ev.target.value.length < +ev.target.maxLength){
      // todo: may be message that max lenght is reached or red border etc
      setValue(ev.target.value);
      ev.target.style.borderColor = '';
      setMaxLengthError(false);

    }else{
      ev.target.style.borderColor = 'red';
      setMaxLengthError(true);
    }
  }

  function onKeyPress(ev){
    if(ev.key === 'Enter'){
      setInputting(false);
      if(props.update && typeof props.update === 'function'){
        props.update(ev.target.value);
      }
    }
  }

  function onKeyDown(ev){
    if(ev.key === 'Escape' || ev.key === 'Esc' || ev.keyCode === 27){
      setInputting(false);
      setValue(props.value);
    }
  }

  function onBlur(ev){
    setInputting(false);
    if(props.update && typeof props.update === 'function'){
      props.update(ev.target.value);
    }
  }

  function onClick(ev){
    setInputting(true);
  }

  function r(){
    let html;
    switch(props.inputel){
      case 'textarea':
        html =
          <>

          <textarea
            ref={textAreaRef}
            onKeyDown={onKeyDown}
            onChange={taOnChange}
            onBlur={onBlur}
            autoFocus={true}
            rows={1}
            placeholder="long text"
            className={props.inClass}
            onInput={resizeTextareaToContent}
            maxLength={maxLength}
            value={value}
          >
          </textarea>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              padding: '.5rem .5rem',
              fontSize: '12px',
            }}
          >
            {maxLengthError && <p>You have reached {maxLength} symbols.</p>}
            <p style={{
              right: '0.5rem',
              position: 'relative',
              marginLeft: 'auto',

            }}>{value.length} / {maxLength}</p>
          </div>
          </>
        break;

      case 'input':
      default:
        html =
          <input
            type={props.type || 'text'}
            value={value}
            onKeyPress={onKeyPress}
            onKeyDown={onKeyDown}
            onChange={(ev)=> setValue(ev.target.value)}
            onBlur={onBlur}
            autofocus="true"
            placeholder={props.placeholder}
            className={props.inClass}
            style={props.inStyle}
            maxlength="150"
            onFocus={e => e.target.style.width = mobile ? '100%' : '20%'}
            onBlur={e => e.target.style.width = '20%'}
          />
        break;
    }

    return html;
  }

  return (
    <>
      {inputting ?
        r()
        :
        <props.el onClick={onClick} className={props.viewClass} style={props.viewStyle}>{value || props.placeholder}</props.el>
      }
    </>
  )
}
