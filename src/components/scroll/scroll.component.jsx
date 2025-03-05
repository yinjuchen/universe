
const Scroll = (props) => {
  return(
    <div style={{overflowY: 'scroll', padding:'10px', height: '100vh-60px'}}>
      {props.children}
    </div>
  )
}

export default Scroll