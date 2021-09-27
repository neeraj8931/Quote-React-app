import React, { useState } from 'react';
import QuoteContent from './QuoteContent';
const axios = require('axios').default;

export default function Quote() {
    let content;
    let author;
    let fetchedQuote;
    const [initialQuote, setQuote] = useState({
       
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
          
        });
      
    }
    
    return (
        <div>
            <QuoteContent content="content" author="author"></QuoteContent>
            <a className="btn btn-success" onClick={()=>{
                getQuote();
            }}>ok</a>
        </div>
    )
}
