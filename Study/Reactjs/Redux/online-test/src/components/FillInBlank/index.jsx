import { TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { QuestionActions } from "../../redux/rootAction";

function FillInBlank(props) {
  const { question } = props;
  const [value, setValue] = useState("");
  const ans = question.answers[0].content;
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setValue(e.target.value);
    dispatch(
      QuestionActions.getAnswer({
        id: question.id,
        answers: value === ans ? 1 : 0,
      })
    );
  };
  useEffect(() => {}, [value]);
  return (
    <>
      <TextField
        key={question.id}
        label={question.content}
        value={value}
        onChange={handleChange}
      />
    </>
  );
}

export default FillInBlank;
