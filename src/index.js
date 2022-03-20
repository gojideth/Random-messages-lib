const messages = ["Oscar", "Nicolai", "Diego", "Jessica", "Laura", "Fernanda"];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random()* messages.length) ];
  console.log(message);
};

module.exports = { randomMsg };
