module.exports.getHTML=(appComponent)=> `
    <!DOCTYPE html>
      <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link defer rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">      
            <link defer rel="stylesheet" href="/static/styles.css">
        </head>
        
        <body> 
        <header>
       <h1>Calendar</h1>
        </div>
        </header> 
        <div id="root">
        ${appComponent}
        </div>        
        </body>
        <script src="/static/bundle.js"></script>
        
    </html>
    `;
