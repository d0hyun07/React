import Welcome from './Welcome';

export default function Hello() {
  function showName() {
    console.log("Mike");
  }
  function showAge(age) {
    console.log(age);
  }
  function showText(e) {
    console.log();
  }
  return (
    <div>
      <h1>Hello</h1>
      <button onClick={showName()}>Show name</button>
      <button 
      onClick={() => {
          showAge(30);
        }
      }>
        Show age
      </button>
      <Welcome />
      <input type="text" onChange={showText}/>
    </div>
  );
};