const crypto = require("crypto");
const { todo } = require("./fakeDb");

exports.resolvers = {
  Query: {
    todos: () => todo,
    todo: (_, args) => todo.find((t) => t.id == args.id),
  },
  Mutation: {
    createTodo: (_, args) => {
      const id = crypto.randomBytes(5).toString("hex");
      todo.push({
        id,
        title: args.title,
        desc: args.desc,
        isPost: true,
      });
      return todo.find((t) => t.id == id);
    },
  },
};
