import HomeComponent from "./components/home/HomeComponent";
import { Button } from 'antd';

// Styles
import './styles/styles.less';

function App() {
  return (
    <div>
      <header>
        <p>
          Esto <code>src/App.js</code> and save to reload.
        </p>

        <Button type="primary">Button</Button>


        <HomeComponent></HomeComponent>

      </header>
    </div>
  );
}

export default App;
