import React, { useState } from 'react';
import QuoteContent from './QuoteContent';
const axios = require('axios').default;

export default function Quote() {
    let content;
    let author;
    let fetchedQuote;
    const [initialQuote, setQuote] = useState(fetchedQuote={
        quoteContent:"Click on the button to get Quote.",
        quoteBtn:"Get Quote",
        quoteAuthor:""
    });
    const getQuote=()=>{
        
        axios.get('https://api.quotable.io/random')
        .then(function (response) {
          // handle success
    
          content=response.data.content;
          author=response.data.author;
          console.log(content);
          console.log(author);
          
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          console.log("done");
          setQuote(
            fetchedQuote.quoteContent=content,
            fetchedQuote.quoteAuthor=author,
            fetchedQuote.quoteBtn="Get Next Quote"

        );
        });
      
    }
    
    return (
        <div>
            <QuoteContent content={ fetchedQuote.quoteContent} author={fetchedQuote.quoteAuthor}></QuoteContent>
            <a className="btn btn-success" onClick={()=>{
                getQuote();
            }}>{fetchedQuote.quoteBtn}</a>
        </div>
    )
}
