import React from 'react';
import ReactDOM from 'react-dom';
const app = document.getElementById('app-info');

const Info = (props) => {
  return (
    <div>
      <h1>Info</h1>
      <p>The info is : {props.info}</p>
    </div>
  )
}

const withAdminWarning = (WrappedComponent) => {
return (props)=>
(<div>
    {props.isAdmin && <p>This is for your eyes only.Destoy after reading!</p> }
    <WrappedComponent {...props}/>
</div>
)
}

const requireAuthentication =(WrappedComponent)=>{
return (props)=>(
    <div>
    {props.isAuthenticated ? (<WrappedComponent {...props}/>) : (<p>You need to login</p>)}
    </div>
)
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);
ReactDOM.render(<AuthInfo isAuthenticated={false} info="Private in goes here bacause you are authenticated"/>,app);


