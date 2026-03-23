function Notifications({ count }) {
  return (
    <div>
      {count > 0 && <p>🔔 Vous avez {count} notifications</p>}
    </div>
  );
}

export default Notifications;