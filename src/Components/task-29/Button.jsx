

const Button = () => {
    function handleClick(){
      console.log('clicked')
    }
  return (
    <div>
        <button onClick={handleClick} className="border border-blue-400 p-2 m-4">Click here</button>
    </div>
  )
}

export default Button