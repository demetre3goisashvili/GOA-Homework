class Book {
    constructor(name, author,genre, pages, chapters, year) {
        this.name = name
        this.author = author
        this.genre = genre
        this.pages = pages
        this.chapters = chapters
        this.year = year
    }
    details(){
        console.log("The name of the legendary book is: ", this.name)
        console.log("The author of this book is: ", this.author)
        console.log("The genre of this book is: ", this.genre)
        console.log("The book has: ", this.pages, " pages")
        console.log("This book has: ", this.chapters, " chapters")
        console.log("The book was released in: ", this.year)
    }

}



