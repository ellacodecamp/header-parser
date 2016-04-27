# Request Header Parser Microservice

This repository implements HTTP request header parser microservice for one of the FCC backend projects.

The service can be found running on [Heroku](https://header-parser-ellacodecamp.herokuapp.com)

## User Story

You can get the IP address, language and operating system for your browser.

## Instructions

To use the service call this URL from the browser: https://header-parser-ellacodecamp.herokuapp.com/api/whoami.

It will respond with JSON in the following format:

```JSON
{
  "ipaddress":"1.1.1.1",
  "language":"en-US",
  "software":"Macintosh; Intel Mac OS X 10_11_4"
}
```

Alternatively, you can use ```curl``` command from line to send a custom request and see how the app responds.
I've used the following command for testing:

```
curl -H "Accept-language: en-US,en;q=0.8,nl;q=0.6,ru;q=0.4" -H "User-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.110 Safari/537.36" https://header-parser-ellacodecamp.herokuapp.com/api/whoami
```