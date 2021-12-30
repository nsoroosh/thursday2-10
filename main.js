class Book {
    constructor(title,genre,author,read){
        this.title=title
        this.genre=genre
        this.author=author
        this.read=read
    }
    readDate(){
       return new Date()
    }
}

class BookList{
    allBooks=[
        new Book('some','romantic','something',true),
        new Book ('num','romantic','something',false),
        new Book ('dum','romantic','something',false)
    ]
    nextBook=this.allBooks[2]
    currentBook=this.allBooks[1]
    lastBook=this.allBooks[0]
    
     readBooks(){
        return this.allBooks.filter(input=>input.read===true)
     }
     notReadBooks(){
        return this.allBooks.filter(input=>input.read===false)
     }
    add(title,genre,author){
        let obg = new Book(title,genre,author,false)
        this.allBooks.push(obg)
    }
    finishCurrentBook(){
        this.currentBook.read=true
        this.currentBook.readDate=new Date()
        this.lastBook=this.currentBook
        this.currentBook=this.nextBook
        this.nextBook=this.notReadBooks(Book[0])
    }
}
let arbook = new BookList 
console.log(arbook.readBooks())
console.log(arbook.add('abs','romantic','hvgh'))
console.log(arbook.allBooks)
