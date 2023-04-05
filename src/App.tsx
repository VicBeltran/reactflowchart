
import createEngine, { 
  DefaultLinkModel, 
  DefaultNodeModel,
  DefaultNodeWidget,
  DefaultNodeFactory,
  DiagramModel 
} from '@projectstorm/react-diagrams';
import {
  CanvasWidget
} from '@projectstorm/react-canvas-core';

import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const engine = createEngine();
  const node1 = new DefaultNodeModel({
    name: 'Hórus based',
    color: 'rgb(0,192,255)'
  })

  node1.setPosition(100, 100);
  let port1 = node1.addOutPort('Out');
  const node2 = new DefaultNodeModel({
    name: 'Tesseract',
    color: 'rgb(0,192,0)',
  });

  node2.setPosition(100, 100);
  let port2 = node2.addInPort('In');

  const link = port1.link<DefaultLinkModel>(port2);

  const model = new DiagramModel();
  model.addAll(node1, node2, link);
  engine.setModel(model);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>
      <CanvasWidget engine={engine} className="canvas"/>
      </body>
    </div>
  );
}

export default App;
