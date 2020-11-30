# MyPoemsCollection.com README

## Overview

**MyPoemsCollection.com** is an app designed for poetry entusiasts everywhere. Users will be able to scroll through a library of poet profiles and collected poems created by a community of poetry lovers. Poet Profiles will be organized either alphabetically, place of birth, or birth date. Poems will be categorized by author, topic, and compilation date. Users will create profiles for their favorite poets, introducing them to the public, and will be able to add their own favorite poems to the library, building a 
<br>

**MyPoemsCollection.com MVP** 

### Server - Back End

- **Server** built with Ruby on Rails with RESTful JSON endpoints. 
- **Database** will have three tables:
  - **User Table**: this table will be created wen registering for the app. This table will have a 1:m relationsip with the poets' table.
  - **Poets Table**: This table will have a m:1 relationship with the users table and 1:m relationship with the Poems table.
  - **Poems Table**: This table will have a m:1 relationship with the poets' table and user's table
- **Rails** will be used define models for interacting with the tables in my database.
- Working generic controller actions for Full CRUD between the tables in my database. 

### Client (Front End)

- Front end will be created with **React app**, using functional components:

|     Screens      | Components    |
| :--------------: | :-----------: |
|     Home Page    |   Navbar      |
|   Register Page  |Sign In Card   |
|   User Home Page |Register Card  |
|   Add Poem Page  |Poem Intro Card|
|   Add Poet Page  |Full Poem Card |
| Single Poet Page |Poet Bio Card  |
|  Single Poem Page|Add Poem       |
|                  |Add Poet       |

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
![](https://i.imgur.com/3dIRupG.png)

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
   ├──navbar
   |  ├──Navbar.css
   |  ├──Navbar.js
   ├──signin
   |  ├──SignInCard.css
   |  ├──SignInCard.js
   ├──register
   |  ├──RegisterCard.css
   |  ├──RegisterCard.js
   ├──poemintro
   |  ├──PoemIntroCard.css
   |  ├──PoemIntroCard.js
   ├──fullpoem
   |  ├──FullPoemCard.css
   |  ├──FullPoemCard.js
   ├──poetbio
   |  ├──PoetBioCard.css
   |  ├──PoetBioCard.js
   ├──addpoet
   |  ├──AdddPoetCard.css
   |  ├──AdddPoetCard.js
   ├──addpoem
      ├──AdddPoemCard.css
      ├──AdddPoemCard.js
├──layout
   ├──Layout.js
├──screens
   ├──signinscreen
   |  ├──SignInScreen.css
   |  ├──SignInScreen.js
   ├──registerscreen
   |  ├──RegisterScreen.css
   |  ├──RegisterScreen.js
   ├──poemintroscreen
   |  ├──PoemIntroScreen.css
   |  ├──PoemIntroScreen.js
   ├──fullpoemscreen
   |  ├──FullPoemScreen.css
   |  ├──FullPoemScreen.js
   ├──poetbioscreen
   |  ├──PoetBioScreen.css
   |  ├──PoetBioScreen.js
   ├──adddpoetscreen
   |  ├──AdddPoetScreen.css
   |  ├──AdddPoetScreen.js
   ├──adddpoemscreen
      ├──AdddPoemScreen.css
      ├──AdddPoemScreen.js
├──service
   ├──apiConfig.js
   ├──auth.js
   ├──poets.js
   ├──poems.js
├──App.css
├──App.js
├──Index.css
├──Index.js
├──reportWebVitals.js
```

#### Time Estimates

| Component              | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------------- | :------: | :------------: | :-----------: | :---------: |
| Creating Wireframes    |    M     |      10hrs     |     10hrs     |   10hrs     |
| Creating Hierarchy     |    M     |      1hrs      |     1hrs      |    1hrs     |
| Creating Component Tree|    L     |      1hrs      |     1hrs      |    1hrs     |
| Creating README        |    H     |      6hrs      |     6hrs      |    6hrs     |
| SQL tables             |    H     |      5hrs      |     0hrs      |    0hrs     |
| Creating Backend Server|    H     |     16hrs      |     0hrs      |    0hrs     |
| React Architecture     |    H     |      5hrs      |     0hrs      |    0hrs     |
| Create React App       |    H     |     16hrs      |     0hrs      |    0hrs     |
| Review/Complete MVP    |    H     |      8hrs      |     0hrs      |    0hrs     |
| Styling Complete       |    M     |     10hrs      |     10hrs     |    10hrs    |
| Post MVP Additions     |    L     |      6hrs      |     0hrs      |    0hrs     |
| Total                  |    H     |     84hrs      |     18hrs     |    18hrs    |

<br>

### Server (Back End)

#### ERD Model

![](https://i.imgur.com/gROcvJo.png)

<br>

***

## Post-MVP

- Add favorites functionallity
- Add friends functionallity

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
