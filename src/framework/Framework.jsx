import { Component } from "react";
// import { CONSTANTS } from "constants/constants";
// import data from 'data/api_data';
import api_data from 'data/api_data';
class Framework extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      loading: false,
      books: null,
    };
  }

  getItems() {
    
    // this.setState({ loading: true });
    // fetch(CONSTANTS.API_URL+CONSTANTS.APIS.GET_BOOKS)
    //   .then((data) => data.json())
    //   .then((result) => {
    //     this.setState({ books: result });
    //     this.setState({ loading: false });
    //   });
    // fetch(api_data.Skills).then((res)=>res.json())//.then((json)=>console.log(json));
    console.log(api_data);
    this.setState({books:api_data});
  }
  customFunction = () => {
    this.state({ yourStateVariable: true });
  };

  render() {
    return (
      <div>
        <button 
        className="btn btn-primary"
          as="Loader"
          onClick={this.getItems.bind(this)}
          variant=" primary"
        >
          Load
        </button>
        {this.state.loading && <p>Loading</p>}
        {this.state.books !== null && (
          <div className="books">
            {this.state.books.map((book, index) => (
              <div key={index}>
                <h5>{book.name}</h5>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}
export default Framework;
