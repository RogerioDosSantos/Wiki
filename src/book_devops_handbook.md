# The DevOps Handbook

**How to create world-class agility reliability, & security in Technology organizations**

Author: Gene Kim, Jez Humble, Patric Debois & John Willis 

## Part III

The part 3 focus on how to create the continuous delivery. 

### Deployment Pipeline 

- Always use production like environment from the DEV to Production 
- Should be able to create the entire environment from source controlled scripts 
- Automate the creation of the DEV, Test and Production environment.
- Use version control for everything, deployments, scripts, documentation. It argues that Version control is more important for the environment than for the source code. The reason is that the code has a lot of parameters that changes on it needs to be tracked more than code.
- The infrastruture should be easier to rebuild than to repair. Developers should be always using the latest infrastruture. 
- Change the definition of developemt done to be when a development is running in a production like environment. This will allow earlier mistakes to be catch and garantee that the solution does not only run on the developer's computer.

### Enable fast and reliable automation testing

- It is mentioned the Google experience in implementing automated tests. A curious fact mentioned is that today google uses a single repository for all their code. [This information is correct](https://cacm.acm.org/magazines/2016/7/204032-why-google-stores-billions-of-lines-of-code-in-a-single-repository/fulltext) however it is important to mention that could not be accomplished with any commecial tool available (E.g.: Git.). 
- It is mentioned that to reduce problems we should try to use the same package of code everywhereto avoid problems when deploying the solution.
- Make the tests in a way that you will have rapid feedback. Faster the feedback of an error easier is to fix it.
- Type of tests: Unit Test (Fast, one function of class), Acceptance Tests (Validate business requirement), Integration Tests (Validates the full system and how it is integrated).
- Most of the errors should be cought using the unit test. 
- Test should run in parallel as much as possible.
- TDD (Test Driven Development) - Write the automated test before you write the code.
- Integrate Performance test into the test suite
- Broken build means no more code checkin allowed
- If a defect in acceptance test is cought we should transfer the test to unit test 

### Enable and practice continuous integration 

- Mention the usage of one branch stead of creating several branches
- Mention thas this still controversial.
- Mentioned the importance of good automated tests and gated checkin 

### Automate and Enable Low-Risk Releases 

- Automate the deployment process 
- On this chapter is mentioned that the environments (DEV, Test and Production)
- It was mentioned that although we might have several environments, those needs to be synchronized.

