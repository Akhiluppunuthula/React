import PropTypes from 'prop-types'
let heading = (
    <div>
      <h1>Hello react this is first folder</h1>
      <p>This is a react element</p>
      <p>To add react component we need to add a function in it</p>
    </div>
  );
  let creation = (
    <div className="bg-slate-600">
      <h1>
        After creation we need to create a reactdom createRoot and get the root
        element by document.getElementById method
      </h1>
      <h1>After this we should render the root with the component or element</h1>
    </div>
  );
  const Title = () => {
    return (
      <div >
        <h1 className="font-serif"> This is another Component</h1>
        <h6>
          {" "}
          We can add a component into the another component using <></> or simply
        </h6>
        <h6>
          In this we have learnt about JSX syntax React element and creation of
          components
        </h6>
        <h6>
          {" "}
          We also learnt how to add react element into component and a component
          this
        </h6>
      </div>
    );
  };
  
  const Next = (props)=>{
    return(
      <div>
        <h1>{props.here}</h1>
        <h1>{props.location}</h1>
        <h1>{props.pass}</h1>
      </div>
    )
  }
  Next.propTypes = {
    here: PropTypes.node.isRequired,
    location: PropTypes.node.isRequired,
    pass:PropTypes.node.isRequired,
  };
  
  const Create = () => {
    return (
      <div>
        {heading}
        {creation}
        <Title />
        <Next here="akhil" location="hyd" pass="pass"/>
        <h1>This is a Component</h1>
        <p>
          Here we can see we are adding {} react element into the component using
          curly braces
        </p>
        <p>To add react component we need to add a function in it</p>
      </div>
    );
  };



export default Create