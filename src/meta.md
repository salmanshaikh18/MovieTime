## Dependencies

1. **@reduxjs/toolkit**:
   - **Purpose**: To simplify Redux development.
   - **Explanation**: Redux is a library for managing global state in JavaScript applications. @reduxjs/toolkit provides tools and abstractions to make working with Redux easier and less error-prone, reducing the amount of boilerplate code you need to write.

2. **axios**:
   - **Purpose**: To handle HTTP requests.
   - **Explanation**: Axios is a popular library for making HTTP requests from the browser or Node.js. It's used to fetch data from APIs, send data to a server, etc. It simplifies tasks like making GET, POST, PUT, DELETE requests and handling responses.

3. **dayjs**:
   - **Purpose**: To handle and manipulate dates and times.
   - **Explanation**: Day.js is a lightweight library for working with dates and times in JavaScript. It provides an easy-to-use API for parsing, formatting, and manipulating dates, similar to Moment.js but smaller in size.

4. **react-circular-progressbar**:
   - **Purpose**: To display circular progress bars.
   - **Explanation**: This component library allows you to create customizable circular progress bars in your React applications. It's useful for visualizing progress or completion percentages.

5. **react-icons**:
   - **Purpose**: To provide a library of popular icons.
   - **Explanation**: React Icons gives you access to a variety of icon packs (like Font Awesome, Material Design, etc.) as React components. You can easily integrate these icons into your React app without relying on external icon fonts or images.

6. **react-infinite-scroll-component**:
   - **Purpose**: To implement infinite scrolling in your app.
   - **Explanation**: This component helps you create an infinite scrolling effect, where more content is loaded as the user scrolls down the page. It's commonly used for feeds, lists, or any content that dynamically loads more data.

7. **react-lazy-load-image-component**:
   - **Purpose**: To lazy-load images.
   - **Explanation**: This library helps you improve performance by lazy-loading images, meaning images are only loaded when they are about to enter the viewport (visible area). This can speed up page load times and reduce bandwidth usage.

8. **react-player**:
   - **Purpose**: To play media files.
   - **Explanation**: React Player is a component for playing media files like videos and audio from various sources (YouTube, Vimeo, SoundCloud, etc.). It provides a simple way to embed media players in your React application.

9. **react-redux**:
   - **Purpose**: To connect Redux with React.
   - **Explanation**: React-Redux is the official binding library for using Redux with React. It allows your React components to interact with the Redux store, dispatch actions, and access state.

10. **react-router-dom**:
    - **Purpose**: To handle routing in React applications.
    - **Explanation**: React Router DOM is a library for managing navigation and routing in React apps. It lets you define routes and handle navigation between different components/pages in a single-page application.

11. **react-select**:
    - **Purpose**: To create customizable select (dropdown) components.
    - **Explanation**: React Select is a flexible and customizable library for creating dropdown/select inputs. It supports features like multi-select, async options loading, and customizable styles.

12. **sass**:
    - **Purpose**: To use Sass in your project.
    - **Explanation**: Sass (Syntactically Awesome Style Sheets) is a preprocessor scripting language that is interpreted into CSS. It allows you to use variables, nested rules, mixins, and more, making your CSS more maintainable and easier to write.


---


## Differece between CSS and SCSS


CSS (Cascading Style Sheets) and SCSS (Sassy CSS) are both languages used to style web pages, but they have several key differences:

### CSS (Cascading Style Sheets)
1. **Basic Syntax**:
   - **Usage**: Defines the look and feel of HTML elements.
   - **Example**:
     ```css
     body {
       font-family: Arial, sans-serif;
       color: #333;
     }

     .container {
       padding: 20px;
       background-color: #f0f0f0;
     }
     ```

2. **Features**:
   - Simple and straightforward syntax.
   - Widely supported by all browsers.
   - Limited to basic styling rules and does not support variables, nesting, or other advanced features without additional tools (e.g., CSS custom properties for variables).

### SCSS (Sassy CSS)
1. **Enhanced Syntax (superset of CSS)**:
   - **Usage**: Extends CSS with more powerful features, making stylesheets easier to write and maintain.
   - **Example**:
     ```scss
     $primary-color: #333;

     body {
       font-family: Arial, sans-serif;
       color: $primary-color;
     }

     .container {
       padding: 20px;
       background-color: lighten($primary-color, 40%);
       
       .child {
         margin: 10px;
         color: darken($primary-color, 20%);
       }
     }
     ```

2. **Features**:
   - **Variables**: Allows the use of variables to store values that can be reused throughout the stylesheet.
     ```scss
     $font-stack: Helvetica, sans-serif;
     $primary-color: #333;

     body {
       font: 100% $font-stack;
       color: $primary-color;
     }
     ```
   - **Nesting**: Enables nesting of CSS rules, which mirrors the HTML structure and makes the stylesheet more readable.
     ```scss
     nav {
       ul {
         margin: 0;
         padding: 0;
         list-style: none;

         li { 
           display: inline-block; 
         }
       }
     }
     ```
   - **Partials and Imports**: Breaks CSS into smaller, reusable files.
     ```scss
     // _reset.scss
     * {
       margin: 0;
       padding: 0;
     }

     // main.scss
     @import 'reset';

     body {
       font-family: Arial, sans-serif;
     }
     ```
   - **Mixins**: Reusable chunks of code that can be included in other selectors.
     ```scss
     @mixin border-radius($radius) {
       -webkit-border-radius: $radius;
       -moz-border-radius: $radius;
       border-radius: $radius;
     }

     .box { 
       @include border-radius(10px); 
     }
     ```
   - **Inheritance**: Allows selectors to inherit styles from another selector.
     ```scss
     .message {
       border: 1px solid #ccc;
       padding: 10px;
       color: #333;
     }

     .success {
       @extend .message;
       border-color: green;
     }

     .error {
       @extend .message;
       border-color: red;
     }
     ```
   - **Functions**: Built-in and custom functions to manipulate values.
     ```scss
     $base-color: #3bbfce;
     $border-dark: rgba($base-color, 0.88);

     .header {
       border: 1px solid $border-dark;
     }
     ```

### Summary
- **CSS** is the standard language for styling web pages, with a straightforward syntax but limited advanced features.
- **SCSS** is an extension of CSS that includes advanced features like variables, nesting, mixins, inheritance, and functions, making stylesheets more powerful and easier to maintain. SCSS files are compiled into standard CSS files that browsers can understand.