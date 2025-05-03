import React from 'react';
import JsxDiv from './components/JsxDiv';
import JsxTree from './components/JsxTree';
import VirtualDom from './components/VirtualDom';

function App() {
  return (
    <div>
      <h2>JSX Div</h2>
      <JsxDiv />

      <h2>JSX Tree</h2>
      <JsxTree />

      <h2>Virtual DOM Example (check console)</h2>
      <VirtualDom />
    </div>
  );
}

export default App;