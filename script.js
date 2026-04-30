// Microservicio 1: Control de Entradas (Requiere POST)
document.getElementById("btn-micro-1").addEventListener("click", async () => {
    try {
        const respuesta = await fetch('/api/entradas/escanear', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ qrData: 'QR-SINERGIA-001', ubicacion: 'Bodega Principal' })
        });
        const datos = await respuesta.json();
        alert("📦 RESPUESTA DE ENTRADAS (Puerto 3001):\n\n" + JSON.stringify(datos, null, 2));
    } catch (error) {
        alert("Error de conexión: " + error);
    }
});

// Microservicio 2: Gestión de Proveedores (Requiere GET)
document.getElementById("btn-micro-2").addEventListener("click", async () => {
    try {
        const respuesta = await fetch('/api/proveedores/123/historial');
        const datos = await respuesta.json();
        alert("🚚 RESPUESTA DE PROVEEDORES (Puerto 3002):\n\n" + JSON.stringify(datos, null, 2));
    } catch (error) {
        alert("Error de conexión: " + error);
    }
});

// Microservicio 3: Análisis Predictivo (Requiere GET)
document.getElementById("btn-micro-3").addEventListener("click", async () => {
    try {
        const respuesta = await fetch('/api/predictivo/reabastecer/PROD-001');
        const datos = await respuesta.json();
        alert("📈 RESPUESTA PREDICTIVA (Puerto 3003):\n\n" + JSON.stringify(datos, null, 2));
    } catch (error) {
        alert("Error de conexión: " + error);
    }
});
