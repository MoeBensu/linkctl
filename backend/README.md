## Backend setup

 - To run it locally, you need first to create `default.config` file in `/config` folder. The file should contain:

 ```
{
  "mongoUrl": <mongoDB URI>,
  "baseUrl": <base URI of the host>
}
```

- install dependencies and then run the backend app (eitehr run it with node or nodemon)

```
npm i
```

Nodemon:
```
npm run dev
```

Or just with node:
```
npm run start
```


