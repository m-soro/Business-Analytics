# Lesson 1: Descriptive Statistics

## Introduction to Data Types

### Quantitative and Categorical

**Quantitative** data takes on numeric values that allow us to perform mathematical operations (like the number of dogs).

**Continuous vs. Discrete**
We can think of quantitative data as being either continuous or discrete.

**Continuous data can be split into smaller and smaller units, and still a smaller unit exists**. An example of this is the age of the dog - we can measure the units of the age in years, months, days, hours, seconds, but there are still smaller units that could be associated with the age.

**Discrete data only takes on countable values**. The number of dogs we interact with is an example of a discrete data type.

[link](https://www.youtube.com/watch?v=BzgZebZD9kk&feature=emb_logo)

----

**Categorical** are used to label a group or set of items (like dog breeds - Collies, Labs, Poodles, etc.).

**Categorical Ordinal vs. Categorical Nominal**
We can divide categorical data further into two types: Ordinal and Nominal.

**Categorical Ordinal** data take on a **ranked ordering** (like a ranked interaction on a scale from Very Poor to Very Good with the dogs).

**Categorical Nominal** data **do not have an order or ranking** (like the breeds of the dog).

[link](https://www.youtube.com/watch?v=k5bLaPGY2Vw&feature=emb_logo)

----

### Recap

| DATA TYPES    |                             |                                                       |   |   |
|---------------|-----------------------------|-------------------------------------------------------|---|---|
|               |                             |                                                       |   |   |
| Quantitative: | Continuous                  | Discrete                                              |   |   |
|               | Height, Age, Income         | Pages in a Book, Trees in Yard, Dogs at a Coffee Shop |   |   |
|               |                             |                                                       |   |   |
| Categorical:  | Ordinal                     | Nominal                                               |   |   |
|               | Letter Grade, Survey Rating | Gender, Marital Status, Breakfast Items               |   |   |

**Quantitative vs. Categorical**
Some of these can be a bit tricky - notice even though zip codes are a number, they aren’t really a quantitative variable. If we add two zip codes together, we do not obtain any useful information from this new value. Therefore, this is a categorical variable.

Height, Age, the Number of Pages in a Book and Annual Income all take on values that we can add, subtract and perform other operations with to gain useful insight. Hence, these are **quantitative**.

Gender, Letter Grade, Breakfast Type, Marital Status, and Zip Code can be thought of as labels for a group of items or individuals. Hence, these are **categorical**.
----

**Continuous vs. Discrete**
To consider if we have continuous or discrete data, we should see if we can split our data into smaller and smaller units. Consider time - we could measure an event in years, months, days, hours, minutes, or seconds, and even at seconds we know there are smaller units we could measure time in. Therefore, we know this data type is continuous. Height, age, and income are all examples of continuous data. Alternatively, the number of pages in a book, dogs I count outside a coffee shop, or trees in a yard are discrete data. We would not want to split our dogs in half.

Continuous data types are those that can take on decimal values, where discrete data types are those that are countable.
----
**Ordinal vs. Nominal**
In looking at categorical variables, we found Gender, Marital Status, Zip Code and your Breakfast items are nominal variables where there is no order ranking associated with this type of data. Whether you ate cereal, toast, eggs, or only coffee for breakfast; there is no rank ordering associated with your breakfast.

Alternatively, the Letter Grade or Survey Ratings have a rank ordering associated with it, as ordinal data. If you receive an A, this is higher than an A-. An A- is ranked higher than a B+, and so on... Ordinal variables frequently occur on rating scales from very poor to very good. In many cases we turn these ordinal variables into numbers, as we can more easily analyze them, but more on this later!
----
**Final Words**
In this section, we looked at the different data types we might work with in the world around us. When we work with data in the real world, it might not be very clean - sometimes there are typos or missing values. When this is the case, simply having some expertise regarding the data and knowing the data type can assist in our ability to ‘clean’ this data. Understanding data types can also assist in our ability to build visuals to best explain the data. But more on this very soon!

---
## Introduction to Summary Statistics

### Analyzing Quantitative Data

Four Aspects for Quantitative Data
There are four main aspects to analyzing Quantitative data.

1. Measures of Center
2. Measures of Spread
3. The Shape of the data.
4. Outliers

**Analyzing Categorical Data**
Though not discussed in the video, analyzing categorical data has fewer parts to consider. Categorical data is analyzed usually by looking at the counts or proportion of individuals that fall into each group. For example if we were looking at the breeds of the dogs, we would care about how many dogs are of each breed, or what proportion of dogs are of each breed type.

### Measures of Center
There are three measures of center:

1. Mean
2. Median
3. Mode

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
Notation is a common language used to communicate mathematical ideas. Think of notation as a universal language used by academic and industry professionals to convey mathematical ideas. In the next videos, you might see things that seem confusing. Use the quizzes to assist with your understanding of the concepts.

You likely already know some notation. Plus, minus, multiply, division, and equal signs all have mathematical symbols that you are likely familiar with. Each of these symbols replaces an idea for how numbers interact with one another. In the coming concepts, you will be introduced to some additional ideas related to notation. Though you will not need to use notation to complete the project, it does have the following properties:

    1. Understanding how to correctly use notation makes you seem really smart. Knowing how to read and write in notation is like learning a new language. A language that is used to convey ideas associated with mathematics.


    2. It allows you to read documentation, and implement an idea to your own problem. Notation is used to convey how problems are solved all the time. One really popular mathematical algorithm that is used to solve some of the world's most difficult problems is known as Gradient Boosting. The way that it solves problems is explained here: https://en.wikipedia.org/wiki/Gradient_boosting. If you really want to understand how this algorithm works, you need to be able to read and understand notation.


    3. It makes ideas that are hard to say in words easier to convey. Sometimes we just don't have the right words to say. For those situations, I prefer to use notation to convey the message. Similar to the way an emoji or meme might convey a feeling better than words, notation can convey an idea better than words. Usually those ideas are related to mathematics, but I am not here to stifle your creativity.

### [Random Variales](https://www.youtube.com/watch?v=8NxTW1u4s-Y)

**Example to Introduce Notation**
There is a lot going on in this video - here is a recap of the big ideas.

**Rows and Columns**
If you aren't familiar with spreadsheets, this will be covered in detail in future lessons. Spreadsheets are a common way to hold data. They are composed of rows and columns. Rows run horizontally, while columns run vertically. Each column in a spreadsheet commonly holds a specific variable, while each row is commonly called an instance or individual.

The example used in the video is shown below.
![image](../Misc/image1.png)

**Before Collecting Data**
Before collecting data, we usually start with a question, or many questions, that we would like to answer. The purpose of data is to help us in answering these questions.

**Random Variables**
A random variable is a placeholder for the possible values of some process (mostly... the term 'some process' is a bit ambiguous). As was stated before, notation is useful in that it helps us take complex ideas and simplify (often to a single letter or single symbol). We see random variables represented by **capital letters (X, Y, or Z are common ways to represent a random variable)**.

We might have the random variable X, which is a holder for the possible values of the amount of time someone spends on our site. Or the random variable Y, which is a holder for the possible values of whether or not an individual purchases a product.

X is 'a holder' of the values that could possibly occur for the amount of time spent on our website. Any number from 0 to infinity really.
