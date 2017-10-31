
I am new to Webpack, so I'm on a learning curve. This project is derived fom the tutorial on https://webpack.js.org/guides and I'm currently stuck on Hot Module Replacement chapter (https://webpack.js.org/guides/hot-module-replacement/).

The project as it is reflects how far I have got and illustrates that HMR is
not working as I expect.

-> To run the express server, it is configured with the command:

    $ npm run server

-> Then open up localhost:3000 in the browser. It simply shows a message
saying "Hello webpack" with a button next to it. If you click the button,
you will see a message logged to the console (which comes from print.js).

-> Now if I understand correctly, I should be able to modify message
logged to console, and this message should be reflected in the console,
WITHOUT using a refresh. This afterall is the whole point of HMR. Currenly
this does nor work. The only way at the moment is to refesh the broswer for
the new message to be reflected in the log.

-> It is possibe that my understanding of HMR is not correct and that it is working;
I'm happy to be corrected, but I don't think this is the case.

-> I am finding that the tutorial is missing information. If you look at
https://webpack.js.org/guides/hot-module-replacement/, the "Enabling HMR"
is not complete. There is a paragraph:

    "If you took the route of using webpack-dev-middleware instead of webpack-dev-server, please use the webpack-hot-middleware package to enable HMR on your custom server or application"

... in particular, the statement "please use the webpack-hot-middleware package to enable HMR", does not indicate what must be done to enable HMR, it just says use
"webpack-hot-middleware", but I don't know what this means.

-> In trying to fix this, I have integrated the code as shown at
https://github.com/glenjamin/webpack-hot-middleware, but still not working.

-> I can that making changes does in fact trigger the webpack compiler to 
be re0invoked

Please assist if you can, Thanks!!
==================================







