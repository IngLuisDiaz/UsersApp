import { useState } from "react"
const initialUserForm={
    username:'',
    password:'',
    email:'',
}

export const UserForm = () =>{

    const [userForm, setUserFrom]=useState(initialUserForm);
    const {username, password, email}= userForm;

    const onInputChange=(event) =>{
        //console.log(target.value)
        const {name, value}=event.target;
        setUserFrom({...userForm, [name]:value})
    }
    
    const onSubmit=(event)=>{
        event.preventDefault();
        // validar que los campos no esten vacios
        if(!username ||!password ||!email){
            alert('Todos los campos son obligatorios');
            return;
        }
        // se envian los datos y se limpia formulario
        setUserFrom (initialUserForm);
        console.log('Form submitted', userForm)
        // se envian ls datos y se limpia formulario
        setUserFrom (initialUserForm);
    }

    return (<>
    
        <form onSubmit={onSubmit}>
            <input 
            className="form-control my-3 w-75" 
            placeholder="Username"
            name="username"
            value={username}
            onChange={onInputChange}/>
            <input 
            className="form-control my-3 w-75" 
            placeholder="Password"
            name="password" 
            value={password}
            type="password" 
            onChange={onInputChange}/>
            <input 
            className="form-control my-3 w-75" 
            placeholder="Email"
            name="email" 
            value={email} 
            onChange={onInputChange}/>
            <button 
            className="btn btn-primary" 
            type="submit">
                crear
            </button>
        </form>
    
    </>)
}
