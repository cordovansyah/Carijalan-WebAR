// AFRAME.registerComponent('markerhandler', {

//     init: function() {
//         const animatedMarker = document.querySelector("#animated-marker");
//         const aEntity = document.querySelector("#animated-model");

//         // every click, we make our model grow in size :)
//         animatedMarker.addEventListener('click', function(ev, target){
//             const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
//             if (aEntity && intersectedElement === aEntity) {
//                 const scale = aEntity.getAttribute('scale');
//                 Object.keys(scale).forEach((key) => scale[key] = scale[key] + 1);
//                 aEntity.setAttribute('scale', scale);
//             }
//         });
// }});

// AFRAME.registerComponent('clickhandler', {
//     //Init Function
//     init: function(){
//         //Cursor Component
//         this.el.addEventListener('click', () => {
//             alert('Carijalan UI interaction works!');
//         });
//     }
// });

var buttonInteraction = document.getElementById('#buttonclicked')
buttonInteraction.addEventListener('click', () => {
    window.location = 'https://github.com/cordovansyah/Carijalan-WebAR';
    console.log('component is clicked')
})