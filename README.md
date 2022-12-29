# Module 35: Robust Server Structure
## Section 6: Organizing Express Code
This code is a solution to a Qualified Assessment provided by the Thinkful Software Engineering Curriculum. This serves as a storage for assessments. 
### Installation
1. Clone this repository.
2. `cd` into the newly created repository.
3. Run `npm install`.
4. Run `npm run dev`. This command run a server on port 5000 that will automatically restart when changes are made and saved to source files.

### Navigation
You can navigate to `localhost:5000/notes` to see a list of notes. These notes have two properties: 1) id 2) text 

You can search for a specific note by navigating to `localhost:5000/notes/:notesId`. Certain error messages will be displayed if, for instance, the `noteId` entered does not exist.

### Requests
The `GET` HTTP request is equivalent to navigating to the correct URL. However, in order to create a new note (`POST` request) or update and existing note (`PUT` request), it can be easily done and verified by using an application such as Postman. If you are unfamiliar with Postman, refer to the [Postman API](https://learning.postman.com/docs/sending-requests/requests/) documentation.

### Test
1. Run `npm test` to run all tests once. 
2. Run `npm run test:watch` to run all tests in 'watch' mode. This mode will re-run tests everytime changes are saved to source files.