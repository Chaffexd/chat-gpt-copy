import OptionSelection from './components/OptionSelection';
import Translation from './components/Translation';
import { Configuration, OpenAIApi } from 'openai';
import { arrayItems } from './AIOptions';
import { useState } from 'react';
import './App.css';

function App() {
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key
  });
  const openai = new OpenAIApi(configuration);

  const [option, setOption] = useState({});
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  
  const selectOption = (option) => {
    setOption(option);
  };

  const doItButton = async() => {
    let object = {...option, prompt: input};
    console.log(object)
    const response = await openai.createCompletion(object);

    console.log(response);
    setResult(response.data.choices[0].text);
  };

  return (
    <div className="App">
      { Object.values(option).length === 0 
        ? 
        <OptionSelection arrayItems={arrayItems} selectOption={selectOption} /> 
        : 
        <Translation doItButton={doItButton} setInput={setInput} result={result} />}
    </div>
  );
};

export default App;
