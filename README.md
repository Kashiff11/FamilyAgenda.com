# MyPoemsCollection.com README

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

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
|   Sign In Page   |   Footer    |
|   Register Page  |Register Card|
|   User Home Page |Sign In Card |
|   Add Poem Page  | Poem Feed   |
|   Add Poet Page  | Poet Card   |
|  Single Poem Page|             |
|  Single Poet Page|             |

  - Use _only_ React for DOM Manipulation.
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

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Lorem ipsum dolor sit amet, consectetur._ |
|   React Router   | _Lorem ipsum dolor sit amet, consectetur._ |
| React SemanticUI | _Lorem ipsum dolor sit amet, consectetur._ |
|     Express      | _Lorem ipsum dolor sit amet, consectetur._ |
|  Express Router  | _Lorem ipsum dolor sit amet, consectetur._ |

<br>

### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views. No hand-drawn wireframes. Use a tool like wireframe.cc, Whimsical or AdobeXD

![Dummy Link](url)

- Desktop Landing

![Dummy Link](url)

- Desktop Hero

![Dummy Link](url)

- Resource Index

![Dummy Link](url)

- Resource Show

![Dummy Link](url)

- Tablet Resource Index

![Dummy Link](url)

- Mobile Resource Index

#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. 

#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
|__ services/

```

#### Component Tree

> Use this section to include a link to your component tree.

[Component tree](url)

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
