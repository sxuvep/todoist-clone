import React, { createContext, ReactNode, useContext, useState } from 'react';

const SelectedProjectContext = createContext<any | undefined>(undefined);

const SelectedProjectProvider = ({ children }: { children: ReactNode }) => {
	const [selectedProject, setSelectedProject] = useState('INBOX');
	return (
		<SelectedProjectContext.Provider value={{ selectedProject, setSelectedProject }}>
			{children}
		</SelectedProjectContext.Provider>
	);
};

const useSelectedProjectContext = () => {
	const context = useContext(SelectedProjectContext);
	if (context === undefined) {
		throw new Error('useSelectedProjectContext must be used within SelectedProjectContext');
	}
	return context;
};

export { SelectedProjectContext, SelectedProjectProvider, useSelectedProjectContext };
