// TODO

interface Answer {
    id: Number;
    answer: String;
    answeredBy: Number;
    questionId: Number;
  }

type CreatAnswer = Omit<Answer, "id">;