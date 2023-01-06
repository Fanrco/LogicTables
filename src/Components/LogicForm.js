import * as React from 'react';
import { parse } from './parser';

//handles getting new sentences, parsing, and saving
export function LogicForm({ sentences, setsentences, input, setInput }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    //parse the input and get its node and variables
    let output = { ast: null, variables: null };
    try {
      output = parse(input);
    } catch (error) {
      console.log(error);
      setInput('Invalid sentence');
      return;
    }

    //save formatted string for displaying
    let formatString = output.ast.toString(output.variables);
    let newSentence = {
      plain: input.plain,
      format: formatString,
      node: output.ast,
      vars: output.variables,
    };

    //add new sentence to array of sentences
    let newsentences = sentences;
    newsentences.push(newSentence);
    setsentences(newsentences);
    setInput('');
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <label>
          <h4 style={{ margin: '10px' }}>Enter a Logical Sentence</h4>
          <input
            className="textBox"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </label>
        <br />
        <input className="fancybutton" type="submit" value="Add sentence" />
      </form>
    </div>
  );
}
