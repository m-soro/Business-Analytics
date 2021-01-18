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

## Subquery Quiz

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

[Video Solution Walkthrough](https://youtu.be/Y6S3S0LsMrw)

1. Provide the **name** of the **sales_rep** in each **region** with the largest amount of **total_amt_usd** sales.

First find the total amount usd for each sales rep and the region they are located.

>This will be t1 and will be nested inside t2

```
  SELECT r.name region, s.name rep, SUM(o.total_amt_usd) total_amt
  FROM sales_reps s
  JOIN region r
  ON s.region_id = r.id
  JOIN accounts a
  ON s.id = a.sales_rep_id
  JOIN orders o
  ON a.id = o.account_id
  GROUP BY 1, 2
```

Next pull the max for each region and use this to pull those rows in the final result.

>This is t2, will be used to pull the max in each region

```
  SELECT region, MAX(total_amt) total_amt
      FROM (SELECT r.name region, s.name rep, SUM(o.total_amt_usd) total_amt
              FROM sales_reps s
              JOIN region r
              ON s.region_id = r.id
              JOIN accounts a
              ON s.id = a.sales_rep_id
              JOIN orders o
              ON a.id = o.account_id
      GROUP BY 1, 2) t1
      GROUP BY 1
```

Essentially, this is a **JOIN** of these two tables, where the **region** and **amount** match.


```
  SELECT t3.rep, t3.region, t3.total_amt
  FROM (
        SELECT region, MAX(total_amt) total_amt
        FROM (
                SELECT r.name region, s.name rep, SUM(o.total_amt_usd)     total_amt
                FROM sales_reps s
                JOIN region r
                ON s.region_id = r.id
                JOIN accounts a
                ON s.id = a.sales_rep_id
                JOIN orders o
                ON a.id = o.account_id
                GROUP BY 1, 2
             ) t1
        GROUP BY 1
        ) t2
  JOIN (
          SELECT r.name region, s.name rep, SUM(o.total_amt_usd) total_amt
          FROM sales_reps s
          JOIN region r
          ON s.region_id = r.id
          JOIN accounts a
          ON s.id = a.sales_rep_id
          JOIN orders o
          ON a.id = o.account_id
          GROUP BY 1,2
        ) t3      
  ON t2.region = t3.region AND t2.total_amt = t3.total_amt
```

2. For the region with the largest (sum) of sales **total_amt_usd**, how many **total** (count) orders were placed?

The first query I wrote was to pull the total_amt_usd for each region.

```
  SELECT r.name region, SUM(o.total_amt_usd) total_amt
  FROM region r
  JOIN sales_reps s
    ON s.region_id = r.id
  JOIN accounts a
    ON a.sales_rep_id = s.id
  JOIN orders o
    ON o.account_id = a.id
  GROUP BY 1
  ORDER BY 2 DESC
  LIMIT 1
```
Then we just want the region with the max amount from this table. There are two ways I considered getting this amount. One was to pull the max using a subquery. Another way is to order descending and just pull the top value.

```
  SELECT MAX(total_amt)
  FROM (
        SELECT r.name region_name, SUM(o.total_amt_usd) total_amt
        FROM sales_reps s
        JOIN accounts a
        ON a.sales_rep_id = s.id
        JOIN orders o
        ON o.account_id = a.id
        JOIN region r
        ON r.id = s.region_id
        GROUP BY r.name
        ) sub;
```
Finally, we want to pull the total orders for the region with this amount:

>Just pull the total amount. It must return a single column!

```
  SELECT r.name region, COUNT(o.total) order_count
  FROM region r
  JOIN sales_reps s
    ON s.region_id = r.id
  JOIN accounts a
    ON a.sales_rep_id = s.id
  JOIN orders o
    ON o.account_id = a.id
  GROUP BY 1
  HAVING SUM(o.total_amt_usd) = (
                                  SELECT MAX(total_amt)
                                  FROM (
                                        SELECT r.name region, SUM(o.total_amt_usd) total_amt
                                        FROM region r
                                        JOIN sales_reps s
                                        ON s.region_id = r.id
                                        JOIN accounts a
                                          ON a.sales_rep_id = s.id
                                        JOIN orders o
                                          ON o.account_id = a.id
                                        GROUP BY 1
                                        ORDER BY 1 DESC
                                        ) sub
                                  )      
```

3. **How many accounts** had more **total** purchases than the account **name** which has bought the most **standard_qty** paper throughout their lifetime as a customer?



First, we want to find the account that had the most **standard_qty** paper. The query here pulls that account, as well as the total amount:

```
  SELECT a.name account, SUM(o.standard_qty) standard_max, SUM(o.total) total
  FROM accounts a
  JOIN orders o
    ON a.id = o.account_id
  GROUP BY 1
  ORDER BY 2 DESC
  LIMIT 1
```
>Returns: Core-Mark Holding	41617	44750

This is now a list of all the accounts with more total orders. We can get the count with just another simple subquery.

```
  SELECT COUNT(*)
  FROM (
          SELECT a.name, SUM(o.total) sum_total
          FROM accounts a
          JOIN orders o
          ON o.account_id = a.id
          GROUP BY 1
          ORDER BY 2 DESC
        ) sub
    WHERE sum_total > (
                        SELECT total
                        FROM (
                              SELECT a.name account, SUM(o.standard_qty) standard_max, SUM(o.total) total
                              FROM accounts a
                              JOIN orders o
                              ON a.id = o.account_id
                              GROUP BY 1
                              ORDER BY 2 DESC
                              LIMIT 1     
                              ) sub
                        )
```

My mistake here was that I joined the first query or the sub query with `o.total`. Make sure I joined tables correctly next time!

4. For the customer that spent the most (in total over their lifetime as a customer) **total_amt_usd**, how many **web_events** did they have for each channel?

Here, we first want to pull the customer with the most spent in lifetime value.

```
  SELECT a.name account, SUM(o.total_amt_usd)
    FROM accounts a
    JOIN orders o
     ON a.id = o.account_id
    GROUP BY 1
    ORDER BY 2 DESC
    LIMIT 1
```

Udacity's answer:

Now, we want to look at the number of events on each channel this company had, which we can match with just the id.

```
  SELECT a.name, w.channel, COUNT(*)
  FROM accounts a
  JOIN web_events w
  ON a.id = w.account_id AND a.id =  (SELECT id
                       FROM (SELECT a.id, a.name, SUM(o.total_amt_usd) tot_spent
                             FROM orders o
                             JOIN accounts a
                             ON a.id = o.account_id
                             GROUP BY a.id, a.name
                             ORDER BY 3 DESC
                             LIMIT 1) inner_table)
  GROUP BY 1, 2
  ORDER BY 3 DESC;
```
I added an ORDER BY for no real reason, and the account name to assure I was only pulling from one account.

My answer:

```
  SELECT w.channel, COUNT(w.channel) count
  FROM web_events w
  JOIN accounts a
  ON w.account_id = a.id
  WHERE a.name = (SELECT account
                  FROM
                        (SELECT a.name account, SUM(o.total_amt_usd)
                          FROM accounts a
                          JOIN orders o
                           ON a.id = o.account_id
                          GROUP BY 1
                          ORDER BY 2 DESC
                          LIMIT 1
                          ) sub )
  GROUP BY 1
  ORDER BY 2 DESC
```

5. What is the lifetime average amount spent in terms of **total_amt_usd** for the top 10 total spending **accounts**?

My Answer:

Start by finding who spent the most - top 10

```
  (SELECT a.name account, SUM(o.total_amt_usd)
    FROM accounts a
    JOIN orders o
     ON a.id = o.account_id
    GROUP BY 1
    ORDER BY 2 DESC
    LIMIT 10) top_ten
```
Then average this ten companies' spending

```
  SELECT a.name account, AVG(o.total_amt_usd)
  FROM accounts a
  JOIN orders o
    ON a.id = o.account_id
  WHERE a.name IN
  (
    SELECT account FROM
          ( SELECT a.name account,SUM(o.total_amt_usd)
        		FROM accounts a
      			JOIN orders o
       			ON a.id = o.account_id
            GROUP BY 1
      			ORDER BY 2 DESC
      			LIMIT 10
           ) sub
  )
  GROUP BY 1
```

My answer is wrong. I mis understood the question!

**Udacity's**

First, we just want to find the top 10 accounts in terms of highest total_amt_usd.

```
  SELECT a.id, a.name, SUM(o.total_amt_usd) tot_spent
  FROM orders o
  JOIN accounts a
  ON a.id = o.account_id
  GROUP BY a.id, a.name
  ORDER BY 3 DESC
  LIMIT 10;
```
Now, we just want the average of these 10 amounts.

```
  SELECT AVG(tot_spent)
  FROM (SELECT a.id, a.name, SUM(o.total_amt_usd) tot_spent
        FROM orders o
        JOIN accounts a
        ON a.id = o.account_id
        GROUP BY a.id, a.name
        ORDER BY 3 DESC
        LIMIT 10) temp;
```

6. What is the lifetime average amount spent in terms of **total_amt_usd**, including only the companies that spent more per order, on average, than the average of all orders.

My Answer is wrong, I mis understood the question.
This gives the average of all the companies that spent more then the average amount across the board.

```
  SELECT a.name, SUM(o.total_amt_usd) amt_spent
  FROM accounts a
  JOIN orders o
    ON a.id = o.account_id
  GROUP BY 1
  HAVING SUM(o.total_amt_usd) > (
                                  SELECT AVG(amt_spent)
                                  FROM (
                                        SELECT a.name, SUM(o.total_amt_usd) amt_spent
                                        FROM accounts a
                                        JOIN orders o
                                          ON a.id = o.account_id
                                        GROUP BY 1
                                        ) sub
                                  )
  ORDER BY 2 DESC
```

Udacity's answer:

First, we want to pull the average of all accounts in terms of **total_amt_usd**:

```
  SELECT AVG(o.total_amt_usd) avg_all
  FROM orders o
```
Then, we want to only pull the accounts with more than this average amount.

```
  SELECT o.account_id, AVG(o.total_amt_usd)
  FROM orders o
  GROUP BY 1
  HAVING AVG(o.total_amt_usd) > (SELECT AVG(o.total_amt_usd) avg_all
                                 FROM orders o);
```

Finally, we just want the average of these values.
```
  SELECT AVG(avg_amt)
  FROM (SELECT o.account_id, AVG(o.total_amt_usd) avg_amt
      FROM orders o
      GROUP BY 1
      HAVING AVG(o.total_amt_usd) > (SELECT AVG(o.total_amt_usd) avg_all
                                     FROM orders o)) temp_table;
```    

## WITH

[Introduction](https://www.youtube.com/watch?v=qtEKO7B8bXQ)      

The **WITH** statement is often called a **Common Table Expression** or **CTE**. Though these expressions serve the exact same purpose as subqueries, they are more common in practice, as they tend to be cleaner for a future reader to follow the logic.

In the next concept, we will walk through this example a bit more slowly to make sure you have all the similarities between subqueries and these expressions down for you to use in practice! If you are already feeling comfortable skip ahead to practice the quiz section.

[Explanation- how to](https://www.youtube.com/watch?v=IszTmDKyKHI)   

**Your First WITH (CTE)**
The same question as you saw in your first subquery is provided here along with the solution.

**QUESTION**: You need to find the average number of events for each channel per day.

**SOLUTION**:           

```
  SELECT channel, AVG(events) AS average_events
  FROM (
        SELECT DATE_TRUNC('day',occurred_at) AS day, channel, COUNT(*) as events
        FROM web_events
        GROUP BY 1,2
        ) sub
  GROUP BY channel
  ORDER BY 2 DESC;
```           
Let's try this again using a **WITH** statement.

Notice, you can pull the inner query:

```
  SELECT DATE_TRUNC('day',occurred_at) AS day, channel, COUNT(*) as events
  FROM web_events
  GROUP BY 1,2
```
This is the part we put in the **WITH** statement. Notice, we are aliasing the table as `events` below:

```
  WITH events AS (
                  SELECT DATE_TRUNC('day',occurred_at) AS day, channel, COUNT(*) as events
                  FROM web_events
                  GROUP BY 1,2
                  )
```

Now, we can use this newly created `events` table as if it is any other table in our database:

```
  WITH events AS (
                  SELECT DATE_TRUNC('day',occurred_at) AS day, channel, COUNT(*) as events
                  FROM web_events
                  GROUP BY 1,2
                  )

  SELECT channel, AVG(events) AS average_events
  FROM events
  GROUP BY channel
  ORDER BY 2 DESC;
```

For the above example, we don't need anymore than the one additional table, but imagine we needed to create a second table to pull from. We can create an additional table to pull from in the following way:

```
  WITH table1 AS (
            SELECT *
            FROM web_events),

       table2 AS (
            SELECT *
            FROM accounts)


  SELECT *
  FROM table1
  JOIN table2
  ON table1.account_id = table2.id;
```

You can add more and more tables using the **WITH** statement in the same way. The quiz at the bottom will assure you are catching all of the necessary components of these new queries.

Important points:

![image](./Misc/002.png)

## WITH Quizzes

Essentially a **WITH** statement performs the same task as a **Subquery**. Therefore, you can write any of the queries we worked with in the "Subquery Mania" using a **WITH**. That's what you'll do here. Try to perform each of the earlier queries again, but using a **WITH** instead of a subquery.

1. Provide the **name** of the **sales_rep** in each region with the largest amount of **total_amt_usd** sales.


2. For the region with the largest sales **total_amt_usd**, how many **total** orders were placed?


3. **How many accounts** had more **total** purchases than the account **name** which has bought the most **standard_qty** paper throughout their lifetime as a customer?


4. For the customer that spent the most (in total over their lifetime as a customer) **total_amt_usd**, how many **web_events** did they have for each channel?

```
with t1 as
(
   select
      a.name account,
      sum(o.total_amt_usd)
   from
      orders o
      join
         accounts a
         on o.account_id = a.id
   group by
      1
   order by
      2 desc limit 1
)
select
   w.channel channel,
   count(*) event_count
from
   web_events w
   join
      accounts a
      on w.account_id = a.id
where
   a.name =
   (
      select
         t1.account
      from
         t1
   )
group by
   1
order by
   2 desc
```


5. What is the lifetime average amount spent in terms of **total_amt_usd** for the top 10 total spending **accounts**?

```
WITH top_ten AS
                (
                  SELECT a.name account, SUM(total_amt_usd) total
                  FROM orders o
                  JOIN accounts a
                  ON o.account_id = a.id
                  GROUP BY 1
                  ORDER BY 2 DESC
                  LIMIT 10
                )
SELECT AVG(total)
FROM top_ten
```


6. What is the lifetime average amount spent in terms of **total_amt_usd**, including only the companies that spent more per order, on average, than the average of all orders.

```
  WITH avg_all AS
  (
    SELECT AVG(total_amt_usd)
    FROM orders
  ),

  greater_than_avg_all AS (
                            SELECT a.name account,
                            AVG(o.total_amt_usd) average
                            FROM orders o
                            JOIN accounts a
                            ON a.id = o.account_id
                            GROUP BY 1
                            HAVING AVG(o.total_amt_usd) > (
                                                            SELECT *
                                                            FROM avg_all
                                                          )
                            ORDER BY 2 DESC
                          )

  SELECT AVG(average)
  FROM greater_than_avg_all
```

###Recap
This lesson was the first of the more advanced sequence in writing SQL. Arguably, the advanced features of **Subqueries** and **CTEs** are the most widely used in an analytics role within a company. Being able to break a problem down into the necessary tables and finding a solution using the resulting table is very useful in practice.

If you didn't get the solutions to these queries on the first pass, don't be afraid to come back another time and give them another try. Additionally, you might try coming up with some questions of your own to see if you can find the solution.

The remaining portions of this course may be key to certain analytics roles, but you have now covered all of the main SQL topics you are likely to use on a day to day basis.
