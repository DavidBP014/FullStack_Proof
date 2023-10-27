// directives.js
app.directive('matchPassword', function() {
    return {
        require: 'ngModel',
        scope: {
            otherModelValue: '=matchPassword'
        },
        link: function(scope, element, attributes, ngModel) {

            ngModel.$validators.noMatch = function(modelValue) {
                return modelValue == scope.otherModelValue;
            };

            scope.$watch("otherModelValue", function() {
                ngModel.$validate();
            });
        }
    };
});

document.getElementById("title-input").addEventListener("keyup", function() {
    document.getElementById("preview-title").textContent = this.value || "Your post title";
});

document.getElementById("message-input").addEventListener("keyup", function() {
    document.getElementById("preview-message").textContent = this.value || "Create message for share with your friends.";
});

const successModal = document.getElementById("success-modal");
const errorModal = document.getElementById("error-modal");
const successOkBtn = document.getElementById("success-ok");
const errorOkBtn = document.getElementById("error-ok");


function showSuccessModal() {
    successModal.style.display = "flex";
}

function showErrorModal() {
    errorModal.style.display = "flex";
}

function hideModals() {
    successModal.style.display = "none";
    errorModal.style.display = "none";
}

successOkBtn.addEventListener("click", hideModals);
errorOkBtn.addEventListener("click", hideModals);

window.addEventListener("click", function(event) {
    if (event.target === successModal || event.target === errorModal) {
        hideModals();
    }
});

const dateSelect = document.getElementById("date-select");
const shownPostsElem = document.getElementById("shown-posts");
const totalPostsElem = document.getElementById("total-posts");
const postContainer = document.querySelector(".posts");

dateSelect.addEventListener("change", function() {
    const selectedDate = dateSelect.value;

    fetchPostsByDate(selectedDate);
});

function fetchPostsByDate(date) {


    const noResultsDiv = document.querySelector(".no-results");
    const postsDiv = document.querySelector(".posts");


    if (posts.length === 0) {
        noResultsDiv.style.display = "block";
        postsDiv.style.display = "none";
        shownPostsElem.textContent = "No Results Here";
        totalPostsElem.textContent = "";
    } else {
        noResultsDiv.style.display = "none";
        postsDiv.style.display = "block";

    }
}

document.getElementById('searchInput').addEventListener('input', function() {
    filterPostsByTitle(this.value);
});

document.getElementById('dateSelect').addEventListener('change', function() {
    filterPostsByDate(this.value);
});