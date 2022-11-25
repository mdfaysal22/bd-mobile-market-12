import React from 'react';
import SingleBlog from './SingleBlog/SingleBlog';

const Blog = () => {
    const articles = [
        {
            title: "What are the different ways to manage a state in a React application?",
            articleHeading: "The Four Kinds of React State to Manage.",
            articleBody: `Local (UI) state – Local state is data we manage in one or another component.Local state is most often managed in React using the useState hook.For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs. Global (UI) state – Global state is data we manage across multiple components.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least. Server state – Data that comes from an external server that must be integrated with our UI state. Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state. There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state. Fortunately there are tools such as SWR and React Query that make managing server state much easier. URL state – Data that exists on our URLs, including the pathname and query parameters.URL state is often missing as a category of state, but it is an important one. In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!`
        },
        {
            title:"How does prototypical inheritance work?",
            articleHeading:"Prototypal Inheritance using __proto__ in JavaScript",
            articleBody:"The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__."
        },
        {
            title:"What Is Unit Testing?",
            articleHeading:"A unit test is a way of testing a unit.",
            articleBody:"The smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property."
        },
        {
            title:"Why Do We Need Unit Testing?",
            articleHeading:"Unit tests generally exercise the functionality of the smallest possible unit of code (a method, class, or component) in a repeatable way.",
            articleBody:"You can test units or functions of your project in isolation. Unit tests act as documentation for your code.They enable you to catch bugs early in the development process.Automated unit tests help a great deal with regression testing.They detect code smells in your codebase. For example, if you’re having a hard time writing unit tests for a piece of code, it might be a sign that your function is too complex."
        },
        {
            title:"Angular vs React vs Vue?",
            articleHeading:"There are three frameworks for building web applications that every frontend developer has heard about: React, Vue.js, and Angular.",
            articleBody: "Angular is a front-end framework with lots of components, services, and tools. On Angular’s site, you can see that they define Angular as: “The modern web developer’s platform”It is developed and maintained by Google developers, but curiously it is not used to implement any of their most common products such as Search or YouTube.React is considered a UI library. They define themselves as:“A JavaScript library for building user interfaces”Facebook developers are behind the development and maintenance of this library. And, in this case, most of Facebook’s products are made with React.Last but not least, Vue.js is, according to its site:“A progressive JavaScript framework”Vue.js is developed and led by Evan You, but also it counts on a huge open-source community.These three frameworks have several things in common, such as each follows a component-based architecture and allows creating UI features quickly. React and Vue.js are mainly declarative, and while Angular could also be declarative, it’s really more imperative. Nevertheless, they present some more differences according to their structure, architecture and way of working, so let’s dive into all these characteristics."
        }
    ]
    return (
        <div>
            {
                articles.map((article, index) => <SingleBlog index={index} key={index} article={article}></SingleBlog>)
            }
        </div>
    );
};

export default Blog;