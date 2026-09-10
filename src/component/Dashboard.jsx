function Dashboard() {
  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h2>Dashboard</h2>

        <ul style={styles.menu}>
          <li>🏠 Home</li>
          <li>🚗 Cars</li>
          <li>👤 Users</li>
          <li>⚙ Settings</li>
        </ul>
      </div>

      {/* Main Content */}
      <div style={styles.main}>
        <div style={styles.header}>
          <h2>Welcome Admin</h2>
          <button style={styles.btn}>Logout</button>
        </div>

        {/* Cards */}
        <div style={styles.cardContainer}>
          <div style={styles.card}>
            <h3>Total Cars</h3>
            <p>120</p>
          </div>

          <div style={styles.card}>
            <h3>Available</h3>
            <p>95</p>
          </div>

          <div style={styles.card}>
            <h3>Sold</h3>
            <p>25</p>
          </div>
        </div>

        {/* Image */}
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800"
            alt="Car"
            style={styles.image}
          />
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    fontFamily: "Arial",
  },

  sidebar: {
    width: "220px",
    background: "#1f2937",
    color: "#fff",
    padding: "20px",
  },

  menu: {
    listStyle: "none",
    padding: 0,
    marginTop: "20px",
  },

  main: {
    flex: 1,
    background: "#f4f4f4",
    padding: "20px",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  btn: {
    background: "#2563eb",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
  },

  cardContainer: {
    display: "flex",
    gap: "20px",
    marginTop: "30px",
  },

  card: {
    flex: 1,
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },

  image: {
    width: "600px",
    maxWidth: "100%",
    borderRadius: "10px",
  },
};

export default Dashboard;