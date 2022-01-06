export function Node({value, handleClick}){
    return (
      <button className="square" onClick={() => {handleClick()}}>{value}</button>
    )
  }