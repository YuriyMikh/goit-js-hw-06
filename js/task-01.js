
//first task
const categories = document.querySelectorAll('#categories .item');
console.log('Number of categories:', categories.length);

// //second task
const firstCategory = document.querySelector('.item:first-child h2').textContent;
const quantityElementsFirstCategory = document.querySelectorAll('.item:first-child li').length;
console.log(`Category: ${firstCategory}`);
console.log(`Elements: ${quantityElementsFirstCategory}`);

const secondCategory = document.querySelector('.item:nth-child(2) h2').textContent;
const quantityElementsSecondCategory = document.querySelectorAll('.item:nth-child(2) li').length;
console.log(`Category: ${secondCategory}`);
console.log(`Elements: ${quantityElementsSecondCategory}`);

const thirdCategory = document.querySelector('.item:last-child h2').textContent;
const quantityElementsThirdCategory = document.querySelectorAll('.item:last-child li').length;
console.log(`Category: ${thirdCategory}`);
console.log(`Elements: ${quantityElementsThirdCategory}`);