function splitAndCombine(arr) {
    const half = arr.length / 2;
    return [...arr.toSpliced(0, half), ...arr.toSpliced(half, half)]
}

let arr = [0, 1, 2, 3, 4, 5, 6, 7];
const result = splitAndCombine(arr);
console.log(result);

  // 출력 결과 :
  // [4,5,6,7,0,1,2,3]

function printClickEventLogs(logs) {
    logs.forEach(log => {
        const {type, date} = log;
        if (type === 'click') {
            console.log(`${type}: ${new Date(date).toLocaleString()}`);
        }
    })
}

printClickEventLogs([
  {
    type: "click",
    date: "2023-01-01T12:00:00Z",
  },
  {
    type: "hover",
    date: "2023-01-01T12:10:00Z",
  },
  {
    type: "scroll",
    date: "2023-01-01T12:15:00Z",
  },
  {
    type: "click",
    date: "2023-01-01T12:20:00Z",
  },
]);

// 출력 결과
// click :: 2023. 1. 1. 오후 9:00:00
// click :: 2023. 1. 1. 오후 9:20:00

function getDiscountedMenus(menus) {
    return menus.map(menu => {
        menu.disCountedPrice = menu.price - 500;
        return menu;
    })
}

const discountedMenus = getDiscountedMenus([
    { itemId: 1, name: "아메리카노", price: 3000 },
    { itemId: 2, name: "라떼", price: 3500 },
    { itemId: 3, name: "초콜릿 케이크", price: 5000 },
    { itemId: 4, name: "크로와상", price: 2800 },
]);

console.log(discountedMenus);
  // 출력 결과 :
  // { itemId: 1, name: '아메리카노', price: 3000, discountedPrice: 2500 },
  // { itemId: 2, name: '라떼', price: 3500, discountedPrice: 3000 },
  // { itemId: 3, name: '초콜릿 케이크', price: 5000, discountedPrice: 4500 },
  // { itemId: 4, name: '크로와상', price: 2800, discountedPrice: 2300 }

function getSortedBooks(books) {
    return books.toSorted((a, b) => b.published.getTime() - a.published.getTime());
}

const sortedBooks = getSortedBooks([
{
    title: "한입 리액트",
    published: new Date("2023. 04. 06"),
},
{
    title: "웹 프론트엔드 첫 걸음",
    published: new Date("2024. 04. 30"),
},
{
    title: "이펙티브 타입스크립트",
    published: new Date("2021. 06. 27"),
},
{
    title: "클린코드",
    published: new Date("2013. 12. 24"),
},
]);

console.log(sortedBooks);
  // 출력 결과 :
  // { title: '웹 프론트엔드 첫 걸음', published: 2024-04-29T15:00:00.000Z},
  // { title: '한입 리액트', published: 2023-04-05T15:00:00.000Z },
  // { title: '이펙티브 타입스크립트', published: 2021-06-26T15:00:00.000Z},
  // { title: '클린코드', published: 2013-12-23T15:00:00.000Z }