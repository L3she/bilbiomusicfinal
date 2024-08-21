document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        // Mostrar información del archivo
        const fileInfo = `
            <h2>Información del Archivo:</h2>
            <p><strong>Nombre:</strong> ${file.name}</p>
            <p><strong>Tamaño:</strong> ${file.size} bytes</p>
            <p><strong>Tipo:</strong> ${file.type}</p>
        `;
        document.getElementById('file-info').innerHTML = fileInfo;

        // Leer y mostrar la vista previa del archivo
        const reader = new FileReader();
        reader.onload = function(e) {
            const preview = `
                <h2>Vista Previa:</h2>
                <img src="${e.target.result}" alt="Vista previa" style="max-width: 100%; height: auto;">
            `;
            document.getElementById('file-preview').innerHTML = preview;
        };
        reader.readAsDataURL(file); // Lee el archivo como una URL de datos
    }
});
