function triggerAnimation(counter){
    const prefix = counter.textContent.split(" ")[0];
    var count = +counter.textContent.split(" ")[1];

    const updateCount = () =>{
        const target = +counter.getAttribute('data-target');

        var speed = 50 + 150 * (count / target)

        var inc = Math.round(target / speed);

        count = count + inc;

        if(count < target) {
            counter.textContent = prefix + " " + count;
            setTimeout(updateCount, 10);
        } else{
            counter.textContent = prefix + " " + target;
        }
    }
    updateCount();
}

// define an observer instance
var observer = new IntersectionObserver(onIntersection, {
    root: null,   // default is the viewport
    threshold: .5 // percentage of target's visible area. Triggers "onIntersection"
})
  
// callback is called on intersection change
function onIntersection(entries, opts){
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            triggerAnimation(entry.target);
            observer.unobserve(entry.target);
        }
    });
}
  
// Use the observer to observe an element
observer.observe(document.querySelector('#counter_1'))
observer.observe(document.querySelector('#counter_2'))