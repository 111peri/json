document.addEventListener("DOMContentLoaded", function() {
    const greetingElement = document.getElementById("greeting");
    const nameInput = document.getElementById("nameInput");
    const saveNameButton = document.getElementById("saveName");

    saveNameButton.addEventListener("click", function() {
        const enteredName = nameInput.value.trim();

        if (enteredName !== "") {
            const userData = {
                userName: enteredName
            };

            localStorage.setItem("userData", JSON.stringify(userData));
            greetingElement.textContent = `Привет, ${enteredName}!`;
            alert(`Привет ${enteredName}`);
        }
    });

    const savedUserData = localStorage.getItem("userData");

    if (savedUserData) {
        const userData = JSON.parse(savedUserData);
        const savedName = userData.userName;
        greetingElement.textContent = `Привет, ${savedName}!`;
    }
});




document.addEventListener("DOMContentLoaded", function() {
    const counterElement = document.getElementById("counter");
    const increaseButton = document.getElementById("increaseButton");

    increaseButton.addEventListener("click", function() {
        let currentCount = parseInt(counterElement.textContent);
        currentCount++;

        counterElement.textContent = currentCount;


        localStorage.setItem("counterValue", currentCount); // Сохраняем счетчик в localStorage
    });


    const savedCounterValue = localStorage.getItem("counterValue"); // Получаем сохраненное значение счетчика из localStorage

    if (savedCounterValue) {
        counterElement.textContent = savedCounterValue;




        document.addEventListener("DOMContentLoaded", function() {
            const itemInput = document.getElementById("itemInput");
            const addItemButton = document.getElementById("addItemButton");
            const shoppingList = document.getElementById("shoppingList");

            addItemButton.addEventListener("click", function() {
                const newItem = itemInput.value.trim();

                if (newItem !== "") {
                    addItemToList(newItem);
                    saveShoppingList();
                    itemInput.value = "";
                    itemInput.focus();
                }
            });

            function addItemToList(item) {
                const li = document.createElement("li");
                li.textContent = item;
                shoppingList.appendChild(li);
            }

            function saveShoppingList() {
                const items = Array.from(shoppingList.getElementsByTagName("li")).map(li => li.textContent);
                localStorage.setItem("shoppingList", JSON.stringify(items));
            }

            function loadShoppingList() {
                const savedItems = localStorage.getItem("shoppingList");

                if (savedItems) {
                    const items = JSON.parse(savedItems);
                    items.forEach(item => addItemToList(item));
                }
            }

            loadShoppingList();
        });

    }
});