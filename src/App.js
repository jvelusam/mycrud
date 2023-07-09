
import Create from './Create'
import Read from './Read'
import Update from './Update'
import { BrowserRouter , Route ,Routes } from 'react-router-dom'
function App() {



  return (
<BrowserRouter>
<Routes>
  <Route path="Create"  element={<Create />}>
  </Route>
  <Route  path="Read" element={<Read />}> </Route>
  <Route path="Update" element={< Update/>} > </Route>
</Routes>
</BrowserRouter>
  );
}

export default App;

