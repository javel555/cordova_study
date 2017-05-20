// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
    var service = new EmployeeService();
    service.initialize().done(function () {
        console.log("Service initialized");
    });

    /* --------------------------------- Event Registration -------------------------------- */
    $('.search-key').on('keyup', findByName);
    $('.help-btn').on('click', function() {
        alert("Employee Directory v3.4");
    });

    /* ---------------------------------- Local Functions ---------------------------------- */
    function findByName() {
        service.findByName($('.search-key').val()).done(function (employees) {
            var l = employees.length;
            var e;
            $('.employee-list').empty();
            for (var i = 0; i < l; i++) {
                e = employees[i];
                $('.employee-list').append('<li><a href="#employees/' + e.id + '">' + e.firstName + ' ' + e.lastName + '</a></li>');
            }
        });
    }

}());


var viewArea = document.getElementById('view');


function setLocalStorage() {
   localStorage.setItem("Name", "John");
   localStorage.setItem("Job", "Developer");
   localStorage.setItem("Project", "Cordova Project");
}

function showLocalStorage() {
   console.log(localStorage.getItem("Name"));
   console.log(localStorage.getItem("Job"));
   console.log(localStorage.getItem("Project"));
   var text = localStorage.getItem("Name") + "<br>" +
              localStorage.getItem("Job") + "<br>" +
              localStorage.getItem("Project");
   viewArea.innerHTML = text;
}

function removeProjectFromLocalStorage() {
   localStorage.removeItem("Project");
}

function getLocalStorageByKey() {
   console.log(localStorage.key(0));
}

document.getElementById("setLocalStorage").addEventListener("click", setLocalStorage);
document.getElementById("showLocalStorage").addEventListener("click", showLocalStorage);
document.getElementById("removeProjectFromLocalStorage").addEventListener
   ("click", removeProjectFromLocalStorage);
document.getElementById("getLocalStorageByKey").addEventListener
   ("click", getLocalStorageByKey);

var localStorage = window.localStorage;	
