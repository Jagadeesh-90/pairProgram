import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BooksData } from "./components/organisms/booksData";
import { BooksOfJohner } from "./components/organisms/bookfOfJohner";


export const App = () => {

  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={ <BooksData/>}/>
   <Route path="books" element={ <BooksOfJohner/>}/>
   </Routes>
  </BrowserRouter>   
  );
};

