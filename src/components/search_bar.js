import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };
    }


    render() {
        return (
            <div className="search-bar">
                <input 
                value={this.state.term}
                onChange={event => this.onInputChange(event.target.value)} />
            </div>    
        );
    }

    onInputChange(value) {
        this.setState({term: value});
        this.props.onSearchTermChange(value);
    }
}


export default SearchBar;