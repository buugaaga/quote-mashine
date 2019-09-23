import React, { Component } from 'react';

import Text from './components/text/text';
import Buttons from './components/buttons/buttons';

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
      <div id="wrapper">
        <h1>Random Quote App</h1>
        <div id="quote-box">
          <Text quote={quote} author={author} />
          <Buttons quote={quote} author={author} handle={this.newQuote} />
        </div>
      </div>
    )
  }
}
export default App;