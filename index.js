
//Make menu fixed when scrolling down
$(document).scroll(function() {
    var y = $(document).scrollTop(), //get page y value 
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
      navbarMenu.classList.add('hidden');
      logo.classList.add('hidden');
      leftMenu.classList.add('hidden');
      phoneMenu.classList.add('hidden');
   });

   searchCancel.addEventListener("click", () => {
      searchBlock.classList.remove("is-active");
      navbarMenu.classList.remove('hidden');
      logo.classList.remove('hidden');
      leftMenu.classList.remove('hidden');
      phoneMenu.classList.remove('hidden');
   });
}

//Dot indicators
document.addEventListener('DOMContentLoaded', function () {
    

    function setupHorizontalScrollWithIndicator(contentId, indicatorId) {
        const contentContainer = document.getElementById(contentId);
        const dotIndicator = document.getElementById(indicatorId);
    
        // Create dots based on the number of content items
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
    }
    
    // Initialize for each scrollable section
    setupHorizontalScrollWithIndicator( 'content', 'dot-indicator');
    setupHorizontalScrollWithIndicator( 'content1', 'dot-indicator1');
    setupHorizontalScrollWithIndicator( 'content2', 'dot-indicator2');
    setupHorizontalScrollWithIndicator( 'content3', 'dot-indicator3');
    setupHorizontalScrollWithIndicator( 'content4', 'dot-indicator4');
    // Add more setups as needed for additional scrollable sections
    
});

