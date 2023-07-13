import Navbar from "../components/navbar/Navbar"
import SectionSpace from "../components/sectionSpace/SectionSpace"
import Book from "../components/book/Book"
import Card from "../components/card/Card"
import PlusButton from "../components/plusButton/PlusButton"
import CheckToken from "../components/CheckToken"

let cover1 = 'https://m.media-amazon.com/images/I/81IckFDzAKL._AC_UF1000,1000_QL80_.jpg'
let cover2 = 'https://m.media-amazon.com/images/I/81PHloIwKnL._AC_UF1000,1000_QL80_.jpg'
let cover3 = 'https://m.media-amazon.com/images/I/61zBhzjS4LL._AC_UF1000,1000_QL80_.jpg'
let cover4 = 'https://m.media-amazon.com/images/I/71-RD6idrdL._AC_UF1000,1000_QL80_.jpg'
let cover5 = 'https://images-na.ssl-images-amazon.com/images/I/81uC+NeU6uL._AC_UL900_SR615,900_.jpg'
let cover6 = 'https://m.media-amazon.com/images/I/51Lo4D0z3IS._AC_UF1000,1000_QL80_.jpg'
function main(){
    return(
        <main>
            <PlusButton></PlusButton>
            <Navbar></Navbar>
            <SectionSpace title = 'Confira as novidades gratuitas'></SectionSpace>
            <Book img1 = {cover1} img2 = {cover2} img3 = {cover3} title1='naruto 67' title2='Relíquias da morte' title3 = 'Jogos Vorazes' id1={1} id2={2} id3={3}></Book> 
            <SectionSpace title = 'Livros Premium em alta!'></SectionSpace>
            <Book img1 = {cover4} img2 = {cover5} img3 = {cover6} title1='Joyland' title2='Naruto 71' title3 = 'Piada Mortal' id1={4} id2={5} id3={6}></Book>
            <SectionSpace title = 'Encontre o que esta procurando!'></SectionSpace>
            <Card category1='Terror' category2='Gratuito' category3='Premium'></Card>
            <CheckToken/>
        </main>
    )
}
export default main