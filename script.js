var container = document.createElement('div');
container.setAttribute('class', 'container');

var row1 = document.createElement('div');
row1.setAttribute('class', 'row');
var empty_col = document.createElement('div');
empty_col.setAttribute('class', 'col-sm-12');

var row2 = document.createElement('div');
row2.setAttribute('class', 'row');
var col_1 = document.createElement('div');
col_1.setAttribute('class', 'col-sm-3 col-md-3 col-lg-3');
var col_2 = document.createElement('div');
col_2.setAttribute('class', 'col-sm-6 col-md-6 col-lg-6');
var col_3 = document.createElement('div');
col_3.setAttribute('class', 'col-sm-3 col-md-3 col-lg-3');

var table = document.createElement('table');
table.setAttribute('class', 'table table-bordered');

var row_one = document.createElement('tr');
var data_1 = document.createElement('td');
data_1.setAttribute('colspan', '4');
var input_field = document.createElement('input');
input_field.setAttribute('type', 'text');
input_field.setAttribute('class', 'form-control');
input_field.id = 'input-value';

var row_two = document.createElement('tr');
var data_2 = document.createElement('td');
var data_3 = document.createElement('td');
var data_4 = document.createElement('td');
var data_5 = document.createElement('td');








data_1.append(input_field);
row_one.append(data_1);
row_two.append(data_2, data_3, data_4, data_5);
row_three.append(data_6, data_7, data_8, data_9);
row_four.append(data_10, data_11, data_12, data_13);
row_five.append(data_14, data_15, data_16, data_17);

table.append(row_one, row_two, row_three, row_four, row_five);
col_2.append(table);
row1.append(empty_col);
row2.append(col_1, col_2, col_3);
container.append(row1, row2);
document.body.append(container);