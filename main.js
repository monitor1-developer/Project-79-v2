menu_list_array = ["Cheese", "Vegetable", "Philly Cheese Steak", "Deluxe", "Honolulu Hawaiian"];

function getMenu() {
    html_data = "<ol class='menulist'>";
    menu_list_array.sort();
    for (i = 0; i < menu_list_array.length; i++) {
        html_data = html_data + "<li>" + menu_list_array[i] + "</li>";
    }
    html_data = html_data + "</ol>";
    document.getElementById("display_menu").innerHTML = html_data;
}

function add_item() {
    html_data = "<section class='cards'>";
    item = document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    for (i = 0; i < menu_list_array.length; i++) {
        html_data = html_data + "<div class='card'><img src='pizzaImg.png'/>" + menu_list_array[i] + "</div>";
    }
    html_data = html_data + "</section>";
    document.getElementById("display_menu").innerHTML = html_data;
}