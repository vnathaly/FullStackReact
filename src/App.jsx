
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

function Avatar () {
  return (
    <img 
    className="Avatar"
    src="https://i.imgur.com/1bX5QH6.jpg" 
    alt="Happy Old"
    width={100}
    height={100}
    />
   );
}

export default function Profile() {
  return (
    <Avatar />
  );
}
