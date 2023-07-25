//function Avatar(props){
function Avatar({src,width,height,children}){
    return(
        <>
        {/* <img src={props.src} width={props.width} height={props.height}/>  */}
        <img src={src} width={width} height={height}/>
        {children}
        </>
    )
}
export default Avatar;