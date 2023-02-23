const Item = ({children}) => {
  return (
    <a href="/" class="list-group-item list-group-item-action">
      {children}
    </a>
  )
}

export default Item;