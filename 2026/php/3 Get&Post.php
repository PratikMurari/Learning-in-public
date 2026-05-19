<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>GET & POST Methods</h1>

    <h2>GET Method</h2>
    <form action="3 Get&Post.php" method="get">
        <label>username:</label>
        <input type="text" name="username"><br>
        <label>password:</label>
        <input type="password" name="password"><br>
        <input type="submit" value="Log In">
    </form>

    <h2>POST Method</h2>
    <form action="3 Get&Post.php" method="post">
        <label>username:</label>
        <input type="text" name="username"><br>
        <label>password:</label>
        <input type="password" name="password"><br>
        <input type="submit" value="Log In">
    </form>
</body>
</html>

<!-- php code below -->
 
<?php
// $_GET, $_POST = special variables used to collect data from an HTML form
//                 data is sent to the file in the action attribute of < form> 
//                 < form action="some_file.php" method="get" ›

//$_GET = Data is appended to the url
//        NOT SECURE
//        char limit
//        Bookmark is possible w/ values
//        GET requests can be cached 
//        Better for a search page

//$_POST = Data is packaged inside the body of the HTTP request
//         MORE SECURE
//         No data limit
//         Cannot bookmark
//         GET requests are not cached
//         Better for submitting credentials

// Output the data from the GET forms
echo $_GET['username'] . "<br>";
echo $_GET['password'] . "<br>"; 
// GET is not secure, so the password will be visible in the URL, which is not recommended for sensitive information like passwords.

// Output the data from the POST forms
echo $_POST['username'] . "<br>";
echo $_POST['password'] . "<br>";
// POST is more secure, so the password will not be visible in the URL, making it a better choice for sensitive information like passwords.

// $_GET and $_POST are superglobal variables, which means they are available in all scopes throughout a script.
// They are used to collect data from HTML forms and send it to the server for processing.
?>