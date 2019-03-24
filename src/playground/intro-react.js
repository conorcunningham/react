
const appRoot = document.getElementById('app');

const app = {
    title: 'Super Exciting',
    subtitle: 'Even more exciting',
    options: []
};

const renderScreen = () => {
  //JSX - Javascript XML
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p> {(app.options && app.options.length > 0) ? 'here are your options'+  app.options[0] : 'No options' } </p>
      <p>{app.options.length}</p>
      <ol>
        {
          app.options.map((option) => <li key={option}>{option}</li>)
        }
      </ol>
      <button disabled={app.options.length===0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={removeAll}>Remove All</button>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"></input>
        <button>Add Option</button>
      </form>
    </div>
);
  ReactDOM.render(template, appRoot);
}

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderScreen();
    
  }
};

const removeAll = () => {
  app.options = [];
  renderScreen();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option)
}

renderScreen();


