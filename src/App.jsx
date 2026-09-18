import { useState } from "react";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import LoginForm from "./components/LoginForm/LoginForm";
import TodayTasks from "./components/TodayTasks/TodayTasks";

function App() {
  // Lista con todos los usuarios registrados
  const [users, setUsers] = useState([]);
  
  // Usuario logueado (null si nadie ha iniciado sesión)
  const [currentUser, setCurrentUser] = useState(null);
  
  // Alterna entre mostrar Registro (true) o Login (false)
  const [isRegisterView, setIsRegisterView] = useState(true);

  // Recibe al usuario desde RegisterForm y lo guarda en el array
  const handleRegister = (newUser) => {
    setUsers([...users, newUser]);
    setIsRegisterView(false); // Tras registrarse, lo mandamos al login
  };

  // Recibe { email, password } desde LoginForm y busca coincidencia
  const handleLogin = (credentials) => {
    const userFound = users.find(
      (user) =>
        user.email === credentials.email &&
        user.password === credentials.password
    );

    if (userFound) {
      setCurrentUser(userFound);
    } else {
      alert("Credenciales incorrectas o usuario no registrado");
    }
  };

  // Cierra la sesión
  const handleLogout = () => {
    setCurrentUser(null);
  };

  return (
    <main>
      {!currentUser ? (
        // VISTA PÚBLICA (Si no hay usuario logueado)
        <div>
          <button onClick={() => setIsRegisterView(!isRegisterView)}>
            {isRegisterView ? "Ir a Login" : "Ir a Registro"}
          </button>

          {isRegisterView ? (
            <RegisterForm onRegister={handleRegister} />
          ) : (
            <LoginForm onLogin={handleLogin} />
          )}
        </div>
      ) : (
        // VISTA PRIVADA (Dashboard - Si hay usuario logueado)
        <div>
          <header>
            <h1>Hi, {currentUser.name}!</h1>
            <p>What are your plans for today?</p>
            <button onClick={handleLogout}>Cerrar sesión</button>
          </header>

          {/* Aquí irán los componentes del Dashboard */}
        </div>
      )}
      <TodayTasks />
    </main>
    
  );
}

export default App;