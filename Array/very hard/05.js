function ungroupStudents(teachersData) {
  const ungroupedStudents = [];

  for (const teacherData of teachersData) {
    const teacherName = teacherData.teacher;

    for (const student of teacherData.data) {
      const ungroupedStudent = {
        teacher: teacherName,
        ...student,
      };
      ungroupedStudents.push(ungroupedStudent);
    }
  }

  return ungroupedStudents;
}

const input = [
  {
    teacher: "Ms. Car",
    data: [
      {
        name: "James",
        emergenceNumber: "617-771-1082",
      },
      {
        name: "Alice",
        alergies: ["nuts", "carrots"],
      },
    ],
  },
  {
    teacher: "Mr. Lamb",
    data: [
      {
        name: "Aaron",
        age: 3,
      },
    ],
  },
];

const output = ungroupStudents(input);
console.log(output);
