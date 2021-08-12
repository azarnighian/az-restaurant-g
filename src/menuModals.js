// https://www.w3schools.com/howto/howto_css_modals.asp

export const menuModals = () => {
    // Get the modal
    var modal = document.getElementById("menuModal");
    
    // Add a onclick to each menu item header
    document.querySelectorAll('h2').forEach(function (food, index) {
        // https://stackoverflow.com/questions/24050456/onclick-assigned-function-with-parameters            
        food.addEventListener('click', function() {
            // Hide all images
            document.querySelectorAll('.modal-content img').forEach(function (img) {
                img.style.display = "none";
            });
            // Show modal
            modal.style.display = "flex";
            // Get and show the specific image for this food
            var img = document.getElementById(`${index}`);
            img.style.display = "block";
        });
    });

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];    

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }

    // When the user clicks 'esc', close it
        // https://stackoverflow.com/a/47614278/11528872
    document.addEventListener('keydown', function(event) {
        const key = event.key;
        if (key === "Escape") {
            modal.style.display = "none";
        }
    });
}