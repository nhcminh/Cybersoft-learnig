import { Button, FormControl, Grid, Typography } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import FillInBlank from "./components/FillInBlank";
import MultipleChoice from "./components/MultipleChoice";
import { fetchQuestion } from "./redux/slices/questionsSlice";

function App() {
  const questions = useSelector((state) => state.QuestionsReducer.questions);
  const answers = useSelector((state) => state.QuestionsReducer.answers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchQuestion());
  }, [dispatch]);
  const handleSubmit = (e) => {
    console.log(answers.reduce((prev, next) => prev + next));
  };
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item>
        <Typography variant="h4" component="h2" align="center">
          Online Test
        </Typography>
        {/* <form> */}
        <FormControl component="fieldset">
          {questions.map((question) => {
            return question.questionType === 1 ? (
              <MultipleChoice
                key={new Date().getTime() * Math.random()}
                question={question}
              />
            ) : (
              <FillInBlank
                key={new Date().getTime() * Math.random()}
                question={question}
              />
            );
          })}
          <Button
            variant="contained"
            color="primary"
            type="button"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </FormControl>
        {/* </form> */}
      </Grid>
    </Grid>
  );
}

export default App;
