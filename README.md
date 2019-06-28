# water-my-plant-UI

## Water My Plants UI

#### Landing Page

The landing page is the index/home page for the website if the user is not logged in. The page contains the navigation bar with links to log-in page, the news page, and the about page. The landing page consists of four sections: wmpheader, buildgrow, slideshowContainer, and resources.

Each section corresponds with an informational section on the page. The wmpheader contains the page title, call-to-action sign up button, and opening image. The buildgrow section contains information about the site's features. The slideshowContainer section is the component for the page's carousel displaying user's highlights. The final container is the resources, which has elements that will link to help pages.

#### About Page

The about page links to "Sign Up" and  "Log In". This page contains "Meet the Team" which are short descriptions  of each team member that contributed to this project. We used DOM manipulation to create scaling effects on the images under "Our Core Values", as well as Event Listeners to allow the user to double-click a members photo to get a short description/fun-fact!

#### News Page

The news page lists articles that are sortable by clicking on the buttons in the filter bar. This is done through a class constructor found in news.js. Each article tile has a modal counterpart that is displayed when you click "Read more..." and closed when you click out of the article or on the (x) in the corner. These articles are in the HTML, but hidden until a click event triggers their display.

If you wish to add new articles to the site, you would need to add both an article blurb and a matching modal article to the HTML following the proper tagging/naming conventions, and it will be automatically formatted and able to use the modal article system. It's important that the data-key in the modal button and the ID on the modal article container are exactly the same; this is what makes the modal articles work. For further scripting documentation, read the comments in news.js.


### Development Notes

Run `less-watch-compiler less css index.less` for the compiler to track changes.

Responsive meta tag
<!-- <meta name="viewport" content= "width=device-width, initial-scale=1.0">  -->

font-size: 62.5%. Because 62.5% of 16px is 10px, 
#### 1rem = 10px

#### font being used- include in head tag of page
<link href="https://fonts.googleapis.com/css?family=Josefin+Sans|Roboto&display=swap" rel="stylesheet"> 
    font-family: 'Josefin Sans', sans-serif;
    font-family: 'Roboto', sans-serif;

