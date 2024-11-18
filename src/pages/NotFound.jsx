import React from "react";
import notfoundImage from "../assets/notfound.png";


export const NotFound = () => {
    return (
        <div style={styles.container}>
            <img 
                src={notfoundImage}
                alt="Balón perdido"
                style={styles.image}
            />
            <h1 style={styles.title}>404 - ¡Fuera de Juego!</h1>
            <p style={styles.text}>
            Te adelantaste, esta parte de la cancha no está habilitada.<br />
            </p>
            <button style={styles.button} onClick={() => window.location.href = '/'}>
            Revisar con el VAR
            </button>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        minHeight: "100vh",
        backgroundColor: "#f4f4f4",
        padding: "20px",
    },
    image: {
        width: "480px",
        height: "380px",
        marginBottom: "20px",
    },
    title: {
        fontSize: "2rem",
        color: "#333",
        fontWeight: "bold",
        marginBottom: "10px",
    },
    text: {
        fontSize: "1.2rem",
        color: "#555",
        marginBottom: "20px",
    },
    button: {
        padding: "10px 20px",
        fontSize: "1rem",
        color: "#fff",
        backgroundColor: "#007bff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
};

export default NotFound;
