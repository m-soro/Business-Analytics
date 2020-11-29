# Analyze Data

## Aggregation Function
  * Function that operates accros a group of data resulting in a single value.


**Quiz: Logical Functions**

In the following quiz, you'll need to combine what you've learned so far in a new way.Your task is to add a formula in F2 and fill it down the `Special Order?` column such that the column fulfills the following statement:

```
    If the maximum number of any one fruit exceeds 10 pieces in an order,     
        or the total order exceeds 20 pieces (all fruit),
        then mark it with "Special Order".
    Otherwise, mark it with "No".
```



[Logical Functions Practice](./Misc/special-orders.xlsx)

**Solution**

`=IF(OR(MAX(B2:D2)>10,E2>20),"Special Order","No")`

### Conditional Aggregation Functions



### Countif and Sumif

  * text and expression criterion has to be in `""`.

#### Exercise: COUNTIF, SUMIF

In this exercise, you'll practice using the aggregation functions from the demo, `COUNTIF` and `SUMIF`. The data set will be similar too, except the names and teams are different because your exercise set, `ALbb_salaries_2003.csv`, is the American League Baseball salaries from 2003.

[SUMIF/COUNTIF](./Misc/albb-salaries-2003.xlsx)

### Pivot Tables

In this exercise, you will follow the same steps as in the demo to create a pivot table from data and answer questions. The only difference is that you will use the now familiar ALbb_salaries_2003.csv data set to do so.

[Pivot Practice](./Misc/albb-salaries-2003-pivot.xlsx)

### Named Ranges and Lookup



In vlookup `false` means an exact match, `true` means closest thing.



#### Exercise: VLOOKUP

In this exercise, you'll start with a spreadsheet of all airline routes out of the San Francisco airport, `air_routes_SFO.xlsx`. The routes are listed by the airline and airport codes, so they aren't very user friendly to those that don't know the codes. Your task will be to use Named Ranges and `VLOOKUP` to add columns that provide the full names of the airlines and destination airports. Your airline and airport lookup codes are on separate sheets within the workbook provided.

To answer the quiz questions, you may want to use some of the other functions you've learned as well. There are several ways to solve the problems presented, but some ways are easier than others.

For example, the first few rows should look like this once you've inserted the correct formulas:



[Lookups/Pivot/Named Range](./Misc/air-routes-sfo.xlsx)
