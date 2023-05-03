import './App.css';


const people = [
  {name:'vanisha', age:38},
  {name:'Madhan', age:42},
  {name:'Deekshi', age:10},
  {name:'Laasya', age:14},
  {name:'Karthik', age:9},
];

function App() {
  //make an unordered list of people from youngest to oldest
  return (
    <div className="App">
      <h3>LIst of people from youngest to oldest</h3>
      <ul>
        {people.sort((a,b)=>a.age-b.age).map((person)=> {
            return <li key={`${person.name}- ${Math.floor(Math.random)}` } >
              <p>Name: {person.name}</p>
              <p>Age: {person.age}</p> </li>
      })}
      </ul>
      
    </div>
  );
}

export default App;
