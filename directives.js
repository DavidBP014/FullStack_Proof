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

// Mostrar modal de éxito
function showSuccessModal() {
    successModal.style.display = "flex";
}

// Mostrar modal de error
function showErrorModal() {
    errorModal.style.display = "flex";
}

// Ocultar modales
function hideModals() {
    successModal.style.display = "none";
    errorModal.style.display = "none";
}

successOkBtn.addEventListener("click", hideModals);
errorOkBtn.addEventListener("click", hideModals);

// Ocultar modales al hacer clic fuera de ellos
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
    // Llamar a la función/API para obtener los posts basados en la fecha seleccionada
    fetchPostsByDate(selectedDate);
});

function fetchPostsByDate(date) {
    // Aquí debes agregar la lógica o llamar a una API para obtener los posts basados en la fecha seleccionada.

    const noResultsDiv = document.querySelector(".no-results");
    const postsDiv = document.querySelector(".posts");

    // Simulación: supongamos que tienes un array llamado 'posts' que contiene las publicaciones
    // Si no hay publicaciones para la fecha seleccionada:
    if (posts.length === 0) {
        noResultsDiv.style.display = "block";
        postsDiv.style.display = "none";
        shownPostsElem.textContent = "No Results Here";
        totalPostsElem.textContent = "";
    } else {
        noResultsDiv.style.display = "none";
        postsDiv.style.display = "block";
        // Actualiza el contenido del div .posts según los resultados.
        // Actualiza los valores de shownPostsElem y totalPostsElem según sea necesario.
    }
}

document.getElementById('searchInput').addEventListener('input', function() {
    filterPostsByTitle(this.value);
});

document.getElementById('dateSelect').addEventListener('change', function() {
    filterPostsByDate(this.value);
});

function filterPostsByTitle(searchTerm) {
    // Aquí iría tu lógica para filtrar los posts por título
    // También debes resaltar las palabras que coinciden con el término de búsqueda
}

function filterPostsByDate(date) {
    // Aquí iría tu lógica para filtrar los posts por fecha
}