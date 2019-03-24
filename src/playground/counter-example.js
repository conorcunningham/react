class Counter extends React.Component {
  constructor(props){
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }
  componentDidMount() {
    try {
      const count = parseInt(localStorage.getItem('count'),10);

      if (!isNaN(count)) {
        this.setState(() => ({ count: count }));
      }
    } catch (e) {
      alert('error fetching local count');
    }

  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem('count', this.state.count);
    }
  }

  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }
  handleMinusOne(){
    this.setState((prevState) => {
      return {
        count: prevState.count -1
      };
    });
  }
  handleReset(){
    this.setState (() =>  {
      return {
        count: 0
      };
    });
  }
  render() {
    return (
      <div>
        <h1> Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    )
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));


// console.log('App.js is running!')

// const app = {
//     title: 'Super Exciting',
//     subtitle: 'Even more exciting',
//     options: ['monkey', 'Two']
// };

// //JSX - Javascript XML
// const template = (
//   <div>
//     <h1>{app.title}</h1>
//     {app.subtitle && <p>{app.subtitle}</p>}
//     <p> {(app.options && app.options.length > 0) ? 'here are your options'+  app.options[0] : 'No options' } </p>
//   </div>
// );

// const user = {
//     name: 'Conor',
//     age: 37,
//     location: 'Oslo, Norway'
// };

// function getLocation(location) {
//   if (location) {
//     return <p> Location: {location} </p>;
//   }
// }

// let templateTwo = (
//   <div>
//     <h1>{user.name ? user.name : 'anonymous'}</h1>
//     {(user.age && user.age >= 18) && <p>I am {user.age} years old</p>}
//     {getLocation(user.location)}

//   </div>
// );

// let count = 0;
// let myID = 'someid';
// const addOne = () => {
//   count ++;
//   renderCounterApp();
// };
// const minusOne = () => {
//   count --;
//   renderCounterApp();
// }
// const resetCount = () => {
//   count = 0;
//   renderCounterApp();
// }

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//   let templateThree = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button id={myID} className="button" onClick={minusOne}>-1</button>
//       <button id={myID} className="button" onClick={resetCount}>Reset</button>
//     </div>
//   );
//   ReactDOM.render(templateThree, appRoot);
// };

// renderCounterApp();