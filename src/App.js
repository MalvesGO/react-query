import './App.css';
import { useCatsData } from './hooks/useCatsData';

function App() {

  const { data, isLoading, isError } = useCatsData();
  console.log(data);
  return (
    <div className="App">
      <div>
        <h1>Cat Breeds</h1>
        {!isLoading && <>
          {data?.map((cat) => (
            <div key={cat.id}>
              <h2>{cat.name}</h2>
              <p>{cat.description}</p>
            </div>
          ))}
        </>
        }
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error fetching cats</p>}
      </div>
    </div>
  );
}

export default App;
