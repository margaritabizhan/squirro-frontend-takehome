import React from "react";
import "./styles.css";
import StoreContainer from "./components/StoreContainer";

const App: React.FC = () => {
  return (
    <div>
      <StoreContainer />
    </div>
  )
};

export default App;


/**
 store = {
  1: { 
    'name": "John",
    "website": "www.john.com",
    'rating': 5,
    'storeImage': 'www.john.com/image.jpg',
    'etstablisment': 'sample'
    'relationship': {
      'countries': 1,
      'books': [1, 2, 8]
    }
  }
 }

 authors = {
  'id': 'John Doe',
 }

 books = {
  'id(1)' : {
    name: 'book name',
    copiesSold: 100,
  },
  author: 1
 }

countries ={
  'id' : 'HR'

}


 */