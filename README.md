# More homes you may like

Suggestion module for the vacation rental app that displays 12 more homes. Each component is clickable and redirects user to the main page of the clicked house. User can scroll to the left and right to see all suggestions. The app is responsive to resizing.

<img width="1179" alt="modulePic" src="https://user-images.githubusercontent.com/44889384/61908350-51395880-aee4-11e9-8ea9-36ea16ac8d98.png">

## Installation

Step 1: Clone the repo
```javascript
git clone https://github.com/1021sdc/More-homes.git
```

Step 2: Create `config.js` file in `db` folder with your configuration
	Example template: 
		```javascript
			const config = {
				host     : '127.0.0.1',
  				user     : 'root',
  				database : 'more_homes',
			};

			module.exports = config;
		```

Step 3: Seed data 
```javascript
$ npm run db-seed
```

Step 4: Compile files with webpack (and watch)
```javascript
$ npm run react-dev
```

Step 5: Start the app
```javascript
$ npm start
```

Extra: To run tests
```javascript
$ npm run test
```

Extra: To update screenshots for tests
```javascript
$ npm run updateTestSnapshot
```

## CRUD Routes

All routes are serviced through the /MoreHomes endpoint.  Given tasks are dependent on the HTTP verb used:

```javascript
  app.route('/MoreHomes')
    .get((req, res) => {
      res.send('Get a random home');
    })
    .post((req, res) => {
      res.send('Add a home to db');
    })
    .put((req, res) => {
      res.send('Edit a stored home');
    })
    .delete((req, res) => {
      res.send('Remove a stored home');
    });
```

## Related Projects

* https://github.com/hacker-home/Airbnb-photos
* https://github.com/hacker-home/Airbnb-info
* https://github.com/hacker-home/Airbnb-booking
* https://github.com/hacker-home/Airbnb-reviews