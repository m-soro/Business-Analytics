# [Introduction](https://www.youtube.com/watch?v=2Y279421n3A)

1.Subqueries
2.Table Expressions
3.Persistent Derived Tables

Both **subqueries** and **table expressions** are methods for being able to write a query that creates a table, and then write a query that interacts with this newly created table. Sometimes the question you are trying to answer doesn't have an answer when working directly with existing tables in database.

However, if we were able to create new tables from the existing tables, we know we could query these new tables to answer our question. This is where the queries of this lesson come to the rescue.

If you can't yet think of a question that might require such a query, don't worry because you are about to see a whole bunch of them!

**[Subqueries](https://www.youtube.com/watch?v=s8ZJMj4gscY)**
Whenever we need to use existing tables to create a new table that we then want to query again, this is an indication that we will need to use some sort of subquery. In the next couple of concepts, we will walk through an example together. Then you will get some practice tackling some additional problems on your own.

[Example](https://www.youtube.com/watch?v=cTM1jPYXLoQ)

```
  SELECT
    channel,
    AVG(event_count)
  FROM (SELECT
    DATE_TRUNC('day', occurred_at) AS day,
    COUNT(\*) AS event_count,
    channel
  FROM web_events
  GROUP BY 1,
           3) sub
  GROUP BY 2
```

### Well Formatted Query

```
  SELECT *
  FROM (SELECT DATE_TRUNC('day',occurred_at) AS day,
                  channel, COUNT(*) as events
        FROM web_events
        GROUP BY 1,2
        ORDER BY 3 DESC) sub;
```
Additionally, if we have a **GROUP BY, ORDER BY, WHERE, HAVING**, or any other statement following our subquery, we would then indent it at the same level as our outer query.

The query below is similar to the above, but it is applying additional statements to the outer query, so you can see there are GROUP BY and ORDER BY statements used on the output are not tabbed. The inner query GROUP BY and ORDER BY statements are indented to match the inner table.

```
  SELECT *
  FROM (SELECT DATE_TRUNC('day',occurred_at) AS day,
                  channel, COUNT(*) as events
        FROM web_events
        GROUP BY 1,2
        ORDER BY 3 DESC) sub
  GROUP BY day, channel, events
  ORDER BY 2 DESC;
```

[Subqueries Part II](https://www.youtube.com/watch?v=jko-RrZd0R8)

In the first subquery you wrote, you created a table that you could then query again in the FROM statement. However, if you are **only returning** a **single value**, you might use that value in a logical statement like **WHERE**, **HAVING**, or even **SELECT** - the value could be nested within a **CASE** statement.

On the next concept, we will work through this example, and then you will get some practice on answering some questions on your own.

**Expert Tip**
Note that you should **not include** an **alias** when you write a **subquery** in a **conditional statement**. This is because the **subquery is treated** as an **individual value** (**or set of values in the IN case**) rather than as a table.

Also, notice the query here compared a single value. **If** we returned an **entire column** **IN** would need to be used to perform a logical argument. If we are returning an **entire table**, then we **must use an ALIAS for the table**, and perform additional logic on the entire table.

#### Quiz

1. What was the month/year combo for the first order placed?

My answer
```
  SELECT
    MIN(date_trunc('month', occurred_at))
  FROM orders
```

Udacity's
```
  SELECT DATE_TRUNC('month', MIN(occurred_at))
  FROM orders;
```

2. It is the average amount of standard/gloss/poster paper sold on the first month that any order was placed in the orders table (in terms of quantity)?.

My answer

```
  SELECT
    AVG(standard_qty)std,
    AVG(gloss_qty) gloss,
    AVG(poster_qty) poster
  FROM orders
  WHERE DATE_TRUNC('month', occurred_at) = (SELECT
    MIN(DATE_TRUNC('month', occurred_at))
  FROM orders)
```

Udacity's
```
  SELECT AVG(standard_qty) avg_std, AVG(gloss_qty) avg_gls, AVG(poster_qty) avg_pst
  FROM orders
  WHERE DATE_TRUNC('month', occurred_at) =
       (SELECT DATE_TRUNC('month', MIN(occurred_at)) FROM orders);

  SELECT SUM(total_amt_usd)
  FROM orders
  WHERE DATE_TRUNC('month', occurred_at) =
        (SELECT DATE_TRUNC('month', MIN(occurred_at)) FROM orders);
```

### More Subqueries Quizzes
![image](./Misc/001png)
Above is the ERD for the database again - it might come in handy as you tackle the quizzes below. You should write your solution as a subquery or subqueries, not by finding one solution and copying the output. The importance of this is that it allows your query to be dynamic in answering the question - even if the data changes, you still arrive at the right answer.

1. Provide the name of the sales_rep in each region with the largest amount of total_amt_usd sales.


2. For the region with the largest (sum) of sales total_amt_usd, how many total (count) orders were placed?


3. How many accounts had more total purchases than the account name which has bought the most standard_qty paper throughout their lifetime as a customer?


4. For the customer that spent the most (in total over their lifetime as a customer) total_amt_usd, how many web_events did they have for each channel?


5. What is the lifetime average amount spent in terms of total_amt_usd for the top 10 total spending accounts?


6. What is the lifetime average amount spent in terms of total_amt_usd, including only the companies that spent more per order, on average, than the average of all orders.
