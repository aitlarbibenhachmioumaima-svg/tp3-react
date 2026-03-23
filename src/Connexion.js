import { useState } from 'react';

function Connexion() {
  const [status, setStatus] = useState(false);

  return (
    <div>
      <h3>{status ? "Connecté ✅" : "Déconnecté ❌"}</h3>
      <button onClick={() => setStatus(!status)}>Changer le statut</button>
    </div>
  );
}

export default Connexion;