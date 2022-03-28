# Example of multiple `pack_tag` invocation

Initially there are two packs for the client:

1. `app/javascript/packs/hello-world-bundle.js`
1. `app/javascript/packs/application.js`

The first one is the standard `hello_world` demo produced by 
`rails_on_react` that uses the react component
`app/javascript/bundles/HelloWorld/components/HelloWorld/HelloWorld.jsx`.

The second one copies and adapts the header 
and footer of `react_webpack_rails_tutorial` with
two react components 
`app/javascript/bundles/comments/layout/NavigationBar.jsx` and
`app/javascript/bundles/comments/layout/Footer.jsx`


# How to run 

## Requirements

* Ruby 2.7 or above (suggested the most recent i.e 3.1)
* PostgreSQL 9.7 or above (suggested the most recent i.e 14.2) 
  with a user that can create databases
* node 16.13 or above
* rails 7


## Procedure

* Run 
```
bundle
```
* Configure PostgreSQL user and password
  ```
  cp .env.template .env
  $EDITOR .env
  ```
  Set user, password and if needed host option for PostgreSQL in `DB_USER`, 
  `DB_PASSWORD` and `DB_HOST` respectively.
* Create the database and initilize it with:
  ```
  bin/rails db:setup
  ```
* Run `yarn`
* Run the example
  ```
  bundle exec foreman start -f Procfile.dev
  ```
* See results in your browser by opening http://127.0.0.1/comments


# Tests

* Run 
  ```
  CONFIG_HOSTS=www.example.com bin/rails test
  ```

