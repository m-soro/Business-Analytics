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
