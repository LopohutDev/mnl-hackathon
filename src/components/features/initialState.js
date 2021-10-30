export const initialState = {
  isAuthenticated: false,
  hasErrors: false,
  allPosts: undefined,
  errors:
    [
      {
        status: 0,
        message: "",
      },
    ] || undefined,
  users: [
    {
      id: 1,
      name: "test Name",
      email: "test@email.com",
      password: "testing1",
      posts: [
        {
          id: 1,
          user: "Teacher Hayley",
          title: "How can i engage my students in learning",
          description:
            "How would you define student engagement, and what are good strategies to promote it?",
          upvotes: 100,
          comments: [
            {
              id: 1,
              user: "LopohutPlayer",
              comment:
                "When students are engaged in learning, there is movement and laughter and sometimes lots of noise. They are up and out of their seats involved in activities that promote thought, creativity, and discovery. Students are busy, self-disciplined, and best of all, willing to take responsibility for their own learning because they understand that what they are doing is important.",
            },
            {
              id: 2,
              user: "Teacher Maria",
              comment:
                "Design lessons that call for students to interact with students in other classrooms across the globe, to creatively use technology and other media, and to solve authentic problems. The possibilities for engagement are endless when students can see that what they do in your class can be applied to real-life situations.",
            },
            {
              id: 3,
              user: "Teacher Ben",
              comment:
                "Don’t underestimate your students’ delight in having fun as they work. Appeal to their playful natures when you provide assignments that call for them to solve puzzles or problems, play games, watch humorous videos, or write answers on anything other than paper.",
            },
          ],
        },
        {
          id: 2,
          user: "Teacher Leigh",
          title: "How can i motivate my students to learn",
          description:
            "My students are not motivated to learn and are sending their activities late.",
          upvotes: 1001,
          comments: [
            {
              id: 1,
              user: "Teacher Rose",
              comment:
                "One of the most difficult aspects of becoming a teacher is learning how to motivate your students. It is also one of the most important. Students who are not motivated will not learn effectively. They won’t retain information, they won’t participate and some of them may even become disruptive.",
            },
            {
              id: 2,
              user: "Teacher Mike",
              comment:
                "eaching a class full of motivated students is enjoyable for teachers and students alike. Some students are self-motivated, with a natural love of learning. But even with the students who do not have this natural drive, a great teacher can make learning fun and inspire them to reach their full potential",
            },
          ],
        },
        {
          id: 3,
          user: "Teacher Robert",
          title: "How can i guide my students to perform better",
          description:
            "I feel that i cannot guide my students well in their studies and i also feel that i cannot perform myself as a professor, what can i do?",
          upvotes: 500,
          comments: [
            {
              id: 1,
              user: "Teacher Julia",
              comment:
                "Learning takes place in students’ heads where it is invisible to others. This means that learning must be assessed through performance: what students can do with their learning. Assessing students’ performance can involve assessments that are formal or informal, high- or low-stakes, anonymous or public, individual or collective.",
            },
          ],
        },
        {
          id: 3,
          user: "Teacher Bryan",
          title: "How can i engage my students in learning",
          description:
            "How would you define student engagement, and what are good strategies to promote it?",
          upvotes: 800,
          comments: [
            {
              id: 1,
              user: "LopohutPlayer",
              comment:
                "When students are engaged in learning, there is movement and laughter and sometimes lots of noise. They are up and out of their seats involved in activities that promote thought, creativity, and discovery. Students are busy, self-disciplined, and best of all, willing to take responsibility for their own learning because they understand that what they are doing is important.",
            },
            {
              id: 2,
              user: "Teacher Maria",
              comment:
                "Design lessons that call for students to interact with students in other classrooms across the globe, to creatively use technology and other media, and to solve authentic problems. The possibilities for engagement are endless when students can see that what they do in your class can be applied to real-life situations.",
            },
            {
              id: 3,
              user: "Teacher Ben",
              comment:
                "Don’t underestimate your students’ delight in having fun as they work. Appeal to their playful natures when you provide assignments that call for them to solve puzzles or problems, play games, watch humorous videos, or write answers on anything other than paper.",
            },
          ],
        },
        {
          id: 4,
          user: "Teacher Carl",
          title: "How can i engage my students in learning",
          description:
            "How would you define student engagement, and what are good strategies to promote it?",
          upvotes: 900,
          comments: [
            {
              id: 1,
              user: "LopohutPlayer",
              comment:
                "When students are engaged in learning, there is movement and laughter and sometimes lots of noise. They are up and out of their seats involved in activities that promote thought, creativity, and discovery. Students are busy, self-disciplined, and best of all, willing to take responsibility for their own learning because they understand that what they are doing is important.",
            },
            {
              id: 2,
              user: "Teacher Maria",
              comment:
                "Design lessons that call for students to interact with students in other classrooms across the globe, to creatively use technology and other media, and to solve authentic problems. The possibilities for engagement are endless when students can see that what they do in your class can be applied to real-life situations.",
            },
            {
              id: 3,
              user: "Teacher Ben",
              comment:
                "Don’t underestimate your students’ delight in having fun as they work. Appeal to their playful natures when you provide assignments that call for them to solve puzzles or problems, play games, watch humorous videos, or write answers on anything other than paper.",
            },
          ],
        },
      ],
    },
  ],
};
