// this is a simple html template for returning a html template to server side
export default ({ body, title, state }) => {
  return `
      <!DOCTYPE html>
      <html>
        <head>
          <title>${title}</title>
          <link rel="icon" type="image/png" href="assets/public/img/favicon.ico">
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
          <script src="https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js"></script>
          <script src="https://at.alicdn.com/t/font_1416198_ahu5115sos.js"></script>
          <link href="/assets/css/vendors~bundle@3.css" rel="stylesheet">
	        <link href="/assets/css/bundle.css" rel="stylesheet">
        </head>
        
        <body>
          <div id="app" style="min-height: 100vh; display: flex;">${body}</div>
          <script type="text/javascript" src="/assets/vendors~bundle.js"></script>
          <script type="text/javascript" src="/assets/bundle.js"></script>
        </body>
        <script type="text/javascript" charset="utf-8">
          window.__INITIAL_STATE__ = ${state};
        </script>
      </html>
    `;
};