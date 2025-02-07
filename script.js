document.addEventListener('DOMContentLoaded', () => {
    const ebooks = [
        { name: "Ebook 1", file: "ebook1.html" },
        { name: "Ebook 2", file: "ebook2.html" },
        // Adicione mais eBooks conforme necessário
    ];

    const listContainer = document.getElementById('ebook-list');
    const readerContainer = document.getElementById('reader');

    ebooks.forEach(ebook => {
        let button = document.createElement('button');
        button.textContent = ebook.name;
        button.addEventListener('click', () => loadEbook(ebook.file));
        listContainer.appendChild(button);
    });

    function loadEbook(file) {
        fetch(file)
            .then(response => response.text())
            .then(html => {
                readerContainer.innerHTML = html;
            })
            .catch(error => console.error('Erro ao carregar eBook:', error));
    }
});