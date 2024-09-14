//proxy validator
//the function expext return a proxy
//user:object(name,email,age)

function createValidator(user) {
  const handler = {
    set(target, prop, value) {
      if (prop === "name") {
        if (
          typeof value !== "string" ||
          value.length < 1 ||
          value.length > 100
        ) {
          console.log("Name property is invalid");
        }
      }
      const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
      if (prop === "email") {
        if (!emailRegex.test(value) || value.length > 100) {
          console.log("Email property is invalid");
        }
      }

      if (prop === "age") {
        if (!Number.isInteger(value) || value < 18 || value > 120) {
          console.log("Age property is invalid");
        }
      }
      target[prop] = value;
      return true;
    },
  };

  return new Proxy(user, handler);
}

const user = {
  name: "John Doe",
  email: "john.doe@example.com",
  age: 30,
};

const validatedUser = createValidator(user);
try {
  validatedUser.name = "Jane Doe"; // geçerli
  validatedUser.email = "jane.doe@example.com"; // geçerli
  validatedUser.age = 25; // geçerli

  // Hatalı girişler
  validatedUser.name = ""; // Hata: Name property is invalid
  validatedUser.email = "invalid-email"; // Hata: Email property is invalid
  validatedUser.age = 17; // Hata: Age property is invalid
} catch (error) {
  console.error(error.message);
}
