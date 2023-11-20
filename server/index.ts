import app from "./src/index";

const PORT = process.env.PORT ?? 3001;

app.listen(PORT, () => {
  console.log("server levantado en " + PORT);
});
