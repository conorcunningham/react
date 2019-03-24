class Visibility extends React.Component {
  constructor(props) {
    super(props)
    this.isVisible = this.isVisible.bind(this);
    this.state = {
      isVisible: false
    };
  }
    isVisible() {
      this.setState((prevState) => {
        return {
          isVisible: !prevState.isVisible 
        } 
      });
    }

    render(){
      return (
        <div>
          <h1>Toggle Monster is Ready!</h1>
          <button onClick={this.isVisible}>
            {this.state.isVisible ? 'Toggle Monster Off' : 'Toggle Monster On'} 
          </button>
          {this.state.isVisible && (<p>'Toggle Monster wants a cookie'</p>)}
        </div>
      );
    }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));


// const appRoot = document.getElementById('app');

// let clicked = false;

// const isVisible = () => {
//   clicked = !clicked;
//   renderTemplate();

// }
// const renderTemplate = () => {

//     const template = (
//       <div>
//         <h1>Visibility Toggle Monster</h1>
//         <button onClick={isVisible}>
//         {clicked ? 'Toggle Monster off!' : 'Toggle Monster on!'}
//         </button>
//         {clicked && (<p>Toggle monster wants a tickel</p> )}
//       </div>
//     );
  
//   ReactDOM.render(template, appRoot);
// }

// renderTemplate();