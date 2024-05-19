
const Scroll = (props) => {
  return(
    <div style={{overflowY: 'scroll', padding:'10px', height: '100vh'}}>
      {props.children}
    </div>
  )
}

export default Scroll