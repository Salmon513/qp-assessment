# qp-assessment

### Steps to run
- clone the repo
- create a file db with the below cmd
```
mkdir FileDB && cd FileDB && touch myDB.db && cd ..
```
- install specified packages

```
npm i
```
- compile the ts files

```
npx tsc -- compile
```

- run the server with node

```
node ./dist/index.js
```

### Explination:
 - Implemented CRUD api for admin user
 - For time being I haven't fully implemented the booking api
 - For the resource I've useed the sqlite3 fileDB to run on any linux machines