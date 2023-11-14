import {Component} from 'react'

import {v4} from 'uuid'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    searchInput: '',
    wordsList: [],
  }

  one = event => {
    this.setState({searchInput: event.target.value})
  }

  start = event => {
    event.preventDefault()

    const {searchInput} = this.state
    const addItems = {
      id: v4(),
      item: searchInput,
    }
    this.setState(prevState => ({
      wordsList: [...prevState.wordsList, addItems],
      searchInput: '',
    }))
  }

  render() {
    const {searchInput, wordsList} = this.state
    return (
      <div>
        <div>
          <h1>Count the characters like a Boss...</h1>
          <div>
            {wordsList.length > 0 ? (
              <ul>
                {wordsList.map(eachWord => (
                  <li key={eachWord.id}>
                    <p key={eachWord.id}>
                      {eachWord.item} : {eachWord.item.length}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
              />
            )}
          </div>
        </div>
        <div>
          <h1>Character Counter</h1>
          <div>
            <form onSubmit={this.start}>
              <div>
                <input
                  type="text"
                  placeholder="Enter the Characters here"
                  value={searchInput}
                  onChange={this.one}
                />
                <button type="submit" onClick={this.start}>
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default App
