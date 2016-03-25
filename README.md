# Node SQL Form Update

Expand upon the form and database from lecture.

Get code from Github

Download the zipped code from Github (link above). Or Fork it. Do NOT Clone!

You'll need to run: npm install to bring in all the node modules needed.

Create people Table

In a Database in PgAdmin, let's create our people table to hold our data.

    CREATE TABLE people
    (
        id SERIAL NOT NULL,
        name character varying(255) NOT NULL,
        address character varying(255) NOT NULL,
        city varchar(100) NOT NULL,
        state varchar(3) NOT NULL,
        zip_code varchar(5) NOT NULL,
        CONSTRAINT people_pkey PRIMARY KEY (id)
    );
Your connectionString

Update your connectionString in our app.js, line 12: connectionString = 'postgres://localhost:5432/your-database-name';

Tasks
I have added 3 new fields to our people database. You need to update our app to support them.

Update our HTML form to capture those new fields and update our server side database queries to use them for insertion.

Then update our AJAX Get request to append all of our information to the DOM when it returns successfully so we can see the data from our database.
