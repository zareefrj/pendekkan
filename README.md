<h1>Pendekkan - URL Shortener</h1>
<h2>Description</h2>
A URL Shortener Application build with React JS, Python Flask, Firebase Data Base and Heroku. This is my first full stack project.
<br />

## Tools & Packages Utilized
1. React Bootstrap
2. Nanoid (A tiny, secure, URL-friendly, unique string ID generator for JavaScript. )
3. Javascript
4. Python Flask
5. Firebase
6. Heroku

<h2>Architecture</h2>

- <b>Client React App</b>
  - Single page for users to interact & input the url.
- <b>Database (Firebase)</b>
  - To store the long & short urls for retrieval. 
- <b>Server (Python Flask, Heroku)</b>
  - When short url is called, it fetches the corresponding long url from the database & redirects to the user to the long url.

## Steps Taken
- [x] Download & install nodejs & python.
- [x] Create the React App: `npx create-react-app app-name` *if error: run `npm init` then `npm install create-react-app`*
- [x] Install packages: `cd app-name` --> `npm install bootstrap react-bootstrap nanoid react-router-dom firebase valid-url`
- [x] Configure Firebase database.
- [ ] Build & Run the app
<p align="center">
<b>Form Components NOT showing</b>: <br/>
<img src="https://i.imgur.com/7K3ij2c.png" height="80%" width="80%"/>
<br />
