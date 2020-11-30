# MyPoemsCollection.com README

## Overview

**MyPoemsCollection.com** is an app designed for poetry entusiasts everywhere. Users will be able to scroll through a library of poet profiles and collected poems created by a community of poetry lovers. Poet Profiles will be organized either alphabetically, place of birth, or birth date. Poems will be categorized by author, topic, and compilation date. Users will create profiles for their favorite poets, introducing them to the public, and will be able to add their own favorite poems to the library, building a 
<br>

**MyPoemsCollection.com MVP** 

### Server - Back End

- **Server** built with Ruby on Rails with RESTful JSON endpoints. 
- **Database** will have three tables:
  - **User Table**: this table will be created wen registering for the app. This table will have a 1:m relationsip with the poets' table.
  - **Poets Table**: This table will have a m:1 relationship with the users table and 1:m relationship with the Poems table. Users will be able to create a "Poet Profile with the following information:
    -Name
    -Year of Birth
    -Place of Birth
  - **Poems Table**: This table will have a m:1 relationship with the poets' table.
- **Rails** will be used define models for interacting with the tables in my database.
- Working generic controller actions for Full CRUD between the tables in my database. 

### Client (Front End)

- Front end will be created with **React app**, using functional components:

|     Screens      | Components  |
| :--------------: | :---------: |
|     Home Page    |   Header    |
|   Register Page  |   Footer    |
|   User Home Page |Register Card|
|   Add Poem Page  |Sign In Card |
|   Add Poet Page  | Poem Feed   |
| Single Poet Page | Poet Card   |
|  Single Poem Page|             |

- The app will use **React Router**, for client-side routing.

### Styling

I will be using CSS styling, specifically grid and flex.

<br>

### Website Goals

- Build a Ruby on Rails Server that can be consumed easily by the front end.
- Create an aesthetically pleasing website that makes good use of white space, fonts, imagery to create an inviting environment.
- Create an architecture condusive to conitnued improvements and additions to the app.

<br>

### Libraries & Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description    |
| :--------------: | :-------------:|
|      React       | _Front End Client_ |
|   React Router   | _Client Side Routing._ |
|   Ruby on Rails  | _Backend Server._ |


<br>

### Client (Front End)

#### Wireframes

Although desktop/ipad views will be similar, there will be changes made to the sizing fo all fonts and components.

- Desktop/Ipad Landing
![](https://i.imgur.com/EqMCQxa.png)

- Desktop/Ipad Registration Page
![](https://i.imgur.com/59h4tzQ.png)

- Desktop/Ipad User Home Page
![](https://i.imgur.com/hxCe94r.png)


- Desktop/Ipad Single Poem Page
![](https://i.imgur.com/ta8pL3m.png)


- Desktop/Ipad Poet Profile Page
![](https://i.imgur.com/RqyU55x.png)

- Desktop/Ipad Create Poet Profile Page
![](https://i.imgur.com/sFqAzLm.png)

- Desktop/Ipad Add Poem Page
![](https://i.imgur.com/k6NUKig.png)

- Mobile wireframes
![](https://i.imgur.com/jDOJsR6.png)

#### Component Tree

- Mobile wireframes
![](https://i.imgur.com/qA782s1.png)

#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

```
src
├──components
   ├──Navbar.js
   ├──SignInCard.js
   ├──RegisterCard.js
   ├──PoemIntroCard.js
   ├──FullPoemCard.js
├──layout
├──screens
├──services
├──App.css
├──App.js
├──Index.css
├──Index.js
├──reportWebVitals.js


    ├── App.css
    ├── App.jsx // This is the brain of our application, where our screens will be rendered (inside of a <Route />), and data will be stored to pass down to all necessary screens below.
    ├── App.test.js
    ├── components // This folder is for non-top level components, i.e. things rendered within one of the screens.
    │   ├── Product // For each component, we have an individual folder with a unique .jsx and .css file per component.
    │   │   ├── Product.css
    │   │   └── Product.jsx
    │   ├── Search
    │   │   ├── Search.css
    │   │   └── Search.jsx
    │   ├── Sort
    │   │   ├── Sort.css
    │   │   └── Sort.jsx
    │   └── shared // This folder is for components that will appear across all screens.
    │       ├── Footer
    │       │   ├── Footer.css
    │       │   └── Footer.jsx
    │       ├── Layout
    │       │   ├── Layout.css
    │       │   └── Layout.jsx
    │       └── Nav
    │           ├── Nav.css
    │           └── Nav.jsx
    ├── index.css
    ├── index.js
    ├── screens // This folder is for top-level components, i.e. components rendered in a <Route /> in App.js.
    │   ├── ProductDetail
    │   │   ├── ProductDetail.css
    │   │   └── ProductDetail.jsx
    │   └── Products
    │       ├── Products.css
    │       └── Products.jsx
    ├── serviceWorker.js
    ├── services // This folder is for API calls.
    │   └── products.js
    ├── setupTests.js
    └── utils // This folder is for helper functions, such as sorts.
        └── sort.js

15 directories, 35 files
```

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model. You can use draw.io, Lucidchart or another ERD tool.

<br>

***

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
