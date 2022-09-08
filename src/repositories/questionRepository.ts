// TODO
interface Question {
    id:       Number;
    askedBy:  String;
    question: String;
}

type CreatQuestion = Omit<Question, "id">;