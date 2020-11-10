
module.exports = {
  prompt: ({ prompter }) => {
    return new Promise((resolve, reject) => {
      prompter
        .prompt([
          {
            type: 'input',
            name: 'name',
            message: "Enter name of the component",
          }
        ])
        .then(({ name, summary }) => {
          if (!name) {
            reject('You have to provide a article name');
            return;
          }
          resolve({
            name,
          });
        })
        .catch((_error) => {
          console.log('Something went wrong or maybe you just exited out of CLI 🤷‍♂️');
        });
    });
  },
};