/* Buscando e contando dados em arrays

baseado no array 'booksByCategory, faça:
    * Contar o número de categorias 
    * Contar número de livros dentro de cada categoria
    * Contar número de autores
    * Mostrar livros do autor Augusto Cury
    * Transformar a função acima em um função que recebe nome do autor e retornar livros do autor
    
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ], 
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
]

/* Sol itens 1 a 4
function DetailLibrary(booksByCategory) {
    
const nrCategories = booksByCategory.length 
let nrBooks = 0;
let nrAuthors = 0;
const BooksByAuthor = []
const authorsArray = [];
let specificAuthor;
const specificAuthorArray = [];

for (const category of booksByCategory) {
    
    nrBooks = nrBooks + category.books.length
    for (const books of category.books) {
        //console.log(books);
        const isAuthorIncluded = authorsArray.includes(books.author)
        //cria string com nome dos autores sem repetição
        if (!isAuthorIncluded) {
            authorsArray.push(books.author)
        }
        //cria string com livros de Augusto Cury
        specificAuthor = "Augusto Cury"
        const isSpecificAuthorPresent = books.author.includes(specificAuthor)
        if (isSpecificAuthorPresent) {
            BooksByAuthor.push(books.title)
        }
    }
}

nrAuthors = authorsArray.length

console.log(`Número de categorias: ${nrCategories}`);
console.log(`Número de livros: ${nrBooks}`);
console.log(`Número de autores: ${nrAuthors}`);
console.log(`Livros de Augusto Cury: ${BooksByAuthor.join(", ")}`);
}
DetailLibrary(booksByCategory)
*/

/* Sol item 5 - função busca por autor
*/

function searchAuthor(authorName, library) {
    
    const BooksByAuthor = []

    for (const category of library) {

        for (const book of category.books) {
            
            //cria string com livros de authorName
            const isAuthorNamePresent = book.author.toUpperCase().includes(authorName.toUpperCase())
            if (isAuthorNamePresent) {
                BooksByAuthor.push(book.title)
            }
        }
    }
    if (BooksByAuthor.length <= 0) {
        console.log(`Não existe livro de ${authorName}`);
    } else {
        console.log(`Livros de ${authorName}: ${BooksByAuthor.join(", ")}`);
    }

}

searchAuthor('cury',booksByCategory)