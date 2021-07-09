import vars from './vars.js';


const home = {
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
    padding: '5rem 0',
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: 'calc(100% - 100px)',
    overflow: 'scroll',
    position: 'relative'
  },

  title: {
    margin: '0',
    lineHeight: '1.15',
    fontSize: '3rem',
    textAlign: 'center',
    padding: `${vars.spacingM}`,
    border: '1px solid rgba(0,0,0, 0.1)',
    borderRadius: vars.bR
  },

  par: {
    fontSize: '16px',
  }
}


export default home;
