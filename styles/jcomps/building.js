import vars from './vars.js';


const building = {
  container: {
    padding: '0 0.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    height: '100%',
    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif'
  },

  main: {
    padding: '0rem 0',
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    top: '100px',
    maxHeight: 'calc(100% - 200px)',
    overflow: 'scroll',
    position: 'relative'
  },

  table: {
    width: 'calc(100vw - 4rem)',
    border: '1px solid rgba(0,0,0, 0.1)',
    borderRadius: vars.bR,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '200px'
  },

  row: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    maxWidth: '100vw',
    padding: '4rem 0 2rem 0',
    borderBottom: '1px solid rgba(0,0,0, 0.1)',
    position: 'relative',
    overflow: 'visible',
  },

  headingRow: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: '100%',
    padding: '2rem 0',
    borderBottom: '1px solid rgba(0,0,0, 0.1)',
  },

  box: {
    flexGrow: 1,
    maxWidth: '33%',
    padding: '0 .5rem',
    textAlign: 'center',
    maxHeight: '100px',
    wordWrap: 'break-word',
    fontSize: '16px',
    borderRight: '1px solid rgba(0,0,0, 0.1)',
    background: 'rgba(255,255,255, 0)'
  },

  img: {
    maxWidth: '50px'
  },

  rightButton: {
    position: 'absolute',
    top: '0',
    right: '50%',
    transform: 'translateX(50%)',
    border: '1px solid rgba(0,0,0, 0.1)',
    padding: '.5rem',
    borderRadius: `0 0 ${vars.bR} ${vars.bR}`,
    fontSize: '12px',
    textAlign: 'center',
    background: 'rgba(255,255,255, 0.9)'
  },

  leftButton: {
    position: 'absolute',
    top: '0',
    left: '0',
    cursor: 'pointer',
    borderRight: '1px solid rgba(0,0,0, 0.1)',
    borderBottom: '1px solid rgba(0,0,0, 0.1)',
    padding: '.5rem',
    borderRadius: `0 0 ${vars.bR} 0`,
    color: 'red',
    fontSize: '12px'
  }
}


export default building;
