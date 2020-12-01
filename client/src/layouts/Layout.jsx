export default function Layout(props) {
  return (
    <div>
      <h1>My Poetry Collection</h1>
      {props.children}
    </div>
  )
}