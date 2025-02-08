var book;
var rendition;

// Carrega o eBook assim que o script for carregado
window.onload = function() {
    loadBook('ebooks/viverderenda.epub');
};

// Função para carregar o eBook
function loadBook(filePath) {
    // Carrega o eBook usando o epub.js
    book = ePub(filePath);

    // Renderiza o eBook na div com o id "viewer"
    rendition = book.renderTo("viewer", {
        width: "100%",
        height: "100%"
    });

    // Exibe o conteúdo do eBook
    rendition.display();
}

// Funções de navegação
function prevPage() {
    if (rendition) {
        rendition.prev();
    }
}

function nextPage() {
    if (rendition) {
        rendition.next();
    }
}