
const App = () => {
  const now = new Date();
  const a = 10;
  const b = 20;

  console.log(now, (a+b))

  return (
    <>
    <div>
      <p>The date today is {now.toString()}</p>
      <p>{a} plus {b} is {a + b}</p>
    </div>
    </>
  )
}

export default App
