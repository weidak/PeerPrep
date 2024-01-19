[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/6BOvYMwN)

# System Architecture

![cs3219_overall_architecture-overall architecture drawio](https://github.com/weidak/PeerPrep/assets/70256674/ac7822a6-2574-433e-8348-ffc7d84a212b)

More can be read in our [report.pdf](G05_Report.pdf)

# Setting up our environment locally

<strong>Note: Ensure you have installed [Docker Compose](https://docs.docker.com/compose/).</strong>

### Local Deployment Architecture
![cs3219_overall_architecture-local deployment drawio (3)](https://github.com/CS3219-AY2324S1/ay2324s1-course-assessment-g05/assets/70256674/c733569f-ef3a-4837-918c-80c83b39a507)


### Instructions on setting up local deployment

1. Download the environment variables from the folder on Canvas. 

2. Create a new .env file in the root directory `/` and paste all the contents into this file. (Location of .env file is illustrated below)

![image](https://github.com/CS3219-AY2324S1/ay2324s1-course-assessment-g05/assets/70256674/ee7ad5b8-d861-40ff-9e34-7e012442bb24)

3. In the root directory `/`, run `docker compose -p peerprep up` to launch the backend services. 

4. Wait for the containers to stabilize before proceeding with the application.

Console: (Fully deployed state)

![image](https://github.com/CS3219-AY2324S1/ay2324s1-course-assessment-g05/assets/70256674/c0182291-479d-4165-9e9a-f1cb2bbb5cf6)

The last container should indicate that frontend is live at [http://localhost:3000](http://localhost:3000).
