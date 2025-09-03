// src/components/Index.tsx
interface IndexProps {
  user: string;
  onLogout: () => void;
}

const Index: React.FC<IndexProps> = ({ user, onLogout }) => {
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
    onLogout();
  };

  return (
    <div className="app-welcome">
      <h1>Bienvenido, ya estás logueado, campeón!</h1>
      <p>Usuario: {user}</p>

      <button className="logout-button" onClick={handleLogout}>
        Cerrar sesión
      </button>

      {/* Aquí puedes poner el resto de tu aplicación */}
    </div>
  );
};

export default Index;
