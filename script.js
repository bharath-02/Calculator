// function clear() {
//     document.getElementById('input-value').value = "";
// }

function display(val) {
    document.getElementById('input-value').value += val;
}

function showResult() {
    let a = document.getElementById('input-value').value;
    let result = eval(a);
    document.getElementById('input-value').value = result;
}

var container = document.createElement('div');
container.setAttribute('class', 'container');

var row1 = document.createElement('div');
row1.setAttribute('class', 'row');
var empty_col = document.createElement('div');
empty_col.setAttribute('class', 'col-sm-12');
var h1 = document.createElement('h1');
h1.innerHTML = 'Calculator';
h1.setAttribute('class', 'text-center mt-5 mb-5');

var row2 = document.createElement('div');
row2.setAttribute('class', 'row text-center');
var col_1 = document.createElement('div');
col_1.setAttribute('class', 'col-sm-12 col-md-3 col-lg-3');
var col_2 = document.createElement('div');
col_2.setAttribute('class', 'col-sm-12 col-md-6 col-lg-6');
var col_3 = document.createElement('div');
col_3.setAttribute('class', 'col-sm-12 col-md-3 col-lg-3');

var table = document.createElement('table');
table.setAttribute('class', 'table table-bordered table-dark');

var row_one = document.createElement('tr');
var data_1 = document.createElement('td');
data_1.setAttribute('colspan', '4');
var input_field = document.createElement('input');
input_field.setAttribute('type', 'text');
input_field.setAttribute('class', 'form-control');
input_field.setAttribute('id', 'input-value')

var row_two = document.createElement('tr');
var data_2 = document.createElement('td');
data_2.innerHTML = '1';
data_2.setAttribute('onclick', 'display("1")');
var data_3 = document.createElement('td');
data_3.innerHTML = '2';
data_3.setAttribute('onclick', 'display("2")');
var data_4 = document.createElement('td');
data_4.innerHTML = '3';
data_4.setAttribute('onclick', 'display("3")');
var data_5 = document.createElement('td');
data_5.innerHTML = '+';
data_5.setAttribute('onclick', 'display("+")');

var row_three = document.createElement('tr');
var data_6 = document.createElement('td');
data_6.innerHTML = '4';
data_6.setAttribute('onclick', 'display("4")');
var data_7 = document.createElement('td');
data_7.innerHTML = '5';
data_7.setAttribute('onclick', 'display("5")');
var data_8 = document.createElement('td');
data_8.innerHTML = '6';
data_8.setAttribute('onclick', 'display("6")');
var data_9 = document.createElement('td');
data_9.innerHTML = '-';
data_9.setAttribute('onclick', 'display("-")');

var row_four = document.createElement('tr');
var data_10 = document.createElement('td');
data_10.innerHTML = '7';
data_10.setAttribute('onclick', 'display("7")');
var data_11 = document.createElement('td');
data_11.innerHTML = '8';
data_11.setAttribute('onclick', 'display("8")');
var data_12 = document.createElement('td');
data_12.innerHTML = '9';
data_12.setAttribute('onclick', 'display("9")');
var data_13 = document.createElement('td');
data_13.innerHTML = '*';
data_13.setAttribute('onclick', 'display("*")');

var row_five = document.createElement('tr');
var data_14 = document.createElement('td');
data_14.innerHTML = 'C';
data_14.addEventListener('click', function() {
    document.getElementById('input-value').value = '';
});
var data_15 = document.createElement('td');
data_15.innerHTML = '0';
data_15.setAttribute('onclick', 'display("0")');
var data_16 = document.createElement('td');
data_16.innerHTML = '=';
data_16.setAttribute('onclick', 'showResult()');
var data_17 = document.createElement('td');
data_17.innerHTML = '/';
data_17.setAttribute('onclick', 'display("/")');







data_1.append(input_field);
row_one.append(data_1);
row_two.append(data_2, data_3, data_4, data_5);
row_three.append(data_6, data_7, data_8, data_9);
row_four.append(data_10, data_11, data_12, data_13);
row_five.append(data_14, data_15, data_16, data_17);
table.append(row_one, row_two, row_three, row_four, row_five);
col_2.append(table);
empty_col.append(h1);
row1.append(empty_col);
row2.append(col_1, col_2, col_3);
container.append(row1, row2);
document.body.append(container);