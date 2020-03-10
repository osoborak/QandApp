import React from "react";
import { Page } from "./Page";
import { RouteComponentProps } from "react-router-dom";
import { FC } from "react";

interface RouteParams {
  questionId: string;
}

export const QuestionPage: FC<RouteComponentProps<RouteParams>> = ({
  match
}) => <Page>{match.params.questionId}</Page>;
