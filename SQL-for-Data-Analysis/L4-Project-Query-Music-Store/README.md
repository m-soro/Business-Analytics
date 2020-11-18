## Chinook Database

## Introduction

In this project, you will query the Chinook Database. The Chinook Database holds information about a music store. For this project, you will be assisting the Chinook team with understanding the media in their store, their customers and employees, and their invoice information. To assist you in the queries ahead, the schema for the Chinook Database is provided below. You can see the columns that link tables together via the arrows.

![image](./Misc/001.png)

All of the below instructions are discussed in detail as we work through this lesson on your way to completing this project. The below serves as a quick reference of what you will be doing as you progress through the completion of this project.

## Instructions

You will need to follow the instructions on the next three concepts to get the Chinook database up and running on your own machine, and check that it is set up correctly. There will be two parts to this project.

1. The first part is a series of questions that will assure you have mastered the main concepts taught throughout the SQL lessons. Though these questions will not be "graded" by a reviewer, they will help you self assess.

2. The second part is a presentation. Similar to the first project, there isn't a 'right answer' for the second portion of the project. You have the ability to be creative in the questions you ask. You will then write a SQL query to pull the data needed to successfully answer your question. Use the pulled data to build a visual (bar chart, histogram, or another plot) that answers your question. The essentials of your project submission are discussed in the next sections. In order to review your presentation, you will need to save your slides as a PDF.

## Set Up the Database

Here are the steps:

1. Open up DB Browser to SQLite
2. Click on Open Database
3. Navigate to the Chinook.db file (probably in your downloads)
4. Click on the Execute SQL
5. Start querying your data

**Start Querying Your Data**

The database Entity Relationship Diagram was provided in the previous concept, but you can also find it on the [Chinook database homepage](https://chinookdatabase.codeplex.com/).

Once it looks like you have it all set up, you can start querying your database! First, we could have a look at all the data from the Invoice table:

`SELECT * FROM Invoice;`

Your first query, AWESOME!

Now check out what's in the Employee table.

`SELECT * FROM Employee;`

Looks like you are ready to take on this PROJECT and the WORLD! Everything you have been studying is going to come in handy now!


#### Quiz

1. Which countries have the most Invoices?
Use the Invoice table to determine the countries that have the most invoices. Provide a table of BillingCountry and Invoices ordered by the number of invoices for each country. The country with the most invoices should appear first.

My solution

```
  SELECT BILLINGCOUNTRY,
  	COUNT(INVOICEID)
  FROM INVOICE
  GROUP BY 1
  ORDER BY 2 DESC
```

2. Which city has the best customers?
We would like to throw a promotional Music Festival in the city we made the most money. Write a query that returns the 1 city that has the highest sum of invoice totals. Return both the city name and the sum of all invoice totals.

My solution

```
  SELECT BILLINGCITY,
  	SUM(TOTAL)
  FROM INVOICE
  GROUP BY 1
  ORDER BY 2 DESC
```

3. Who is the best customer?
The customer who has spent the most money will be declared the best customer. Build a query that returns the person who has spent the most money. I found the solution by linking the following three: Invoice, InvoiceLine, and Customer tables to retrieve this information, but you can probably do it with fewer!

My solution

```
  SELECT C.CUSTOMERID,
  	SUM(I.TOTAL)
  FROM CUSTOMER C
  JOIN INVOICE I ON C.CUSTOMERID = I.CUSTOMERID
  GROUP BY 1
  ORDER BY 2 DESC
```

4. Use your query to return the email, first name, last name, and Genre of all Rock Music listeners. Return your list ordered alphabetically by email address starting with A.

I chose to link information from the Customer, Invoice, InvoiceLine, Track, and Genre tables, but you may be able to find another way to get at the information.

My solution


```
  SELECT DISTINCT C.EMAIL,
  	C.FIRSTNAME,
  	C.LASTNAME,
  	G.NAME
  FROM CUSTOMER C
  JOIN INVOICE I ON C.CUSTOMERID = I.CUSTOMERID
  JOIN INVOICELINE IL ON IL.INVOICELINEID = I.INVOICEID
  JOIN TRACK T ON IL.TRACKID = T.TRACKID
  JOIN GENRE G ON T.GENREID = G.GENREID
  WHERE G.NAME = 'Rock'
  ORDER BY 1;
```

5. Who is writing the rock music?
Now that we know that our customers love rock music, we can decide which musicians to invite to play at the concert.

Let's invite the artists who have written the most rock music in our dataset. Write a query that returns the Artist name and total track count of the top 10 rock bands.

You will need to use the Genre, Track , Album, and Artist tables.

My solution

```
  SELECT AR.NAME,
  	COUNT(T.NAME)
  FROM TRACK T
  JOIN GENRE G ON T.GENREID = G.GENREID
  JOIN ALBUM AL ON AL.ALBUMID = T.ALBUMID
  JOIN ARTIST AR ON AR.ARTISTID = AL.ARTISTID
  WHERE G.NAME = 'Rock'
  GROUP BY 1
  ORDER BY 2 DESC
```

6. First, find which artist has earned the most according to the InvoiceLines?

Now use this artist to find which customer spent the most on this artist.

For this query, you will need to use the Invoice, InvoiceLine, Track, Customer, Album, and Artist tables.

Notice, this one is tricky because the Total spent in the Invoice table might not be on a single product, so you need to use the InvoiceLine table to find out how many of each product was purchased, and then multiply this by the price for each artist.

```
  SELECT 	Y.NAME AS ARTIST_NAME,
          SUM(TOTAL) AS GRAND_TOTAL
  FROM
          (SELECT		X.NAME,
                    X.UNITPRICE * X.QUANTITY AS TOTAL
           FROM
                   (SELECT   AR.NAME,
                             IL.UNITPRICE,
                             IL.QUANTITY
                    FROM ARTIST AR
                    JOIN ALBUM AL ON AR.ARTISTID = AL.ARTISTID
                    JOIN TRACK T ON AL.ALBUMID = T.ALBUMID
                    JOIN INVOICELINE IL ON T.TRACKID = IL.TRACKID
                    ORDER BY 1 DESC) AS X) AS Y
  GROUP BY 1
  ORDER BY 2 DESC
  LIMIT 1
```

**Solution Continued with top Purchaser**

Then, the top purchasers are shown in the table below. The customer with the highest total invoice amount is customer 55, Mark Taylor.

```
  SELECT   C.CUSTOMERID,
  	       C.FIRSTNAME || ' ' || C.LASTNAME AS CUSTOMER,
  	       AR.NAME AS ARTIST,
  	       SUM(IL.UNITPRICE) AS PRICE
  FROM CUSTOMER C
  JOIN INVOICE I ON C.CUSTOMERID = I.CUSTOMERID
  JOIN INVOICELINE IL ON I.INVOICEID = IL.INVOICEID
  JOIN TRACK T ON IL.TRACKID = T.TRACKID
  JOIN ALBUM AL ON T.ALBUMID = AL.ALBUMID
  JOIN ARTIST AR ON AL.ARTISTID = AR.ARTISTID
  WHERE AR.NAME = 'Iron Maiden'
  GROUP BY 1,2,3
  ORDER BY 4 DESC
  LIMIT 5

```

### Answering some of my own questions:

1. Count how many songs base on genre does customer 12 bought
```
  SELECT DISTINCT G.NAME GENRE,
  	COUNT(T.NAME)
  FROM CUSTOMER C
  JOIN INVOICE I ON I.CUSTOMERID = C.CUSTOMERID
  JOIN INVOICELINE IL ON IL.INVOICEID = I.INVOICEID
  JOIN TRACK T ON T.TRACKID = IL.TRACKID
  JOIN GENRE G ON G.GENREID = T.GENREID
  WHERE C.CUSTOMERID = 12
  GROUP BY 1
  ORDER BY 1
```

2. How much did customer 13 spent across genres?

```
  SELECT C.LASTNAME,
  C.FIRSTNAME,
  G.NAME GENRE,
  SUM(IL.UNITPRICE)
  FROM CUSTOMER C
  JOIN INVOICE I ON I.CUSTOMERID = C.CUSTOMERID
  JOIN INVOICELINE IL ON IL.INVOICEID = I.INVOICEID
  JOIN TRACK T ON T.TRACKID = IL.TRACKID
  JOIN GENRE G ON G.GENREID = T.GENREID
  WHERE C.CUSTOMERID = 13
  GROUP BY 1,2,3
  ORDER BY 1
```

3. How much did each customers spent per genre

```
  SELECT C.CUSTOMERID,
  C.LASTNAME,
  C.FIRSTNAME,
  G.NAME GENRE,
  SUM(IL.UNITPRICE)
  FROM CUSTOMER C
  JOIN INVOICE I ON I.CUSTOMERID = C.CUSTOMERID
  JOIN INVOICELINE IL ON IL.INVOICEID = I.INVOICEID
  JOIN TRACK T ON T.TRACKID = IL.TRACKID
  JOIN GENRE G ON G.GENREID = T.GENREID
  GROUP BY 1,2,3,4
  ORDER BY 1
```

4. How much was spent over all on each genre?

```
  SELECT G.NAME GENRE,
  	SUM(IL.UNITPRICE)
  FROM CUSTOMER C
  JOIN INVOICE I ON I.CUSTOMERID = C.CUSTOMERID
  JOIN INVOICELINE IL ON IL.INVOICEID = I.INVOICEID
  JOIN TRACK T ON T.TRACKID = IL.TRACKID
  JOIN GENRE G ON G.GENREID = T.GENREID
  GROUP BY 1
  ORDER BY 2 DESC
```

5. How much did Americans spent total?

```
  SELECT *
  FROM
  				(SELECT C.CUSTOMERID,
  						C.FIRSTNAME || ' ' || C.LASTNAME AS CUSTOMER,
  						SUM(IL.UNITPRICE) AS TOTAL
  					FROM CUSTOMER C
  					JOIN INVOICE I ON I.CUSTOMERID = C.CUSTOMERID
  					JOIN INVOICELINE IL ON IL.INVOICEID = I.INVOICEID
  					JOIN TRACK T ON T.TRACKID = IL.TRACKID
  					JOIN GENRE G ON G.GENREID = T.GENREID
  					WHERE COUNTRY = 'USA'
  					GROUP BY 1,2
  					ORDER BY 3 DESC) AS X
```

6. How many users per country?
```
  SELECT C.COUNTRY,
  	COUNT(C.CUSTOMERID)
  FROM CUSTOMER C
  GROUP BY 1
  ORDER BY 1
```

7. How much did users spent total per country?
```
  SELECT C.COUNTRY,
  	C.FIRSTNAME || ' ' || C.LASTNAME AS CUSTOMER,
  	SUM(I.TOTAL)
  FROM INVOICE I
  JOIN CUSTOMER C ON C.CUSTOMERID = I.CUSTOMERID
  GROUP BY 1,2
  ORDER BY 3 DESC
```
8. how many songs per genre the music store has?

```
  SELECT G.NAME,
  	COUNT(T.TRACKID)
  FROM TRACK T
  JOIN GENRE G ON T.GENREID = G.GENREID
  GROUP BY 1
  ORDER BY 2 DESC
```

### Project Question:

--What percentage of total sales are the units sold?

```


SELECT	  *,
					(
					SELECT PRINTF("%.2f",(PRINTF("%.2f",sale_per_genre*100))/SUM(quantity))
					FROM invoiceline
					)  AS percent
FROM
	(
	SELECT g.name AS genre, COUNT(*) AS  sale_per_genre
	FROM Track t
	JOIN Genre g ON T.genreId = G.genreId
	Join InvoiceLine il ON il.TrackId = t.TrackId
	GROUP BY 1
	ORDER BY 2 DESC
	)
```
