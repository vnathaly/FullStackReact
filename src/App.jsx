// New component
const Hello = (props) => {
  console.log(props)
  return (
    <>
    <div>
      <p>
        Hello {props.name} and your age is {props.age}
      </p>
    </div>
    </>
  );
}

const App = () => {
  const name = 'Peter'
  const age = 11;
  return (
    <>
    <div>
      <h1>Greetings</h1>
      <Hello name='Anabel' age = {22} />
      <Hello name='Melisa' age = {10 + 13} />
      <Hello name='Nathaly' age = {21} />
      <Hello name={name} age={age} />

    </div>
    </>
  )
}

export default App;

