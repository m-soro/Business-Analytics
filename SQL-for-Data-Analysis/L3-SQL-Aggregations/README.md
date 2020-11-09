## [Introduction to Aggregation](https://www.youtube.com/watch?v=5vRf_Ntoxfw) :tv:

In the following concepts you will be learning in detail about each of the aggregate functions mentioned as well as some additional aggregate functions that are used in SQL all the time. Let's get started!

#### [Introduction to NULLs](https://www.youtube.com/watch?v=WYUkLKn6XCw) :tv:

**NULLs** are a datatype that specifies where no data exists in SQL. They are often ignored in our aggregation functions, which you will get a first look at in the next concept using **COUNT**.

### [NULLs and Aggregation](https://www.youtube.com/watch?v=RgTcYwKqtYI) :tv:

Notice that **NULLs** are different than a zero - they are cells where data does not exist.

When identifying NULLs in a WHERE clause, we write **IS NULL** or **IS NOT NULL**. We don't use =, because **NULL isn't considered a value in SQL**. Rather, it is a property of the data.

**NULLs - Expert Tip**

There are two common ways in which you are likely to encounter NULLs:

1. **NULLs** frequently occur when performing a **LEFT or RIGHT JOIN**. You saw in the last lesson - when some rows in the left table of a left join are not matched with rows in the right table, those rows will contain some NULL values in the result set.

2. **NULLs** can also occur from simply missing data in our database.

### [COUNT](https://www.youtube.com/watch?v=b4FCWAEGmLg) :tv:

COUNT the Number of Rows in a Table
Try your hand at finding the number of rows in each table. Here is an example of finding all the rows in the accounts table.
```
  SELECT COUNT(*)
  FROM accounts;
```
But we could have just as easily chosen a column to drop into the aggregation function:
```
  SELECT COUNT(accounts.id)
  FROM accounts;
```

#### [COUNT & NULLs](https://www.youtube.com/watch?v=ngxgqfFFFLQ) :tv:

Notice that COUNT does not consider rows that have NULL values. Therefore, this can be useful for quickly identifying which rows have missing data. You will learn **GROUP BY** in an upcoming concept, and then each of these aggregators will become much more useful.

#### [SUM](https://www.youtube.com/watch?v=0zUP14PeiXk) :tv:

Unlike COUNT, you can only use **SUM on numeric columns**. However, SUM will ignore NULL values, as do the other aggregation functions you will see in the upcoming lessons.

**Aggregation Reminder**
An important thing to remember: **aggregators only aggregate vertically - the values of a column**. If you want to perform a calculation across rows, you would do this with simple arithmetic.

We saw this in the first lesson if you need a refresher, but the quiz in the next concept should assure you still remember how to aggregate across rows.

#### Exercises:

1. Find the total amount of poster_qty paper ordered in the orders table.
```
  SELECT SUM(poster_qty) poster_total
  FROM orders;
```
2. Find the total amount of standard_qty paper ordered in the orders table.
```
  SELECT SUM(standard_qty) standard_total
  FROM orders;
```
3. Find the total dollar amount of sales using the total_amt_usd in the orders table.
```
  SELECT SUM(total_amt_usd) total_sales
  FROM orders;
```
4. Find the total amount for each individual order that was spent on standard and gloss paper in the orders table. This should give a dollar amount for each order in the table.
```
  SELECT standard_amt_usd + gloss_amt_usd AS total_standard_gloss
  FROM orders;
```

5. Find the standard_amt_usd per unit of standard_qty paper. Your solution should use both an aggregation and a mathematical operator.
```
  SELECT	SUM(standard_amt_usd) standard_amt_total,
  		    SUM(standard_qty) standard_qty_total,
  		    SUM(standard_amt_usd)/SUM(standard_qty) per_unit
  FROM orders;
```
### [MIN & MAX](https://www.youtube.com/watch?v=1ewVsgWUih8) :tv:

Notice that here we were simultaneously obtaining the MIN and MAX number of orders of each paper type. However, you could run each individually.

Notice that **MIN** and **MAX** are aggregators that again **ignore NULL values**. Check the expert tip below for a cool trick with MAX & MIN.

**Expert Tip**

Functionally, **MIN** and **MAX** are similar to **COUNT** in that they can be **used** on **non-numerical columns**. Depending on the column type, **MIN** will return the **lowest number**, **earliest date**, or **non-numerical value as early in the alphabet as possible**. As you might suspect, **MAX** does the **opposite**—it **returns** the **highest number**, the **latest date**, or the **non-numerical value closest alphabetically to “Z.”**

### [AVG](https://www.youtube.com/watch?v=diqCDztOL64) :tv:

Similar to other software **AVG** returns the mean of the data - that is the sum of all of the values in the column divided by the number of values in a column. This aggregate function again **ignores the NULL** values in both the numerator and the denominator.

If you want to **count NULLs as zero**, you will need to use **SUM** and **COUNT**. However, this is probably not a good idea if the NULL values truly just represent unknown values for a cell.

**MEDIAN - Expert Tip**

One quick note that a median might be a more appropriate measure of center for this data, but finding the median happens to be a pretty difficult thing to get using SQL alone — **so difficult** that finding a median is occasionally asked as an **interview question**.

#### Exercises:

1. When was the earliest order ever placed? You only need to return the date.
```
  SELECT MIN(occurred_at) earliest_order
  FROM orders;
```

2. Try performing the same query as in question 1 without using an aggregation function.
```
  SELECT occurred_at earliest_order
  FROM orders
  ORDER BY occurred_at
  LIMIT 1;
```
3. When did the most recent (latest) web_event occur?
```
  SELECT MAX(occurred_at) latest_order
  FROM orders;
```
4. Try to perform the result of the previous query without using an aggregation function.
```
  SELECT occurred_at latest_order
  FROM orders
  ORDER BY occurred_at DESC
  LIMIT 1;
```
5. Find the mean (AVERAGE) amount spent per order on each paper type, as well as the mean amount of each paper type purchased per order. Your final answer should have 6 values - one for each paper type for the average number of sales, as well as the average amount.
```
  SELECT	AVG(standard_qty) avg_qty_standard,
  		    AVG(poster_qty) avg_qty_poster,
          AVG(gloss_qty) avg_qty_glossy,
          AVG(standard_amt_usd) avg_usd_standard,
          AVG(poster_amt_usd) avg_usd_poster,
          AVG(gloss_amt_usd) avg_usd_gloss
  FROM orders
```

6. Via the video, you might be interested in how to calculate the MEDIAN. Though this is more advanced than what we have covered so far try finding - what is the MEDIAN total_usd spent on all orders?
```
  SELECT *
  FROM (SELECT total_amt_usd
        FROM orders
        ORDER BY total_amt_usd
        LIMIT 3457) AS Table1
  ORDER BY total_amt_usd DESC
  LIMIT 2;
```
Since there are 6912 orders - we want the average of the 3457 and 3456 order amounts when ordered. This is the average of 2483.16 and 2482.55. This gives the median of 2482.855. This obviously isn't an ideal way to compute. If we obtain new orders, we would have to change the limit. SQL didn't even calculate the median for us. The above used a SUBQUERY, but you could use any method to find the two necessary values, and then you just need the average of them.

### [GROUP BY](https://www.youtube.com/watch?v=9vb67TF4WV0) :tv:


**The key takeaways here**:

**GROUP BY** can be used to **aggregate data within subsets of the data**. For example, grouping for different accounts, different regions, or different sales representatives.
**
Any column in the **SELECT** statement that **is not within an aggregator** must be in the **GROUP BY** clause.

The **GROUP BY** always goes **between WHERE** and **ORDER BY**.

ORDER BY works like SORT in spreadsheet software.

**GROUP BY - Expert Tip**

Before we dive deeper into aggregations using GROUP BY statements, it is worth noting that SQL evaluates the **aggregations before the LIMIT clause**. If you don’t group by any columns, you’ll get a 1-row result—no problem there. If you group by a column with enough unique values that it exceeds the LIMIT number, the aggregates will be calculated, and then some rows will simply be omitted from the results.

This is actually a nice way to do things because you know you’re going to get the correct aggregates. If SQL cuts the table down to 100 rows, then performed the aggregations, your results would be substantially different. The above query’s results exceed 100 rows, so it’s a perfect example. In the next concept, use the SQL environment to try removing the LIMIT and running it again to see what changes.

#### GROUP BY Note

Now that you have been introduced to JOINs, GROUP BY, and aggregate functions, the real power of SQL starts to come to life. Try some of the below to put your skills to the test!

#### Exercises: GROUP BY
Use the SQL environment below to assist with answering the following questions. Whether you get stuck or you just want to double check your solutions, my answers can be found at the top of the next concept.

One part that can be difficult to recognize is when it might be easiest to use an aggregate or one of the other SQL functionalities. Try some of the below to see if you can differentiate to find the easiest solution.

1. Which account (by name) placed the earliest order? Your solution should have the account name and the date of the order.
```
  SELECT a.name acct_name, o.occurred_at date
  FROM accounts a
  JOIN orders o
  ON a.id = o.account_id
  ORDER BY o.occurred_at
  LIMIT 1;
```
2. Find the total sales in usd for each account. You should include two columns - the total sales for each company's orders in usd and the company name.


3. Via what channel did the most recent (latest) web_event occur, which account was associated with this web_event? Your query should return only three values - the date, channel, and account name.

4. Find the total number of times each type of channel from the web_events was used. Your final table should have two columns - the channel and the number of times the channel was used.

5. Who was the primary contact associated with the earliest web_event?

6. What was the smallest order placed by each account in terms of total usd. Provide only two columns - the account name and the total usd. Order from smallest dollar amounts to largest.

7. Find the number of sales reps in each region. Your final table should have two columns - the region and the number of sales_reps. Order from fewest reps to most reps.
