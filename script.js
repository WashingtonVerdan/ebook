document.getElementById("ebook-selector").addEventListener("change", function() {
    let selectedBook = this.value;
    let readerDiv = document.getElementById("reader");
    let pdfReader = document.getElementById("pdf-reader");

    // Se for um EPUB
    if (selectedBook.endsWith(".epub")) {
        pdfReader.style.display = "none"; // Esconder leitor de PDF
        readerDiv.innerHTML = ""; // Limpar conteúdo anterior
        readerDiv.style.display = "block";

        let book = ePub(selectedBook);
        let rendition = book.renderTo("reader", { width: "100%", height: "600px" });
        rendition.display();
    }
    // Se for um PDF
    else if (selectedBook.endsWith(".pdf")) {
        readerDiv.style.display = "none"; // Esconder leitor de EPUB
        pdfReader.style.display = "block";
        pdfReader.src = selectedBook;
    }
});