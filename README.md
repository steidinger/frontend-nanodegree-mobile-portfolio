## Website Performance Optimization portfolio project


### Prerequisites

To use this project you'll need to have node.js and grunt-cli installed on your computer.
If you don't already have these, please install node.js following the instructions on
the [node.js homepage](https://nodejs.org/).

Once you have node.js on your computer, open a shell or command window and go to the directory
where you stored this project.

If you don't have grunt-cli, please install it using the following command. This will install 
grunt-cli globally as recommended in the [Grunt Getting Started tutorial](http://gruntjs.com/getting-started).

  ```
  $> npm install grunt-cli -g
  ```

Now you should be able to install the project's other dependencies automatically:

  ```
  $> npm install
  ```


### Getting Started

This project includes a [Grunt](http://gruntjs.com) build that will turn the source files into files optimized
for performance. The Grunt build can also be used to start a simple HTTP server serving either the non-optimized
or the optimized files. To start the optimized version open a shell or command window in the project's root directory
and simply type

  ```
  $> grunt
  ```
  
This will optimize the images, html and css files, which depending on your computer might take a few seconds. Once you
see the message *"Started connect web server on http://localhost:8080"* the server is ready and you can access the
optimized version at [http://localhost:8080](http://localhost:8080).

To see the non-optimized version you'll have to use the command

  ```
  $> grunt dev
  ```

As before, the site will be available at [http://localhost:8080](http://localhost:8080).

### Optimizations for views/js/main.js and pizza.html

- use requestAnimationFrame to update the pizzas' positions
- do not read document.body.scrollTop within the for loop, instead read it only once
- debounce updatePositions, i.e. do not call it from the scroll event handler if another call is still in progress
- put moving pizzas into own layers
- do not move pizzas individually, move all pizzas following the same path together

### Optimized versions of index.html and its css and images

The optimized versions are generated automatically during the build in the directory *dist*.
Normally I would not include them in the repository as they should not be changed manually 
and can always be regenerated. However the course's instructions require that they are submitted 
to the same repository as the source files so that directory is included. 