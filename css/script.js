:root {
    --primary-color: #2c3e50;
    --secondary-color: #34495e;
    --text-color: #ecf0f1;
    --container-width: min(1200px, 95%);
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Roboto', sans-serif;
    background-color: #f4f4f4;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

header {
    background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
    text-align: center;
    padding: 4rem 1rem;
    color: var(--text-color);
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.video-container {
    width: var(--container-width);
    margin: 10px auto;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.container {
    flex: 1;
    width: var(--container-width);
    margin: 20px auto;
    padding: 15px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.ebook-list select,
.ebook-list button {
    padding: 12px 15px;
    border-radius: 5px;
    font-size: 1rem;
    width: 100%;
    border: 1px solid #ddd;
}

.ebook-list button {
    background-color: var(--primary-color);
    color: white;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
}

.ebook-list button:hover {
    background-color: var(--secondary-color);
}

.pdf-viewer {
    width: 100%;
    margin: 15px 0;
    background: #f8f9fa;
    border-radius: 5px;
    padding: 10px;
    overflow-x: auto;
}

canvas {
    max-width: 100%;
    height: auto;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.controls {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin: 15px 0;
}

footer {
    background-color: var(--primary-color);
    color: var(--text-color);
    text-align: center;
    padding: 1rem;
    margin-top: auto;
}

.social-links {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 15px;
}

.social-links a {
    color: white;
    font-size: 24px;
    transition: transform 0.3s;
    text-decoration: none;
}

.social-links a:hover {
    transform: translateY(-2px);
}

@media (max-width: 768px) {
    .container {
        width: 100%;
        border-radius: 0;
        padding: 10px;
    }
}
