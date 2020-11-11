import React from 'react';
import { Content } from './components/layout/Content';
import { Header } from './components/layout/Header';
import { Tasks } from './components/Tasks';
import './App.scss';
import { ProjectsProvider } from './context/ProjectContext';
import { SelectedProjectProvider } from './context/SelectedProjectContext';
import { Theme } from './context/ThemeContext';

function App() {
  return (
    <Theme>
      <ProjectsProvider>
        <SelectedProjectProvider>
          <div className="App">
            <Header />
            <Content />
            <Tasks />
          </div>
        </SelectedProjectProvider>
      </ProjectsProvider>
    </Theme>
  );
}

export default App;
