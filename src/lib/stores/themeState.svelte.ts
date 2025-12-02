interface ThemeState {
	theme: 'light' | 'dark';
}

export const themeState: ThemeState = $state({ theme: 'light' });
