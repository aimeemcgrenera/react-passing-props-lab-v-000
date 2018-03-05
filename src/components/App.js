import React from 'react';
import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList';
import FruitBasket from './FruitBasket';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    };
  }

  componentWillMount() {
    this.fetchFilters();
  }

  componentDidMount() {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(items => this.setState({ items }));
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  handleChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ selectedFilter: event.target.value });
  }

  render() {
    return (
      <FruitBasket
        filters={this.state.filters}
        currentFilter={this.state.currentFilter}
        handleChange={this.handleFilterChange}
        fruit={this.state.fruit}
      />
    );
  }
}

export default App;
