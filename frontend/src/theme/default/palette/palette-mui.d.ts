import '@mui/material/styles';

// Inserting custom type into mui type definitions
declare module '@mui/material' {
    export interface Palette {
        overlay: {
            main: string;
        };
    }
    export interface PaletteOptions {
        overlay: {
            main: string;
        };
    }
}
