import React from 'react';
import { connect } from 'react-redux'; //This will allow us to wrap our component with an HOC that provides Redux functionality such as the dispatch() function.
import { makeApiCall } from './actions';

class Headlines extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   error: null,
    //   isLoaded: false,
    //   headlines: []
    // };
  }
  //we remove this.state since we'll be using the redux stroe to handle state


  // makeApiCall = () => {
  //   fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`)
  //   .then(response => response.json())
  //   .then(
  //     (jsonifiedResponse) => {
  //       this.setState({
  //         isLoaded: true,
  //         headlines: jsonifiedResponse.results
  //       });
  //     })
  //     .catch((error) => {
  //       this.setState({
  //         isLoaded: true,
  //         error
  //       });
  //     });
  // }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(makeApiCall());
  }

  render() {
    const { error, isLoading, headlines } = this.props; //we deconstruct the mapped Redux properties from this.props (since below we've added mapStateToProps() to map isLoading, headlines, and error from Redux state)
    if (error) {
      return <React.Fragment>Error: {error.message}</React.Fragment>;
    } else if (isLoading) {
      return <React.Fragment>Loading...</React.Fragment>;
    } else {
      return (
        <React.Fragment>
          <h1>Headlines</h1>
          <ul>
            {headlines.map((headline, index) =>
              <li key={index}>
                <h3>{headline.title}</h3>
                <p>{headline.abstract}</p>
              </li>
            )}
          </ul>
        </React.Fragment>
      );
    }
  }

}

const mapStateToProps = state => {
  return {
    headlines: state.headlines,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(mapStateToProps)(Headlines);