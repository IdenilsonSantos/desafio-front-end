import { theme } from "./themes";
import { Button, ThemeProvider } from "@mui/material";

export default function Home() {
  return (
    <div style={{ height: "100vh" }}>
      <ThemeProvider theme={theme}>
        <Button variant="contained" color="primary"/>
      </ThemeProvider>
    </div>
  );
}
