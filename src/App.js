/*kisi bilgisini iceren bir JSON dokümani var. 
*Bu dokümandaki bilgileri, REACT componentleri kullanarak ekranda uygun formatta gösterilmesi
*/
import logo from './logo.svg';
import './App.css';
import Foreigner from './data/foreigners.json';
import Person from './components/person'
function App() {
  return (
    <div className="App">
     <Person personList = {Foreigner}/>
    </div>
  );
}
export default App;
