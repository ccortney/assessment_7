### Conceptual Exercise

Answer the following questions below:

- What is a JWT? **JWT stands for JSON Web Token and is used to share security information. When you sign in, the server authenticates and returns a token in JSON that is encoded and signed. For future requests, the browser sends the token in the request.** 

- What is the signature portion of the JWT?  What does it do? **The signature portion is a version of the header and payload signed with a secret key. This allows us to verify that the issuer of the JWT is who it says it is and to ensure that the message wasn't changed along the way.** 

- If a JWT is intercepted, can the attacker see what's inside the payload? **Yes, so sensitive information should not be kept in the payload.**

- How can you implement authentication with a JWT?  **Describe how it works at a high level. We can create token by passing in the payload, secret key, and other options into jwt.sign(). To verify a token, we pass in the token from the request and the secret key into jwt.verify().**

- Compare and contrast unit, integration and end-to-end tests. **Unit tests make sure each part works. Integration tests make sure the parts work together. End-to-End testing tests an application's flow from start to end.**

- What is a mock? What are some things you would mock? **Mocks simulate the behavior of other objects that the test depends on. It makes our tests 'pure". Whether they pass or fail depends only on your code, not on anything externally built, like Math.random(). We can use mocking to set Math.random to a certain value when we call the original function in our test.** 

- What is continuous integration? **The practice of merging in small code changes frequently, rather than merging in a large change at the end of a development cycle, which allows us to develop and test in smaller increments.**

- What is an environment variable and what are they used for? **The environment variables allow you to store API keys and otehr configuration secrets independently from your main codebase and separate from your git repo. We can use it to set a secret key and if we are in developement, production, or testing mode.**

- What is TDD? What are some benefits and drawbacks? **TDD stands for Test Driven Developement, where you write the tests firsts (which will fail) and then you write the code necessary to get the tests to pass. A benefit is that you are very intentional in the code that you write and are able to plan what you want specifically beforehand. The drawback is that this can take time to get used to and can end up being slower.**

- What is the value of using JSONSchema for validation? **The three main reasons to use JSONSchema are 1) User data can fail fast, before bad data gets to your db, 2) Reduces the amount of code for processing and validating data, and 3) A validation system that is easy to set up and maintain**

- What are some ways to decide which code to test? **It is essential to think from a tester's perspective and not from the developer's point of view. Also try to test edge cases and the code which might go wrong.**

- What does `RETURNING` do in SQL? When would you use it? **The RETURNING clause returns the data that was insernted, updated, or deleted.**

- What are some differences between Web Sockets and HTTP? **This was optional, which I have skipped for now. I will come back to it.**

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)? **I found express to be more organized, and I liked using JWT better**
