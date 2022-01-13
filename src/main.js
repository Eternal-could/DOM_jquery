// const api = jQuery('.test');
// api.addClass('red').addClass('blue'); // 链式操作 遍历所有刚才获取的元素， 添加的add

// 以上 简写
// jQuery('.test')
//     .addClass('red')
//     .addClass('blue'); // 链式操作 遍历所有刚才获取的元素， 添加的add

// const x1 = jQuery('.test').find('.child');
// console.log(x1)

const div1 = document.querySelector('.test');
const div2 = $('.test');
// 那么 div2 到底是 DOM对象还是 jQuery对象
// Dom对象只能用DOM API querySelector app endChild
// jQuery对象只能使用自己的api 比如： find each
// 命名的时候 首字母用$起名