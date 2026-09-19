import { useState } from "react";

const initialMessages = [
  { id: 1, message: "Tu entrega ha sido calificada", time: "Hace 10 min" },
  { id: 2, message: "Tienes un nuevo mensaje", time: "Hace 25 min" },
  { id: 3, message: "Tu pedido ha sido enviado", time: "Hace 1 hora" },
  { id: 4, message: "Se ha actualizado tu perfil", time: "Hace 3 horas" },
  { id: 5, message: "Tienes una nueva actividad pendiente", time: "Ayer" }
];

const NotificationMessages = () => {

    const [ notifications, setNotifications ] = useState(initialMessages);

    const handleDismiss = (id) => {
        const updateMessage = notifications.filter((item) => item.id != id );
        setNotifications(updateMessage)

    }

  return (
    <section>
        <h3>Notificaciones</h3>
        <ul>
  {notifications.length === 0 ? (
    <p>No hay notificaciones nuevas</p>
  ) : (
    notifications.map((item) => (
      <li key={item.id}>
        <span>{item.message}</span> — <small>{item.time}</small>
        <button onClick={() => handleDismiss(item.id)}>Eliminar</button>
      </li>
    ))
  )}
</ul>
    </section>
  )
};

export default NotificationMessages;