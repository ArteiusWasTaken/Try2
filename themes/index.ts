import { PaletteOptions } from "@mui/material/styles";

export type AllowedTheme = NonNullable<PaletteOptions["mode"]>;

export const DEFAULT_THEME: AllowedTheme = "dark";

export * from "./darkTheme";
export * from "./lightTheme";
export * from "./globalStyles";
