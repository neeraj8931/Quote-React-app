import React, { useState } from 'react';
import QuoteContent from './QuoteContent';
const axios = require('axios').default;

export default function Quote() {
    let content;
    let author;
    let fetchedQuote;
    const [initialQuote, setQuote] = useState({
        newquote:"This is a quote",
        newAuthor:"new author", 
        btntext:"get Quote"  
    });
    const getQuote=()=>{
        
        axios.get('https://api.quotable.io/random')
        .then(function (response) {
          // handle success
    
          content=response.data.content;
          author=response.data.author;
          console.log(content);
          console.log(author);
          setQuote({
            newquote:content,
            newAuthor:author,   
            btntext:"New Quote"  
          })
          
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          console.log("done");

        });
      
    }
    
    return (
        <div>
            <QuoteContent content={initialQuote.newquote} author={initialQuote.newAuthor}></QuoteContent>
            <a className="btn btn-success" onClick={()=>{
                getQuote();
            }}>{initialQuote.btntext}</a>
        </div>
    )
}
