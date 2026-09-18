import { useState } from "react";

const LoginForm = ({ onLogin }) => {
  const [formInfo, setFormInfo] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormInfo({
      ...formInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(formInfo);

    // Vaciamos los campos
    setFormInfo({
      email: "",
      password: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Iniciar Sesión</h2>
      <input
        type="email"
        name="email"
        value={formInfo.email}
        placeholder="Email"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={formInfo.password}
        placeholder="Contraseña"
        onChange={handleChange}
      />
      <button type="submit">Entrar</button>
    </form>
  );
};

export default LoginForm;