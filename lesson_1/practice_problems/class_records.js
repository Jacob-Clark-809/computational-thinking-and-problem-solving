"use strict";

let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};
const TOTAL_EXAMS = 4;
const EXAM_WEIGHTING = 0.65;
const EXERCISE_WEIGHTING = 0.35;

function generateClassRecordSummary(scores) {
  let studentGrades = Object.values(scores).map(calculateStudentGrade);
  let exams = [];
  for (let examIndex = 0; examIndex < TOTAL_EXAMS; examIndex += 1) {
    let examScores = Object.values(scores).map(student => {
      return student.scores.exams[examIndex];
    });

    exams.push(processExamScores(examScores));
  }

  return {
    studentGrades,
    exams,
  };
}

function processExamScores(scores) {
  let minimum = Infinity;
  let maximum = -Infinity;
  let total = 0;
  scores.forEach(score => {
    if (score < minimum) {
      minimum = score;
    }
    if (score > maximum) {
      maximum = score;
    }
    total += score;
  });

  let average = Math.round((total / scores.length) * 10) / 10;
  return {
    average,
    minimum,
    maximum,
  };
}

function calculateStudentGrade(student) {
  let examAverage = calculateAverageScore(student.scores.exams);
  let exerciseTotal = calculateTotalScore(student.scores.exercises);
  let percentGrade = Math.round((examAverage * EXAM_WEIGHTING) +
                                (exerciseTotal * EXERCISE_WEIGHTING));
  let letterGrade = percentToLetter(percentGrade);

  return String(percentGrade) + ' (' + letterGrade + ')';
}

function percentToLetter(percent) {
  if (percent >= 93) {
    return 'A';
  } else if (percent >= 85) {
    return 'B';
  } else if (percent >= 77) {
    return 'C';
  } else if (percent >= 69) {
    return 'D';
  } else if (percent >= 60) {
      return 'E';
  } else {
    return 'F';
  }
}

function calculateTotalScore(scores) {
  return scores.reduce((total, currentScore) => total + currentScore);
}

function calculateAverageScore(scores) {
  return calculateTotalScore(scores) / scores.length;
}

console.log(generateClassRecordSummary(studentScores));

/* returns:
{
  studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
  exams: [
    { average: 75.6, minimum: 50, maximum: 100 },
    { average: 86.4, minimum: 70, maximum: 100 },
    { average: 87.6, minimum: 60, maximum: 100 },
    { average: 91.8, minimum: 80, maximum: 100 },
  ],
}
*/