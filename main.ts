#! /usr/bin/env node

import { checkbox, input, number, confirm, select } from "@inquirer/prompts";

console.log("\nWelcome to Student Management System\n");

const name = await input({
  message: "Enter student name",
});

const age = await number({
  message: "Enter student age",
});

const gender = await select({
  message: "Please select your gender",
  choices: [
    { name: "Male", value: "male" },
    { name: "Female", value: "female" },
    { name: "Other", value: "other" },
  ],
});

const choice = await checkbox({
  message: "Please select course which you want to learn",
  choices: [
    { name: "Typescript", value: "typescript" },
    { name: "Python", value: "python" },
    { name: "Next.js", value: "next.js" },
    { name: "C++", value: "c++" },
  ],
});

const confirmation = await confirm({
  message: "Do you confirm to enroll in this course?",
});

if (confirmation === true) {
  console.log("\nCongratulations! you enrolled in this courses\n");
  const option = await select({
    message: "Please select one of the following option: ",
    choices: [
      { name: "Check Status", value: "check status" },
      { name: "Exit", value: "exit" },
    ],
  });

  if (option === "check status") {
    const obj = {
      name: `${name}`,
      age: `${age}`,
      gender: `${gender}`,
      courses: `${choice}`,
    };
    console.log(obj);
  } else {
    console.log("Exiting.....");
  }
} else {
  console.log("\nOops! You were not enrolled in this course");
}
