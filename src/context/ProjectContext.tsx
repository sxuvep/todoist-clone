import React, { createContext, ReactNode, useContext } from 'react';
import { useProjects } from '../hooks';

const ProjectsContext = createContext<any | undefined>(undefined);
const ProjectsProvider = ({ children }: { children: ReactNode }) => {
  const { projects, setProjects } = useProjects();

  return (
    <ProjectsContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
};

const useProjectsContext = () => {
  const context = useContext(ProjectsContext);
  if (context === undefined) {
    throw new Error(
      'useProjectsContext should be used within ProjectsContext provider',
    );
  }
  return context;
};

export { ProjectsContext, ProjectsProvider, useProjectsContext };
