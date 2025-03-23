![Image](https://github.com/user-attachments/assets/943dbbb1-5ee9-4a02-bae9-5cf3f30f9c04)

## simple todo app
created by NextJs and Postgresql this simple todoapp can be used to write , edit , delete daily tasks.
using prisma ODM it connects to a database to store data for later use of the application.


### Installation:
1. copy the files from github
2. install necessary packages using npm install
3. connect your database to the application using prisma.schema file.
4. run the app using npm run dev


### How does it work:
# AddTask Button: Using this button will initialize a REST API to database to POST the context stored in Input Panel.
# EditTask Button: Using this button pops up an editor allowing the user to change the context of the Task and sending a POST request to database.
# DeleteTask Button: Using this button will send a DELETE request to database, deleting the Task.

# NextCache: Using Next/cache with every request a revalidate function is called to use cache to refresh data in Page without reloading the page.

### Technologies used:
NextJs - Prisma - Postgresql - tailwindcss - typescript - tiptap - zod
