import * as React from 'react';
import { useState } from 'react';
import { JointWrapper, Tables } from './Components/TruthTable';
import { LogicForm } from './Components/LogicForm';
import './style.css';

// big thanks to https://online.stanford.edu/instructors/keith-schwarz
// for https://web.stanford.edu/class/cs103/tools/truth-table-tool/

export default function App() {
  const [input, setInput] = useState('');
  const [variables, setVariables] = useState([]);
  const [sentences, setSentences] = useState([]);
  const [updater, setUpdater] = useState(false);

  return (
    <div className="main">
      <h2> Full Logic Table Generator </h2>
      <p>
        {' '}
        Enter a well formatted logical sentence into the box provided below.
        This sentence will be added to the list of givens, and can be clicked to
        view it's full logic table. The bottom box will show all truth tables in
        conjunction and return their joint satisfiablility{' '}
      </p>
      <h3>Formatting</h3>
      <table className="formatTable">
        <tr>
          <th>Symbol</th>
          <th>Input</th>
        </tr>
        <tr>
          <td>¬</td>
          <td>not, ~</td>
        </tr>
        <tr>
          <td>∨</td>
          <td>or, \/, ||</td>
        </tr>
        <tr>
          <td>∧</td>
          <td>and, /\, &&</td>
        </tr>
        <tr>
          <td>→ </td>
          <td>{'=>, ->'}</td>
        </tr>
        <tr>
          <td>↔</td>
          <td>{'<=>, <->'}</td>
        </tr>
        <tr>
          <td>⊤</td>
          <td>T</td>
        </tr>
        <tr>
          <td>⊥</td>
          <td>F</td>
        </tr>
      </table>
      <br />
      <div id="formContainer">
        <LogicForm
          sentences={sentences}
          setsentences={setSentences}
          input={input}
          setInput={setInput}
        />
      </div>
      <div id="tableContainer">
        <Tables sentences={sentences} setSentences={setSentences} />
        <JointWrapper sentences={sentences} />
      </div>
    </div>
  );
}
