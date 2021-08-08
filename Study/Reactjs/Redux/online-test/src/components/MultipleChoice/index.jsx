import {
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { QuestionActions } from "../../redux/rootAction";

function MultipleChoice(props) {
  const { question } = props;
  const [value, setValue] = useState("");
  const [exact, setExact] = useState(0);
  const dispatch = useDispatch();
  const exactAns = question.answers.find((ans) => ans.exact === true);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const dispatchAns = useCallback(() => {
    dispatch(
      QuestionActions.getAnswer({
        id: question.id,
        answers: exact,
      })
    );
  }, [dispatch, exact, question.id]);
  useEffect(() => {
    dispatchAns();
    setExact(value === exactAns.content ? 1 : 0);
  }, [dispatchAns, exactAns.content, value]);
  return (
    <>
      <FormLabel component="legend">{question.content}</FormLabel>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={value}
        onChange={handleChange}
      >
        {question.answers.map((ans) => (
          <FormControlLabel
            key={new Date().getTime() * Math.random()}
            value={ans.content}
            control={<Radio />}
            label={ans.content}
          />
        ))}
      </RadioGroup>
    </>
  );
}

export default MultipleChoice;
