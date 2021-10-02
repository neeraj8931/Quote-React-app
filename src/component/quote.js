import React, { useState } from 'react';
import QuoteContent from './QuoteContent';
const axios = require('axios').default;

export default function Quote(props) {
    let content;
    let author;
    let fetchedQuote;
    const [initialQuote, setQuote] = useState({
        newquote:"This is a quote",
        newAuthor:"new author", 
        btntext:"get Quote",
        btnCopy:"Copy Quote"  
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
            btntext:"New Quote",
            btnCopy:"Copy Quote"
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
        <div className="quote-content">
         
            <QuoteContent  content={initialQuote.newquote} author={initialQuote.newAuthor}></QuoteContent>
            <div className="buttont-box">
            <a className="btn btn-success" onClick={()=>{
                getQuote();
              props.funct({
                canvasColor:"#" + Math.floor(100000 + Math.random() * 900000),
                fontAndBorderColor:"#" + Math.floor(100000 + Math.random() * 900000)
            });
            }}>{initialQuote.btntext}</a>
            <a className="btn btn-warning ml-1" onClick={()=>{
               navigator.clipboard.writeText(initialQuote.newquote);
               setQuote({
                newquote:initialQuote.newquote,
                newAuthor:initialQuote.newAuthor,   
                btntext:"New Quote",
                btnCopy:"Copied"
              })
            }}>{initialQuote.btnCopy}</a>
            
            </div>
        </div>
    )
}
