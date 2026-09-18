import { useState } from "react";

const RegisterForm = () => {

    const [formInfo, setFormInfo ] = useState({
    name: "",
    lastName: "",
    email: "",
    password: ""
})

const handleChange = (e) => {
  setFormInfo({
    ...formInfo,
    [e.target.name]: e.target.value
  });
};

const handleSubmit = (e) => {
    e.preventDefault();
    setFormInfo({
  name: "",
  lastName: "",
  email: "",
  password: ""
});
    }



return(
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            name="name"
            value={formInfo.name}
            placeholder= "First Name"
            onChange={handleChange}
            
        />
        <input
            type="text"
            name="lastName"
            value={formInfo.lastName}
            placeholder= "Last Name"
            onChange={handleChange}
            
            
        />
        <input
            type="text"
            name="email"
            value={formInfo.email}
            placeholder= "Email"
            onChange={handleChange}
            
           
        />
        <input
            type="password"
            name="password"
            value={formInfo.password}
            placeholder= "Password"
            onChange={handleChange}
            
        />
        <button type="submit">Submit</button>
    </form>
)

}


export default RegisterForm;