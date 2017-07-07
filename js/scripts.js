function getTriangleArea(a, h) {
    var result;
    if ((a <= 0) || (h <= 0)) {
        alert('Nieprawidłowe dane');
    } else {
        result = a * h / 2;
    }
    return result;
}

var area1 = (getTriangleArea(4, 8));
var area2 = (getTriangleArea(12, 34));
var area3 = (getTriangleArea(22, 6));

console.log(area1);
console.log(area2);
console.log(area3);