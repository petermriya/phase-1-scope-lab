var customerName = 'bob';
function upperCaseCustomerName(){
    customerName = (customerName.toUpperCase());
    return customerName;
}

var bestCustomer;
function setBestCustomer(){
    return(bestCustomer = 'not bob');
}
function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
    return bestCustomer;
}
const leastFavoriteCustomer = 'Jeff';
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'Ken';
}