import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      quote: '',
      author: ''
    }
    
  }

  componentDidMount() {
    this.handleQuote();
  }

  handleQuote() {
    let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

    axios.get(url) 
      .then(res => {
        let data = res.data.quotes;
        let numQuote = Math.floor(Math.random() * data.length);
        this.setState({
          quote: data[numQuote].quote,
          author: data[numQuote].author
        })
      }
      )
  }

  newQuote = () => this.handleQuote();

  render() {
    const { quote, author } = this.state
    return (
      <div id="quote-box">
        <div id="text"><p>{quote}</p></div>
        <div id="author"><p>{author}</p></div>
        
        <div id="buttons">
          <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${quote} ${author}`} target="_blank" rel="noopener noreferrer">tweeter</a>
          <button className="btn"id="new-quote" onClick={this.newQuote}>New quote</button>
        </div>
      </div>
    )
  }
}
export default App;