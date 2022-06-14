import app from "./index";

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`app is running on PORT ${PORT}`);
});
