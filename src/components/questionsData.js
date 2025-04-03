const questionsData = [
    {
      id: 1,
      title: "Add Two Numbers",
      description: "Given two integers, a and b, write a function to calculate and return their sum.",
      difficulty: "Easy",
      avgTime: "5 min",
      complexity: { time: "O(1)", space: "O(1)" },
      containerClass: "container",
      codeTemplate: {
        python: {
          functionSignature: "def add_two_numbers(a, b):\n  # Implement your function here\n  pass",
          mainFunction: "if __name__ == \"__main__\":\n  print(add_two_numbers(2, 3))  # Expected output: 5",
        },
        java: {
          functionSignature: "public class Main {\n  public static int addTwoNumbers(int a, int b) {\n    // Implement your function here\n  }\n}",
          mainFunction: "public class Main {\n  public static void main(String[] args) {\n    System.out.println(Main.addTwoNumbers(2, 3)); // Expected output: 5\n  }\n}",
        },
        c: {
          functionSignature: "#include <stdio.h>\n\nint add_two_numbers(int a, int b) {\n  // Implement your function here\n  return 0; // Placeholder\n}",
          mainFunction: "#include <stdio.h>\n\nint main() {\n  printf(\"%d\\n\", add_two_numbers(2, 3)); // Expected output: 5\n  return 0;\n}",
        },
        cpp: {
          functionSignature: "#include <iostream>\n\nint add_two_numbers(int a, int b) {\n  // Implement your function here\n  return 0; // Placeholder\n}",
          mainFunction: "#include <iostream>\n\nint main() {\n  std::cout << add_two_numbers(2, 3) << std::endl; // Expected output: 5\n  return 0;\n}",
        },
        javascript: {
          functionSignature: "function addTwoNumbers(a, b) {\n  // Implement your function here\n  return 0; // Placeholder\n}",
          mainFunction: "console.log(addTwoNumbers(2, 3)); // Expected output: 5",
        },
      },
      testCases: [
        { example: "Example 1", input: "[2, 3]", output: "5", explanation: "Adding 2 and 3 results in 5." },
        { example: "Example 2", input: "[-1, 5]", output: "4", explanation: "Adding -1 and 5 results in 4." },
        { example: "Example 3", input: "[0, 0]", output: "0", explanation: "Adding 0 and 0 results in 0." },
        { example: "Example 4", input: "[100, 200]", output: "300", explanation: "Adding 100 and 200 results in 300." },
      ],
    },
    {
        id: 1,
        title: "Add Two Numbers",
        description: "Given two integers, a and b, write a function to calculate and return their sum.",
        difficulty: "Easy",
        avgTime: "5 min",
        complexity: { time: "O(1)", space: "O(1)" },
        containerClass: "container",
        codeTemplate: {
          python: {
            functionSignature: "def add_two_numbers(a, b):\n  # Implement your function here\n  pass",
            mainFunction: "if __name__ == \"__main__\":\n  print(add_two_numbers(2, 3))  # Expected output: 5",
          },
          java: {
            functionSignature: "public class Main {\n  public static int addTwoNumbers(int a, int b) {\n    // Implement your function here\n  }\n}",
            mainFunction: "public class Main {\n  public static void main(String[] args) {\n    System.out.println(Main.addTwoNumbers(2, 3)); // Expected output: 5\n  }\n}",
          },
          c: {
            functionSignature: "#include <stdio.h>\n\nint add_two_numbers(int a, int b) {\n  // Implement your function here\n  return 0; // Placeholder\n}",
            mainFunction: "#include <stdio.h>\n\nint main() {\n  printf(\"%d\\n\", add_two_numbers(2, 3)); // Expected output: 5\n  return 0;\n}",
          },
          cpp: {
            functionSignature: "#include <iostream>\n\nint add_two_numbers(int a, int b) {\n  // Implement your function here\n  return 0; // Placeholder\n}",
            mainFunction: "#include <iostream>\n\nint main() {\n  std::cout << add_two_numbers(2, 3) << std::endl; // Expected output: 5\n  return 0;\n}",
          },
          javascript: {
            functionSignature: "function addTwoNumbers(a, b) {\n  // Implement your function here\n  return 0; // Placeholder\n}",
            mainFunction: "console.log(addTwoNumbers(2, 3)); // Expected output: 5",
          },
        },
        testCases: [
          { example: "Example 1", input: "[2, 3]", output: "5", explanation: "Adding 2 and 3 results in 5." },
          { example: "Example 2", input: "[-1, 5]", output: "4", explanation: "Adding -1 and 5 results in 4." },
          { example: "Example 3", input: "[0, 0]", output: "0", explanation: "Adding 0 and 0 results in 0." },
          { example: "Example 4", input: "[100, 200]", output: "300", explanation: "Adding 100 and 200 results in 300." },
        ],
      },
      {
        id: 1,
        title: "Add Two Numbers",
        description: "Given two integers, a and b, write a function to calculate and return their sum.",
        difficulty: "Easy",
        avgTime: "5 min",
        complexity: { time: "O(1)", space: "O(1)" },
        containerClass: "container",
        codeTemplate: {
          python: {
            functionSignature: "def add_two_numbers(a, b):\n  # Implement your function here\n  pass",
            mainFunction: "if __name__ == \"__main__\":\n  print(add_two_numbers(2, 3))  # Expected output: 5",
          },
          java: {
            functionSignature: "public class Main {\n  public static int addTwoNumbers(int a, int b) {\n    // Implement your function here\n  }\n}",
            mainFunction: "public class Main {\n  public static void main(String[] args) {\n    System.out.println(Main.addTwoNumbers(2, 3)); // Expected output: 5\n  }\n}",
          },
          c: {
            functionSignature: "#include <stdio.h>\n\nint add_two_numbers(int a, int b) {\n  // Implement your function here\n  return 0; // Placeholder\n}",
            mainFunction: "#include <stdio.h>\n\nint main() {\n  printf(\"%d\\n\", add_two_numbers(2, 3)); // Expected output: 5\n  return 0;\n}",
          },
          cpp: {
            functionSignature: "#include <iostream>\n\nint add_two_numbers(int a, int b) {\n  // Implement your function here\n  return 0; // Placeholder\n}",
            mainFunction: "#include <iostream>\n\nint main() {\n  std::cout << add_two_numbers(2, 3) << std::endl; // Expected output: 5\n  return 0;\n}",
          },
          javascript: {
            functionSignature: "function addTwoNumbers(a, b) {\n  // Implement your function here\n  return 0; // Placeholder\n}",
            mainFunction: "console.log(addTwoNumbers(2, 3)); // Expected output: 5",
          },
        },
        testCases: [
          { example: "Example 1", input: "[2, 3]", output: "5", explanation: "Adding 2 and 3 results in 5." },
          { example: "Example 2", input: "[-1, 5]", output: "4", explanation: "Adding -1 and 5 results in 4." },
          { example: "Example 3", input: "[0, 0]", output: "0", explanation: "Adding 0 and 0 results in 0." },
          { example: "Example 4", input: "[100, 200]", output: "300", explanation: "Adding 100 and 200 results in 300." },
        ],
      },
      {
        id: 1,
        title: "Add Two Numbers",
        description: "Given two integers, a and b, write a function to calculate and return their sum.",
        difficulty: "Easy",
        avgTime: "5 min",
        complexity: { time: "O(1)", space: "O(1)" },
        containerClass: "container",
        codeTemplate: {
          python: {
            functionSignature: "def add_two_numbers(a, b):\n  # Implement your function here\n  pass",
            mainFunction: "if __name__ == \"__main__\":\n  print(add_two_numbers(2, 3))  # Expected output: 5",
          },
          java: {
            functionSignature: "public class Main {\n  public static int addTwoNumbers(int a, int b) {\n    // Implement your function here\n  }\n}",
            mainFunction: "public class Main {\n  public static void main(String[] args) {\n    System.out.println(Main.addTwoNumbers(2, 3)); // Expected output: 5\n  }\n}",
          },
          c: {
            functionSignature: "#include <stdio.h>\n\nint add_two_numbers(int a, int b) {\n  // Implement your function here\n  return 0; // Placeholder\n}",
            mainFunction: "#include <stdio.h>\n\nint main() {\n  printf(\"%d\\n\", add_two_numbers(2, 3)); // Expected output: 5\n  return 0;\n}",
          },
          cpp: {
            functionSignature: "#include <iostream>\n\nint add_two_numbers(int a, int b) {\n  // Implement your function here\n  return 0; // Placeholder\n}",
            mainFunction: "#include <iostream>\n\nint main() {\n  std::cout << add_two_numbers(2, 3) << std::endl; // Expected output: 5\n  return 0;\n}",
          },
          javascript: {
            functionSignature: "function addTwoNumbers(a, b) {\n  // Implement your function here\n  return 0; // Placeholder\n}",
            mainFunction: "console.log(addTwoNumbers(2, 3)); // Expected output: 5",
          },
        },
        testCases: [
          { example: "Example 1", input: "[2, 3]", output: "5", explanation: "Adding 2 and 3 results in 5." },
          { example: "Example 2", input: "[-1, 5]", output: "4", explanation: "Adding -1 and 5 results in 4." },
          { example: "Example 3", input: "[0, 0]", output: "0", explanation: "Adding 0 and 0 results in 0." },
          { example: "Example 4", input: "[100, 200]", output: "300", explanation: "Adding 100 and 200 results in 300." },
        ],
      },
      {
        id: 1,
        title: "Add Two Numbers",
        description: "Given two integers, a and b, write a function to calculate and return their sum.",
        difficulty: "Easy",
        avgTime: "5 min",
        complexity: { time: "O(1)", space: "O(1)" },
        containerClass: "container",
        codeTemplate: {
          python: {
            functionSignature: "def add_two_numbers(a, b):\n  # Implement your function here\n  pass",
            mainFunction: "if __name__ == \"__main__\":\n  print(add_two_numbers(2, 3))  # Expected output: 5",
          },
          java: {
            functionSignature: "public class Main {\n  public static int addTwoNumbers(int a, int b) {\n    // Implement your function here\n  }\n}",
            mainFunction: "public class Main {\n  public static void main(String[] args) {\n    System.out.println(Main.addTwoNumbers(2, 3)); // Expected output: 5\n  }\n}",
          },
          c: {
            functionSignature: "#include <stdio.h>\n\nint add_two_numbers(int a, int b) {\n  // Implement your function here\n  return 0; // Placeholder\n}",
            mainFunction: "#include <stdio.h>\n\nint main() {\n  printf(\"%d\\n\", add_two_numbers(2, 3)); // Expected output: 5\n  return 0;\n}",
          },
          cpp: {
            functionSignature: "#include <iostream>\n\nint add_two_numbers(int a, int b) {\n  // Implement your function here\n  return 0; // Placeholder\n}",
            mainFunction: "#include <iostream>\n\nint main() {\n  std::cout << add_two_numbers(2, 3) << std::endl; // Expected output: 5\n  return 0;\n}",
          },
          javascript: {
            functionSignature: "function addTwoNumbers(a, b) {\n  // Implement your function here\n  return 0; // Placeholder\n}",
            mainFunction: "console.log(addTwoNumbers(2, 3)); // Expected output: 5",
          },
        },
        testCases: [
          { example: "Example 1", input: "[2, 3]", output: "5", explanation: "Adding 2 and 3 results in 5." },
          { example: "Example 2", input: "[-1, 5]", output: "4", explanation: "Adding -1 and 5 results in 4." },
          { example: "Example 3", input: "[0, 0]", output: "0", explanation: "Adding 0 and 0 results in 0." },
          { example: "Example 4", input: "[100, 200]", output: "300", explanation: "Adding 100 and 200 results in 300." },
        ],
      },
  ];
  export default questionsData;
  