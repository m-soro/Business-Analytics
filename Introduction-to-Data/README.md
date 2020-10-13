# Lesson 1: Descriptive Statistics

## Introduction to Data Types

### Quantitative and Categorical

**Quantitative** data takes on numeric values that allow us to perform mathematical operations (like the number of dogs).

**[Continuous vs. Discrete](https://www.youtube.com/watch?v=BzgZebZD9kk&feature=emb_logo)**

We can think of quantitative data as being either continuous or discrete.

**Continuous data can be split into smaller and smaller units, and still a smaller unit exists**. An example of this is the age of the dog - we can measure the units of the age in years, months, days, hours, seconds, but there are still smaller units that could be associated with the age.

**Discrete data only takes on countable values**. The number of dogs we interact with is an example of a discrete data type.

----

**Categorical** are used to label a group or set of items (like dog breeds - Collies, Labs, Poodles, etc.).

**[Categorical Ordinal vs. Categorical Nominal](https://www.youtube.com/watch?v=k5bLaPGY2Vw&feature=emb_logo)**
We can divide categorical data further into two types: Ordinal and Nominal.

**Categorical Ordinal** data take on a **ranked ordering** (like a ranked interaction on a scale from Very Poor to Very Good with the dogs).

**Categorical Nominal** data **do not have an order or ranking** (like the breeds of the dog).

----

### Recap

|   DATA TYPES  |                             |                                                       |
|:-------------:|:---------------------------:|:-----------------------------------------------------:|
| Quantitative: | Continuous                  | Discrete                                              |
|               | Height, Age, Income         | Pages in a Book, Trees in Yard, Dogs at a Coffee Shop |
|               |                             |                                                       |
| Categorical:  | Ordinal                     | Nominal                                               |
|               | Letter Grade, Survey Rating | Gender, Marital Status, Breakfast Items               |

**Quantitative vs. Categorical**

Some of these can be a bit tricky - notice even though zip codes are a number, they aren’t really a quantitative variable. If we add two zip codes together, we do not obtain any useful information from this new value. Therefore, this is a categorical variable.

***Height, Age, the Number of Pages in a Book and Annual Income all take on values that we can add, subtract and perform other operations with to gain useful insight. Hence, these are*** **quantitative**.

***Gender, Letter Grade, Breakfast Type, Marital Status, and Zip Code can be thought of as labels for a group of items or individuals. Hence, these are*** **categorical**.


**Continuous vs. Discrete**

To consider if we have continuous or discrete data, we should see if we can split our data into smaller and smaller units. Consider time - we could measure an event in years, months, days, hours, minutes, or seconds, and even at seconds we know there are smaller units we could measure time in. Therefore, we know this data type is continuous. Height, age, and income are all examples of continuous data. Alternatively, the number of pages in a book, dogs I count outside a coffee shop, or trees in a yard are discrete data. We would not want to split our dogs in half.

Continuous data types are those that can take on decimal values, where discrete data types are those that are countable.

**Ordinal vs. Nominal**

In looking at categorical variables, we found Gender, Marital Status, Zip Code and your Breakfast items are nominal variables where there is no order ranking associated with this type of data. Whether you ate cereal, toast, eggs, or only coffee for breakfast; there is no rank ordering associated with your breakfast.

Alternatively, the Letter Grade or Survey Ratings have a rank ordering associated with it, as ordinal data. If you receive an A, this is higher than an A-. An A- is ranked higher than a B+, and so on... Ordinal variables frequently occur on rating scales from very poor to very good. In many cases we turn these ordinal variables into numbers, as we can more easily analyze them, but more on this later!

**Final Words**

> In this section, we looked at the different data types we might work with in the world around us. When we work with data in the real world, it might not be very clean - sometimes there are typos or missing values. When this is the case, simply having some expertise regarding the data and knowing the data type can assist in our ability to ‘clean’ this data. Understanding data types can also assist in our ability to build visuals to best explain the data. But more on this very soon!


## Introduction to Summary Statistics

### Analyzing Quantitative Data

Four Aspects for Quantitative Data

There are four main aspects to analyzing Quantitative data.

1. [Measures of Center](#measures-of-center)
2. [Measures of Spread](#measures-of-spread)
3. The Shape of the data.
4. Outliers

**Analyzing Categorical Data**

Though not discussed in the video, analyzing categorical data has fewer parts to consider. Categorical data is analyzed usually by looking at the counts or proportion of individuals that fall into each group. For example if we were looking at the breeds of the dogs, we would care about how many dogs are of each breed, or what proportion of dogs are of each breed type.

## Measures of Center
There are three measures of center:

1. [The Mean](https://www.youtube.com/watch?v=1nzZxmJ8xvU&feature=emb_logo)
In this video, we focused on the calculation of the mean. The mean is ***often called the average*** or the expected value in mathematics. We calculate the mean by adding all of our values together, and dividing by the number of values in our dataset.

2. [The Median](https://www.youtube.com/watch?v=WlT3eeW0rb0&feature=emb_logo)
The median splits our data so that 50% of our values are lower and 50% are higher. We found in this video that how we calculate the median depends on if we have an even number of observations or an odd number of observations.

**Median for Odd Values**

If we have an odd number of observations, the median is simply the number in the direct middle. For example, if we have 7 observations, the median is the fourth value when our numbers are ordered from smallest to largest. If we have 9 observations, the median is the fifth value.

**Median for Even Values**

If we have an even number of observations, the median is the average of the two values in the middle. For example, if we have 8 observations, we average the fourth and fifth values together when our numbers are ordered from smallest to largest.

In order to compute the median we **MUST sort our values first**.

Whether we use the mean or median to describe a dataset is largely dependent on the shape of our dataset and if there are any outliers. We will talk about this in just a bit!

3. [The Mode](https://www.youtube.com/watch?v=NE81NZgECqg&feature=emb_logo)
The mode is the most frequently observed value in our dataset.

There might be multiple modes for a particular dataset, or no mode at all.

**No Mode**

If all observations in our dataset are observed with the same frequency, there is no mode. If we have the dataset:

1, 1, 2, 2, 3, 3, 4, 4

There is no mode, because all observations occur the same number of times.

**Many Modes**

If two (or more) numbers share the maximum value, then there is more than one mode. If we have the dataset:

1, 2, 3, 3, 3, 4, 5, 6, 6, 6, 7, 8, 9

There are two modes 3 and 6, because these values share the maximum frequencies at 3 times, while all other values only appear once.

### [What is Notation?](https://www.youtube.com/watch?v=MaHV5cKfcmE)

**Notation**

> Notation is a common language used to communicate mathematical ideas. Think of notation as a universal language used by academic and industry professionals to convey mathematical ideas.

You likely already know some notation. Plus, minus, multiply, division, and equal signs all have mathematical symbols that you are likely familiar with. Each of these symbols replaces an idea for how numbers interact with one another. In the coming concepts, you will be introduced to some additional ideas related to notation. Though you will not need to use notation to complete the project, it does have the following properties:

1. Understanding how to correctly use notation makes you seem really smart. Knowing how to read and write in notation is like learning a new language. A language that is used to convey ideas associated with mathematics.


2. It allows you to read documentation, and implement an idea to your own problem. Notation is used to convey how problems are solved all the time. One really popular mathematical algorithm that is used to solve some of the world's most difficult problems is known as Gradient Boosting. The way that it solves problems is explained here: https://en.wikipedia.org/wiki/Gradient_boosting. If you really want to understand how this algorithm works, you need to be able to read and understand notation.


3. It makes ideas that are hard to say in words easier to convey. Sometimes we just don't have the right words to say. For those situations, I prefer to use notation to convey the message. Similar to the way an emoji or meme might convey a feeling better than words, notation can convey an idea better than words. Usually those ideas are related to mathematics, but I am not here to stifle your creativity.

### [Random Variales](https://www.youtube.com/watch?v=8NxTW1u4s-Y)

**Example to Introduce Notation**

> There is a lot going on in this video - here is a recap of the big ideas.

**Rows and Columns**

If you aren't familiar with spreadsheets, this will be covered in detail in future lessons. Spreadsheets are a common way to hold data. They are composed of rows and columns. Rows run horizontally, while columns run vertically. Each column in a spreadsheet commonly holds a specific variable, while each row is commonly called an instance or individual.

The example used in the video is shown below.
![image](../Misc/001.png)

**Before Collecting Data**

Before collecting data, we usually start with a question, or many questions, that we would like to answer. The purpose of data is to help us in answering these questions.

**Random Variables**

A random variable is a placeholder for the possible values of some process (mostly... the term 'some process' is a bit ambiguous). As was stated before, notation is useful in that it helps us take complex ideas and simplify (often to a single letter or single symbol). We see random variables represented by **capital letters (X, Y, or Z are common ways to represent a random variable)**.

We might have the random variable X, which is a holder for the possible values of the amount of time someone spends on our site. Or the random variable Y, which is a holder for the possible values of whether or not an individual purchases a product.

X is 'a holder' of the values that could possibly occur for the amount of time spent on our website. Any number from 0 to infinity really.

### [Capital vs. Lower](https://www.youtube.com/watch?v=KFIt2OC3wCI)

**Capital vs. Lower Case Letters**

**Random variables are represented by capital letters. Once we observe an outcome of these random variables, we notate it as a lower case of the same letter**.

**Example 1**

For example, the amount of time someone spends on our site is a random variable (we are not sure what the outcome will be for any particular visitor), and we would notate this with X. Then when the first person visits the website, if they spend 5 minutes, we have now observed this outcome of our random variable. We would notate any outcome as a lowercase letter with a subscript associated with the order that we observed the outcome.

If 5 individuals visit our website, the first spends 10 minutes, the second spends 20 minutes, the third spends 45 mins, the fourth spends 12 minutes, and the fifth spends 8 minutes; we can notate this problem in the following way:

X is the amount of time an individual spends on the website.

![image](../Misc/026.png)

The capital **X** is associated with this idea of a random variable, while the observations of the random variable take on lowercase **x** values.

**Example 2**

Taking this one step further, we could ask:

What is the probability someone spends more than 20 minutes in our website?

In notation, we would write:

**P(X > 20)?**

Here P stands for probability, while the parentheses encompass the statement for which we would like to find the probability. Since X represents the amount of time spent on the website, this notation represents the probability the amount of time on the website is greater than 20.

We could find this in the above example by noticing that only one of the 5 observations exceeds 20. So, we would say there is a 1 (the 45) in 5 or 20% chance that an individual spends more than 20 minutes on our website (based on this dataset).

**Example 3**

If we asked: What is the probability of an individual spending 20 or more minutes on our website? We could notate this as:

**P(X \geq≥ 20)?**

We could then find this by noticing there are two out of the five individuals that spent 20 or more minutes on the website. So this probability is 2 out of 5 or 40%.

**Notation for Calculating the Mean**

We know that the mean is calculated as the sum of all our values divided by the number of values in our dataset.

In our current notation, adding all of our values together can be extremely tedious. If we want to add 3 values of some random variable together, we would use the notation:

​![image](../Misc/024.png)	 

If we want to add 6 values together, we would use the notation:

![image](../Misc/025.png)
​

To extend this to add one hundred, one thousand, or one million values would be ridiculous! How can we make this easier to communicate?!


### Aggregations

**An aggregation is a way to turn multiple numbers into fewer numbers (commonly one number)**.

[Summation](https://www.youtube.com/watch?v=ADx1x2ljFB4) is a common aggregation. The notation used to sum our values is a greek symbol called sigma Σ.

**Example 1**

Imagine we are looking at the amount of time individuals spend on our website. We collect data from nine individuals:

![image](../Misc/017.png)

If we want to sum the first three values together in our previous notation, we write:

![image](../Misc/018.png)

In our new notation, we can write:

![image](../Misc/019.png)
Notice, our notation starts at the first observation (i=1i=1) and ends at 3 (the number at the top of our summation).

So all of the following are equal to one another:

![image](../Misc/020.png)

**Example 2**

Now, imagine we want to sum the last three values together.

![image](../Misc/021.png)
​	 
In our new notation, we can write:

![image](../Misc/022.png)

Notice, our notation starts at the seventh observation (i=7i=7) and ends at 9 (the number at the top of our summation).

**Other Aggregations**

The **Σ** is used for aggregating using **summation**, but we might choose to aggregate in other ways. Summing is one of the most common ways to need to aggregate. However, we might need to aggregate in alternative ways. If we wanted to multiply all of our values together we would use a **Π** , capital Greek letter pi. The way we **aggregate continuous values** is with something known as **integration (a common technique in calculus), which uses the following symbol ∫** which is just a long s. We will not be using integrals or products for quizzes in this class, but you may see them in the future!

![image](../Misc/002.png)

![image](../Misc/003.png)

## [Notation for the Mean](https://www.youtube.com/watch?v=3EF15AoRxyM)
Pay attention to 1:15

**Final Steps for Calculating the Mean**

To finalize our calculation of the mean, we introduce n as the total number of values in our dataset. We can use this notation both at the top of our summation, as well as for the value that we divide by when calculating the mean.

![image](../Misc/023.png)

​
Instead of writing out all of the above, we commonly write x bar
  to represent the mean of a dataset. Although, similar to the first video, we could use any variable. Therefore, we might also write y bar, or any other letter.

![image](../Misc/004.png)  

We also could index using any other letter, not just ii. We could just as easily use jj, kk, or mm to index each of our data values. The quizzes on the next concept will help reinforce this idea.



![image](../Misc/005.png)

## Notation Recap

**Notation**

Notation is an essential tool for communicating mathematical ideas. We have introduced the fundamentals of notation in this lesson that will allow you to read, write, and communicate with others using your new skills!

**Notation and Random Variables**

As a quick recap, capital letters signify random variables. When we look at individual instances of a particular random variable, we identify these as lowercase letters with subscripts attach themselves to each specific observation.

For example, we might have X be the amount of time an individual spends on our website. Our first visitor arrives and spends 10 minutes on our website, and we would say \bold{x_1}x
1
​	  is 10 minutes.

We might imagine the random variables as columns in our dataset, while a particular value would be notated with the lower case letters.

![image](../Misc/006.png)

**Notation for the Mean**

We took our notation even farther by introducing the notation for summation ∑. Using this we were able to calculate the mean as:

![image](../Misc/016.png)

In the next section, you will see this notation used to assist in your understanding of calculating various measures of spread. Notation can take time to fully grasp. Understanding notation not only helps in conveying mathematical ideas, but also in writing computer programs - if you decide you want to learn that too! Soon you will analyze data using spreadsheets. When that happens, many of these operations will be hidden by the functions you will be using. But until we get to spreadsheets, it is important to understand how mathematical ideas are commonly communicated. This isn't easy, but you can do it!

----

# Lesson 2: Descriptive Statistics II

## [What are Measures of Spread](https://www.youtube.com/watch?v=zb76Z_viYLY)

## Measures of Spread

Measures of Spread are used to provide us an idea of how spread out our data are from one another. Common measures of spread include:

1. [Range](#range)
2. [Interquartile Range (IQR)](#iqr)
3. Standard Deviation
4. Variance

Throughout this lesson you will learn how to calculate these, as well as why we would use one measure of spread over another.

### [Histograms](https://www.youtube.com/watch?v=4t10RgUv2Fc)

**Histograms**

Histograms are super useful to understanding the different aspects of quantitative data. In the upcoming concepts, you will see histograms used all the time to help you understand the four aspects we outlined earlier regarding a quantitative variable:

- center
- spread
- shape
- outliers

## [Introduction to Five Number Summary](https://www.youtube.com/watch?v=gzUN5zKLHjQ)

Calculating the 5 Number Summary

**The five number summary consist of 5 values:**

1. Minimum: The smallest number in the dataset.
2. **Q1**: The value such that 25% of the data fall below.
3. **Q2**: The value such that 50% of the data fall below.
4. **Q3**: The value such that 75% of the data fall below.
5. Maximum: The largest value in the dataset.

In the above video we saw that calculating each of these values was essentially just finding the median of a bunch of different dataset. Because we are essentially calculating a bunch of medians, the calculation depends on whether we have an odd or even number of values.

## Range

The range is then calculated as the difference between the maximum and the minimum.

## IQR

The interquartile range is calculated as the difference between **Q3** and **Q1**.

In the upcoming sections, you will practice this with Katie and on your own.

## [Introduction to Standard Deviation and Variance](https://www.youtube.com/watch?v=IbwUJ3ORZ5s)

**Standard Deviation and Variance**

The **standard deviation** is one of the most common measures for talking about the spread of data. It is defined as the **average distance of each observation from the mean**.

In the above video we saw this as how far individuals were from the average distance from work (the example distances shown are examples from the full data set, the mean of just those 4 numbers is 38.5. The mean of 18 shown later in the video is the mean of the full data set which is not shown in the video). In the next video, you will see exactly how this is calculated.

![image](../Misc/007.png)

## [Standard Deviation Calculation](https://www.youtube.com/watch?v=H5zA1A-XPoY)

1. Find the Mean

![image](../Misc/008.png)

2. Look at the distance from each observation from the mean

![image](../Misc/009.png)

3. Then Average it

![image](../Misc/010.png)

**But zero is not a good measure of spread!**

***So we need to make all the values positive, the way we do this when calculating standard deviation is by squaring it***

![image](../Misc/011.png)

***Average this to find the averaged squared distance from the mean***

![image](../Misc/012.png)

This is called the **Variance** -- The average squared difference of each observation form the mean. **However, this is the averaged of squared values**, which we only did to get positive values in the first place.

The units of the variance are the square of the original units of your data.

**To get the Standard Deviation:**
Get the square root of the ending value:

![image](../Misc/013.png)

This is called the **Standard Deviation** -- on average, how far each point in our dataset is from the mean.

## Other Measures of Spread

### 5 Number Summary

In the previous sections, we have seen how to calculate the values associated with the five number summary (min, Q1, Q2, Q3, max), as well as the measures of spread associated with these values (range and IQR).

For datasets that are **not symmetric**, the five number summary and a corresponding box plot are a great way to get started with understanding the spread of your data. **Although I still prefer a histogram in most cases, box plots can be easier to compare two or more groups**. You will see this in the quizzes towards the end of this lesson.

**Variance and Standard Deviation**

Two additional **measures of spread** that are used all the time are the variance and standard deviation. At first glance, the variance and standard deviation can seem overwhelming. If you do not understand the expressions below, don't panic! In this section, I just want to give you an overview of what the next sections will cover. We will walk through each of these parts thoroughly in the next few sections, but the big picture goal is to generally understand the following:

1. How the mean, variance and standard deviation are calculated.
2. Why the measures of variance and standard deviation make sense to capture the spread of our data.
3. Fields where you might see these values used.
4. Why we might use the standard deviation or variance as opposed to the values associated with the 5 number summary for a particular dataset.

**Calculation**

We **calculate the variance** in the following way:
![image](../Misc/014.png)

The variance is the **average squared difference of each observation from the mean**.

To calculate the variance of a set of 10 values in a spreadsheet application, with our 10 data points in column A, we would create a new column B by typing in something like **=A1-AVERAGE(A$1:A$10)** and copying this down for all 10 rows. This would find us the difference between each data point and the mean average of all the data. Then we create a new column C having the square of these differences, using the formula **=B1^2** in cell C1, and copying that down for all rows. Then in the cell below this new column, cell C11, type in **=SUM(C1:C10)**. This adds up all these values in column C. Finally in cell C12, we divide this sum by the number of data points we have, in this case ten: **=C11/10**. This cell C12 now contains the variance for our 10 data points.

More detailed guidance on using spreadsheets like this may be included in a future lesson in your program.

The **standard deviation is the square root of the variance**. Therefore, the formula for the standard deviation is the following:

![image](../Misc/015.png)

In the same spreadsheet as above, to find the standard deviation of our same set of 10 data values, we would use another cell like C13 to take the square root of our variance measure, by typing in **=sqrt(C12)**.

The standard deviation is a measurement that has the same units as our original data, while the units of the variance are the square of the units in our original data. For example, if the units in our original data were dollars, then units of the standard deviation would also be dollars, while the units of the variance would be dollars squared.

Again, this section is designed as background knowledge for the following sections. If it doesn't make sense on this first pass, do not worry. You will be guided in future sections in performing these calculations, and building your intuition, as you work through an example using the salary data. Then we will provide context about why these calculations are important, and where you might see them!

### [Why the Standard Deviation?](https://www.youtube.com/watch?v=XlTBvjQ2t8w)

### [Important Final Points](https://www.youtube.com/watch?v=vXUgp2375j4)

**Important Final Points**

1. The variance is used to compare the spread of two different groups. A set of data with higher variance is more spread out than a dataset with lower variance. Be careful though, there might just be an outlier (or outliers) that is increasing the variance, when most of the data are actually very close.


2. When comparing the spread between two datasets, the units of each must be the same.


3. When data are related to money or the economy, higher variance (or standard deviation) is associated with higher risk.


4. The standard deviation is used more often in practice than the variance, because it shares the units of the original dataset.

**Use in the World**

The standard deviation is associated with risk in finance, assists in determining the significance of drugs in medical studies, and measures the error of our results for predicting anything from the amount of rainfall we can expect tomorrow to your predicted commute time tomorrow.

These applications are beyond the scope of this lesson as they pertain to specific fields, but know that understanding the spread of a particular set of data is extremely important to many areas. In this lesson you mastered the calculation of the most common measures of spread.

**Little tidbits from the quizzes**

* Additionally, the range isn't directly associated with the standard deviation, so we can't make a claim that is always true like the final option.

* Since the standard deviation is a measure of spread, a zero value suggests that all of our data points are the same value.

* Besides the mean return of an investment, we should also consider the spread associated with the return. But just because the standard deviation associated with each investment is the same, this does not mean the max you could make for each investment is the same.
