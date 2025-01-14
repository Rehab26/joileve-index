
//Make menu fixed when scrolling down
$(document).scroll(function() {
    var y = $(document).scrollTop(),
    screen = window.screen.height, //get page y value 
        header = $("#fixedNav");
        search = $(".search-block"); 
    if(y >= 400)  {
        header.css({position: "fixed", "top" : "0", "left" : "0"});
        header.css("background" , "#fff");
        header.css("box-shadow" , "16px 16px 44px 0px rgba(0, 0, 0, 0.05)")
        search.css({position: "fixed", "top" : "0", "left" : "0"});
    } else {
        search.css({position: "fixed", "top" : "3rem", "left" : "0"});
        header.css("position", "static");
        header.css("background" , "none");
        header.css("box-shadow" , "none")
    }
});


// Open and Close Search Bar Toggle
const searchBlock = document.querySelector(".search-block");
const searchToggle = document.querySelector(".search-toggle");
const searchCancel = document.querySelector(".search-cancel");
const navbarMenu = document.querySelector("#menu");
const logo = document.querySelector("#logo");
const leftMenu = document.querySelector("#leftMenu");
const phoneMenu = document.querySelector("#menuToggle");

if (searchToggle && searchCancel) {
   searchToggle.addEventListener("click", () => {
      searchBlock.classList.add("is-active");
      navbarMenu.classList.add('opacity-0');
      logo.classList.add('opacity-0');
      leftMenu.classList.add('opacity-0');
      phoneMenu.classList.add('opacity-0');
   });

   searchCancel.addEventListener("click", () => {
      searchBlock.classList.remove("is-active");
      navbarMenu.classList.remove('opacity-0');
      logo.classList.remove('opacity-0');
      leftMenu.classList.remove('opacity-0');
      phoneMenu.classList.remove('opacity-0');
   });
}


document.addEventListener('DOMContentLoaded', function () {
    //Dot indicators
    function setupHorizontalScrollWithIndicator(contentId, indicatorId) {
        const contentContainer = document.getElementById(contentId);
        const dotIndicator = document.getElementById(indicatorId);
    
        // Create dots based on the number of content items
        if(contentContainer && contentContainer.hasChildNodes()){
            for (let i = 0; i < contentContainer.children.length; i++) {
                const dot = document.createElement('div');
                dot.classList.add('dot');
                dot.addEventListener('click', function () {
                    scrollToItem(i);
                });
                dotIndicator.appendChild(dot);
            }
            dotIndicator.children[0].classList.add('active-dot');
        
            // Update the active dot when scrolling
            contentContainer.addEventListener('scroll', function () {
                const scrollPercentage = contentContainer.scrollLeft / (contentContainer.scrollWidth - contentContainer.clientWidth);
                const activeDotIndex = Math.round(scrollPercentage * (dotIndicator.children.length - 1));
                updateActiveDot(activeDotIndex * -1);
            });
        }
      
    
        // Function to scroll to a specific item
        function scrollToItem(index) {
            contentContainer.scrollTo({
                left: index * contentContainer.clientWidth,
                behavior: 'smooth'
            });
        }
    
        // Function to update the active dot
        function updateActiveDot(index) {
            for (let i = 0; i < dotIndicator.children.length; i++) {
                if (i === index) {
                    dotIndicator.children[i].classList.add('active-dot');
                } else {
                    dotIndicator.children[i].classList.remove('active-dot');
                }
            }
        }
        window.updateProductQuantity = function(num , value ,  input){
            const a = parseInt(value);
            if(num <0 && a == 1){
                return;
            }
            input.value =a+num;
        }
        document.querySelectorAll('#add-product').forEach(el => el.addEventListener('click',function (e){
            console.log("Clicked!!");
            e.stopImmediatePropagation();
            var target = e.target;
            var parent = target.parentElement;
            var input = parent.getElementsByTagName('input');
            var val = input[0];
            updateProductQuantity(1 , val.value , val);
        }));
        document.querySelectorAll('#remove-product').forEach(el => el.addEventListener('click',function (e){
            e.stopImmediatePropagation();
            var target = e.target;
            var parent = target.parentElement;
            var input = parent.getElementsByTagName('input');
            var val = input[0];
            updateProductQuantity(-1 , val.value , val);
        }));
    }
    
    // Initialize for each scrollable section
    setupHorizontalScrollWithIndicator( 'content', 'dot-indicator');
    setupHorizontalScrollWithIndicator( 'content1', 'dot-indicator1');
    setupHorizontalScrollWithIndicator( 'content2', 'dot-indicator2');
    setupHorizontalScrollWithIndicator( 'content3', 'dot-indicator3');
    setupHorizontalScrollWithIndicator( 'content4', 'dot-indicator4');
    // Add more setups as needed for additional scrollable sections
    
    
});

